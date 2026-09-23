/**
 * Monday.com GraphQL API v2 - søknadsintegrasjon for serviceelektriker-stillingen
 *
 * Board: "Service CV/søknader" (ID: 18432436980)
 * Workspace: Service
 * Gruppe: "Søknader" (ID: topics)
 *
 * Bruker samme MONDAY_API_KEY som resten av nettsiden (kontonivå-token,
 * ikke bundet til ett enkelt board).
 *
 * Kolonne-ID-ene under er hentet og bekreftet mot det ekte boardet via:
 *   query { boards(ids: [18432436980]) { columns { id title type } groups { id title } } }
 */

const MONDAY_API_URL = "https://api.monday.com/v2";
const BOARD_ID = "18432436980";

const GROUP_ID = "topics";
const COLUMN_IDS = {
  status: "status",
  receivedDate: "date4",
  email: "text_mm7fm4ws",
  phone: "phone_mm7fzk8q",
  cv: "file_mm7fz768",
  message: "long_text_mm7f5mmq",
} as const;

const STATUS_NEW_APPLICATION = "Ny søknad";

export interface ServiceApplicationData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

interface MondayApiResponse {
  data?: {
    create_item?: { id: string };
  };
  errors?: Array<{ message: string }>;
}

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function buildColumnValues(data: ServiceApplicationData): string {
  const columns: Record<string, unknown> = {
    [COLUMN_IDS.status]: { label: STATUS_NEW_APPLICATION },
    [COLUMN_IDS.receivedDate]: { date: todayIsoDate() },
    [COLUMN_IDS.email]: data.email,
    [COLUMN_IDS.phone]: {
      phone: data.phone.startsWith("+") ? data.phone : `+47${data.phone}`,
      countryShortName: "NO",
    },
  };

  if (data.message) {
    columns[COLUMN_IDS.message] = { text: data.message };
  }

  return JSON.stringify(columns);
}

export async function createServiceApplicationItem(
  data: ServiceApplicationData
): Promise<string> {
  const apiKey = process.env.MONDAY_API_KEY;

  if (!apiKey) {
    throw new Error("Mangler MONDAY_API_KEY");
  }

  const itemName = `${data.name} - Serviceelektriker`;
  const columnValues = buildColumnValues(data);

  const query = `
    mutation {
      create_item(
        board_id: ${BOARD_ID},
        group_id: ${JSON.stringify(GROUP_ID)},
        item_name: ${JSON.stringify(itemName)},
        column_values: ${JSON.stringify(columnValues)}
      ) {
        id
      }
    }
  `;

  const response = await fetch(MONDAY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
      "API-Version": "2024-10",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Monday API HTTP-feil: ${response.status}`);
  }

  const json: MondayApiResponse = await response.json();

  if (json.errors?.length) {
    throw new Error(`Monday API-feil: ${json.errors.map((e) => e.message).join(", ")}`);
  }

  const itemId = json.data?.create_item?.id ?? "";
  console.log(`[monday-service-application] Opprettet søknad med ID: ${itemId}`);
  return itemId;
}

export async function uploadCvToApplication(
  itemId: string,
  file: { filename: string; content: Buffer }
): Promise<void> {
  const apiKey = process.env.MONDAY_API_KEY;
  if (!apiKey || !itemId) return;

  const query = `mutation ($file: File!) { add_file_to_column(item_id: ${itemId}, column_id: "${COLUMN_IDS.cv}", file: $file) { id } }`;

  const formData = new FormData();
  formData.append("query", query);
  formData.append("map", JSON.stringify({ file: "variables.file" }));
  formData.append("file", new Blob([new Uint8Array(file.content)]), file.filename);

  const response = await fetch(MONDAY_API_URL + "/file", {
    method: "POST",
    headers: {
      Authorization: apiKey,
      "API-Version": "2024-10",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Monday filopplasting-feil: ${response.status}`);
  }

  console.log(`[monday-service-application] Lastet opp CV: ${file.filename}`);
}
