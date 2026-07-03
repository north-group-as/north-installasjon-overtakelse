/**
 * Monday.com GraphQL API v2 - Lead-integrasjon
 *
 * Board: "CRM - Service" (ID: 18372254990)
 * Gruppe: "Leads" (ID: topics)
 *
 * Env-variabler:
 * - MONDAY_API_KEY: API-nøkkel fra monday.com > Profil > Developer > API
 * - MONDAY_BOARD_ID: 18372254990
 * - MONDAY_ADDRESS_COLUMN_ID: valgfri override for adressefelt
 * - MONDAY_ADDRESS_COLUMN_TYPE: valgfri override for type ("location", "text" eller "long_text")
 */

const MONDAY_API_URL = "https://api.monday.com/v2";

const GROUP_ID = "topics";

const COLUMN_IDS = {
  phone: "phone_mkzv136c",
  email: "email_mm1pvm2y",
  source: "text_mm1phj09",
  message: "long_text_mm1pz6x6",
  service: "text_mm1p4khq",
  estimate: "numeric_mm1p576a",
  haster: "boolean_mm1ppcw",
  file: "file_mm1phtwh",
} as const;

export type LeadSource = "kontakt" | "kalkulator" | "jobb";

export interface LeadData {
  source: LeadSource;
  name: string;
  phone: string;
  email: string;
  address?: string;
  addressPlaceId?: string;
  addressLat?: number;
  addressLng?: number;
  message?: string;
  service?: string;
  estimate?: number;
  haster?: boolean;
  position?: string;
}

interface MondayApiResponse {
  data?: {
    create_item?: { id: string };
  };
  errors?: Array<{ message: string }>;
}

interface MondayColumn {
  id: string;
  title: string;
  type: string;
}

interface MondayColumnsResponse {
  data?: {
    boards?: Array<{
      columns?: MondayColumn[];
    }>;
  };
  errors?: Array<{ message: string }>;
}

let cachedAddressColumn: MondayColumn | null | undefined;

function appendAddressToMessage(message: string | undefined, address: string): string {
  const addressLine = `Adresse: ${address}`;
  return message ? `${message}\n\n${addressLine}` : addressLine;
}

function canWriteAddressColumn(data: LeadData, column: MondayColumn | null): column is MondayColumn {
  if (!data.address || !column) return false;

  if (column.type === "text" || column.type === "long_text") {
    return true;
  }

  return column.type === "location" &&
    typeof data.addressLat === "number" &&
    typeof data.addressLng === "number";
}

async function resolveAddressColumn(apiKey: string, boardId: string): Promise<MondayColumn | null> {
  if (cachedAddressColumn !== undefined) return cachedAddressColumn;

  const configuredId = process.env.MONDAY_ADDRESS_COLUMN_ID;
  const configuredType = process.env.MONDAY_ADDRESS_COLUMN_TYPE;

  try {
    const query = `
      query {
        boards(ids: [${boardId}]) {
          columns {
            id
            title
            type
          }
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
      console.warn(`[monday] Klarte ikke hente kolonner for adressefelt: ${response.status}`);
    } else {
      const json: MondayColumnsResponse = await response.json();
      if (json.errors?.length) {
        console.warn(`[monday] Kolonneoppslag feilet: ${json.errors.map((e) => e.message).join(", ")}`);
      }

      const columns = json.data?.boards?.[0]?.columns ?? [];
      const configuredColumn = configuredId
        ? columns.find((column) => column.id === configuredId)
        : undefined;
      const detectedColumn = columns.find((column) =>
        /adresse|address/i.test(column.title)
      );

      const column = configuredColumn ?? detectedColumn;
      if (column) {
        cachedAddressColumn = column;
        return column;
      }
    }
  } catch (error) {
    console.warn("[monday] Kolonneoppslag for adressefelt feilet:", error);
  }

  if (configuredId) {
    cachedAddressColumn = {
      id: configuredId,
      title: "Adresse",
      type: configuredType || "text",
    };
    return cachedAddressColumn;
  }

  console.warn(
    "[monday] Fant ikke adressefelt. Legg til et Monday-felt med tittel 'Adresse', eller sett MONDAY_ADDRESS_COLUMN_ID."
  );
  cachedAddressColumn = null;
  return null;
}

function buildColumnValues(data: LeadData, addressColumn: MondayColumn | null): string {
  const sourceLabels: Record<string, string> = {
    kontakt: "Kontaktskjema",
    kalkulator: "Kalkulator",
  };

  const columns: Record<string, unknown> = {
    [COLUMN_IDS.phone]: { phone: data.phone.startsWith("+") ? data.phone : `+47${data.phone}`, countryShortName: "NO" },
    [COLUMN_IDS.email]: { email: data.email, text: data.email },
    [COLUMN_IDS.source]: sourceLabels[data.source] ?? data.source,
  };

  if (data.message) {
    columns[COLUMN_IDS.message] = { text: data.message };
  }

  if (data.address && addressColumn) {
    if (addressColumn.type === "location" && typeof data.addressLat === "number" && typeof data.addressLng === "number") {
      columns[addressColumn.id] = {
        address: data.address,
        lat: String(data.addressLat),
        lng: String(data.addressLng),
      };
    } else if (addressColumn.type === "long_text") {
      columns[addressColumn.id] = { text: data.address };
    } else {
      columns[addressColumn.id] = data.address;
    }
  }

  if (data.service) {
    columns[COLUMN_IDS.service] = data.service;
  }

  if (typeof data.estimate === "number") {
    columns[COLUMN_IDS.estimate] = String(data.estimate);
  }

  if (data.haster) {
    columns[COLUMN_IDS.haster] = { checked: "true" };
  }

  return JSON.stringify(columns);
}

export async function createMondayItem(data: LeadData): Promise<string> {
  // Jobbsøknader sendes ikke til Monday (kun e-post)
  if (data.source === "jobb") {
    console.log("[monday] Hopper over jobbsøknad - sendes kun via e-post");
    return "";
  }

  const apiKey = process.env.MONDAY_API_KEY;
  const boardId = process.env.MONDAY_BOARD_ID;

  if (!apiKey || !boardId) {
    console.warn(
      "[monday] Mangler MONDAY_API_KEY eller MONDAY_BOARD_ID - hopper over Monday-integrasjon"
    );
    return "";
  }

  const itemName = `${data.name} – Henvendelse`;
  const addressColumn = data.address ? await resolveAddressColumn(apiKey, boardId) : null;
  const mondayData =
    data.address && !canWriteAddressColumn(data, addressColumn)
      ? {
          ...data,
          message: appendAddressToMessage(data.message, data.address),
        }
      : data;
  const columnValues = buildColumnValues(
    mondayData,
    canWriteAddressColumn(mondayData, addressColumn) ? addressColumn : null
  );

  const query = `
    mutation {
      create_item(
        board_id: ${boardId},
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
  console.log(`[monday] Opprettet kort med ID: ${itemId}`);
  return itemId;
}

export async function uploadFilesToMondayItem(
  itemId: string,
  files: { filename: string; content: Buffer }[]
): Promise<void> {
  const apiKey = process.env.MONDAY_API_KEY;
  if (!apiKey || !itemId || files.length === 0) return;

  for (const file of files) {
    const query = `mutation ($file: File!) { add_file_to_column(item_id: ${itemId}, column_id: "${COLUMN_IDS.file}", file: $file) { id } }`;

    const formData = new FormData();
    formData.append("query", query);
    formData.append(
      "map",
      JSON.stringify({ image: "variables.file" })
    );
    formData.append(
      "image",
      new Blob([new Uint8Array(file.content)]),
      file.filename
    );

    const response = await fetch(MONDAY_API_URL + "/file", {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "API-Version": "2024-10",
      },
      body: formData,
    });

    if (!response.ok) {
      console.error(
        `[monday] Filopplasting feilet for ${file.filename}: ${response.status}`
      );
    } else {
      console.log(`[monday] Lastet opp fil: ${file.filename}`);
    }
  }
}
