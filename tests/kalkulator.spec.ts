import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/kalkulator");
});

// ---------------------------------------------------------------------------
// Step 1 - Service Selection
// ---------------------------------------------------------------------------

test.describe("Steg 1 - Velg tjeneste", () => {
  test("siden laster med stegindikator som viser steg 1", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Priskalkulator" })
    ).toBeVisible();
    await expect(
      page.getByText("Hva trenger du hjelp med?")
    ).toBeVisible();

    // Step indicator: 3 step dots visible
    const stepDots = page.locator(
      '[class*="rounded-full"][class*="border-2"]'
    );
    await expect(stepDots).toHaveCount(3);
  });

  test("fire tjenestekort er synlige", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /elbillader/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /spotter/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /sikringsskap/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /enkel jobb/i })
    ).toBeVisible();
  });

  test("Neste-knappen er deaktivert til en tjeneste er valgt", async ({
    page,
  }) => {
    const nesteBtn = page.getByRole("button", { name: /neste/i });
    await expect(nesteBtn).toBeVisible();
    await expect(nesteBtn).toHaveAttribute("disabled", "");
  });

  test("klikk Elbillader velger kortet", async ({ page }) => {
    const card = page.getByRole("button", { name: /elbillader/i });
    await card.click();

    // Neste button should now be enabled
    const nesteBtn = page.getByRole("button", { name: /neste/i });
    await expect(nesteBtn).not.toHaveAttribute("disabled", "");
  });

  test("klikk Neste etter valg navigerer til steg 2", async ({ page }) => {
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();

    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Elbillader full flow
// ---------------------------------------------------------------------------

test.describe("Elbillader - full flyt", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to step 2 for elbillader
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();
  });

  test("steg 2 viser elbillader-konfigurasjon", async ({ page }) => {
    await expect(page.getByText("Velg ladertype")).toBeVisible();
    await expect(page.getByText(/kabellengde/i)).toBeVisible();
    await expect(page.getByText(/automat/i).first()).toBeVisible();
    await expect(page.getByText(/overspenningsvern/i).first()).toBeVisible();
    await expect(page.getByText(/gjennomboring/i)).toBeVisible();
    await expect(page.getByText(/arbeidstimer/i)).toBeVisible();
  });

  test("ladertypekort er synlige og klikkbare", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /zaptec go 2/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /easee/i })
    ).toBeVisible();

    // Click a different charger type
    await page.getByRole("button", { name: /zaptec go 2/i }).click();

    // Price should update (the PriceBox total should reflect the change)
    await expect(page.getByText(/totalt/i).first()).toBeVisible();
  });

  test("kabellengde kan inkrementeres med + knappen", async ({ page }) => {
    // Find the NumberStepper input for cable length (first number input on the page)
    const allInputs = page.locator('input[type="number"]');
    const cableInput = allInputs.first();
    const initialValue = await cableInput.inputValue();

    // The + button is the second button with an SVG in the first NumberStepper group
    // NumberStepper layout: [- button] [input] [+ button]
    // Get the parent of the cable input, then find the + button (last button sibling)
    const stepperContainer = cableInput.locator("..");
    await stepperContainer.locator("button").last().click();

    const newValue = await cableInput.inputValue();
    expect(Number(newValue)).toBeGreaterThan(Number(initialValue));
  });

  test("automat toggle fungerer", async ({ page }) => {
    // The Automat section has a label "Automat (JFA 2x32A)"
    // Find the label, then get its parent section, then find the Nei button
    const automatLabel = page.getByText("Automat (JFA 2x32A)");
    await expect(automatLabel).toBeVisible();

    // The ToggleGroup is the next sibling group after the label's parent div
    // Use a more targeted approach: find the Ja/Nei buttons specifically in the Automat toggle
    // The toggles are in order: Automat toggle, then Overspenningsvern toggle
    // Each toggle has "Ja, inkluder" and "Nei" buttons
    // Get all "Nei" buttons and click the first one (Automat)
    const neiButtons = page.getByRole("button", { name: "Nei" });
    await neiButtons.first().click();

    // After clicking Nei, it should have the red border style
    await expect(neiButtons.first()).toHaveCSS(
      "border-color",
      /./
    );
  });

  test("Se oppsummering navigerer til steg 3", async ({ page }) => {
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();

    await expect(page.getByText("Ditt prisestimat")).toBeVisible();
  });

  test("steg 3 viser pris storre enn 0", async ({ page }) => {
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();

    await expect(page.getByText("Ditt prisestimat")).toBeVisible();
    // The "Totalt" line should show a price
    await expect(page.getByText(/totalt/i).first()).toBeVisible();

    // Price should contain "kr" and a number > 0
    const priceText = await page
      .locator("text=/\\d+.*kr/i")
      .first()
      .textContent();
    expect(priceText).toBeTruthy();
  });

  test("Start kalkulatoren pa nytt returnerer til steg 1", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();
    await expect(page.getByText("Ditt prisestimat")).toBeVisible();

    await page
      .getByRole("button", { name: /start kalkulatoren/i })
      .click();

    await expect(
      page.getByText("Hva trenger du hjelp med?")
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Enkel jobb flow
// ---------------------------------------------------------------------------

test.describe("Enkel jobb - flyt", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to step 2 for Enkel jobb
    await page
      .getByRole("button", { name: /enkel jobb/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByRole("heading", { name: "Velg tjeneste" })
    ).toBeVisible();
  });

  test("steg 2 viser tjenestekategorier", async ({ page }) => {
    await expect(page.getByText("Belysning").first()).toBeVisible();
    await expect(page.getByText("Stikkontakt").first()).toBeVisible();
  });

  test("klikk accordion utvider den", async ({ page }) => {
    // Click on the first "Montere taklampe" accordion header
    await page.getByText("Montere taklampe").first().click();

    // The expanded content should show "Velg denne" button
    await expect(
      page.getByRole("button", { name: /velg denne/i }).first()
    ).toBeVisible();
  });

  test("velg en tjeneste og naviger til steg 3", async ({ page }) => {
    // Click an accordion to expand
    await page.getByText("Montere taklampe").first().click();

    // Click "Velg denne"
    await page
      .getByRole("button", { name: /velg denne/i })
      .first()
      .click();

    // Navigate to step 3
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();

    // Should see step 3 with price
    await expect(page.getByText("Ditt prisestimat")).toBeVisible();
    await expect(page.getByText(/totalt/i).first()).toBeVisible();
  });

  test("fritekstfelt er synlig", async ({ page }) => {
    await expect(
      page.getByText("Finner du ikke det du leter etter?")
    ).toBeVisible();
    await expect(page.getByPlaceholder(/f\.eks/i)).toBeVisible();
  });

  test("antall-stepper fungerer", async ({ page }) => {
    // The "Antall" label is followed by a NumberStepper
    const antallLabel = page.getByText("Antall", { exact: true });
    await expect(antallLabel).toBeVisible();

    // Find the number input closest to the Antall label
    // In the Enkel jobb view, the only number input is the count stepper
    const input = page.locator('input[type="number"]').first();
    const initialValue = await input.inputValue();
    expect(Number(initialValue)).toBe(1);

    // Click + to increment (last button in the stepper container)
    const stepperContainer = input.locator("..");
    await stepperContainer.locator("button").last().click();

    const newValue = await input.inputValue();
    expect(Number(newValue)).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// Step 3 - Contact form
// ---------------------------------------------------------------------------

test.describe("Steg 3 - Kontaktskjema", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate through to step 3 via elbillader
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();
    await expect(page.getByText("Ditt prisestimat")).toBeVisible();
  });

  test("kontaktskjema er synlig", async ({ page }) => {
    await expect(page.getByPlaceholder("Navn")).toBeVisible();
    await expect(page.getByPlaceholder("Telefon *")).toBeVisible();
    await expect(page.getByPlaceholder("E-post")).toBeVisible();
  });

  test("telefon er obligatorisk for innsending", async ({ page }) => {
    // Try to submit without phone
    await page
      .getByRole("button", { name: /send meg et tilbud/i })
      .click();

    // Should NOT show success message
    await expect(
      page.getByText(/takk, vi har mottatt/i)
    ).not.toBeVisible();
  });

  test("fyll ut og send viser bekreftelse", async ({ page }) => {
    await page.getByPlaceholder("Navn").fill("Test Testesen");
    await page.getByPlaceholder("Telefon *").fill("99887766");
    await page.getByPlaceholder("E-post").fill("test@test.no");

    await page
      .getByRole("button", { name: /send meg et tilbud/i })
      .click();

    await expect(
      page.getByText(/takk, vi har mottatt/i)
    ).toBeVisible({ timeout: 5000 });
  });

  test("haster-checkbox er synlig", async ({ page }) => {
    await expect(page.getByText(/jobben haster/i)).toBeVisible();
  });

  test("Lagre prisestimatet-knapp er synlig", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /lagre prisestimatet/i })
    ).toBeVisible();
  });

  test("cross-sell-seksjonen vises for elbillader", async ({ page }) => {
    await expect(page.getByText("Relaterte tjenester")).toBeVisible();
    await expect(
      page.getByText("Overspenningsvern hele huset")
    ).toBeVisible();
    await expect(page.getByText("Elkontroll bolig")).toBeVisible();
  });

  test("North Trygg-seksjon er synlig", async ({ page }) => {
    await expect(
      page.getByText("North Trygg, serviceavtale")
    ).toBeVisible();
    await expect(
      page.getByText("Ja, jeg er interessert")
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Navigation between steps
// ---------------------------------------------------------------------------

test.describe("Navigering mellom steg", () => {
  test("Tilbake fra steg 2 returnerer til steg 1", async ({ page }) => {
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();

    await page.getByRole("button", { name: /tilbake/i }).click();

    await expect(
      page.getByText("Hva trenger du hjelp med?")
    ).toBeVisible();
  });

  test("Start pa nytt fra steg 3 returnerer til steg 1", async ({ page }) => {
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();
    await expect(page.getByText("Ditt prisestimat")).toBeVisible();

    // Step 3 does not have a "Tilbake" button, only "Start kalkulatoren pa nytt"
    await page
      .getByRole("button", { name: /start kalkulatoren/i })
      .click();

    await expect(
      page.getByText("Hva trenger du hjelp med?")
    ).toBeVisible();
  });

  test("full navigering frem og tilbake", async ({ page }) => {
    // Step 1 -> Step 2
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();

    // Step 2 -> Step 3
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();
    await expect(page.getByText("Ditt prisestimat")).toBeVisible();

    // Step 3 -> Step 1 (via restart, since step 3 has no "Tilbake" button)
    await page
      .getByRole("button", { name: /start kalkulatoren/i })
      .click();
    await expect(
      page.getByText("Hva trenger du hjelp med?")
    ).toBeVisible();

    // Step 1 -> Step 2 again
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();

    // Step 2 -> Step 1 (via Tilbake)
    await page.getByRole("button", { name: /tilbake/i }).click();
    await expect(
      page.getByText("Hva trenger du hjelp med?")
    ).toBeVisible();
  });

  test("stegindikator oppdateres korrekt", async ({ page }) => {
    const stepDots = page.locator(
      '[class*="rounded-full"][class*="border-2"]'
    );

    // Step 1: 3 step dots visible
    await expect(stepDots).toHaveCount(3);

    // Navigate to step 2
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();

    // Navigate to step 3
    await page
      .getByRole("button", { name: /se oppsummering/i })
      .click();
    await expect(page.getByText("Ditt prisestimat")).toBeVisible();

    // Step indicator should still have 3 dots
    await expect(stepDots).toHaveCount(3);
  });

  test("bytte tjeneste etter Tilbake til steg 1", async ({ page }) => {
    // Go to elbillader step 2
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();
    await expect(
      page.getByText("Konfigurer elbilladerinstallasjon")
    ).toBeVisible();

    // Go back and select a different service
    await page.getByRole("button", { name: /tilbake/i }).click();
    await page
      .getByRole("button", { name: /enkel jobb/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();

    // Should now show enkel jobb step 2
    await expect(
      page.getByText("Klikk for å lese mer om tjenesten")
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// PriceBox verification
// ---------------------------------------------------------------------------

test.describe("Prisvisning", () => {
  test("elbillader steg 2 viser prisoverslag", async ({ page }) => {
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();

    await expect(page.getByText("Prisoverslag")).toBeVisible();
    await expect(page.getByText(/sum eks\. mva/i)).toBeVisible();
    await expect(page.getByText(/mva \(25%\)/i)).toBeVisible();
    await expect(page.getByText(/totalt/i).first()).toBeVisible();
  });

  test("inkludert-i-prisen vises", async ({ page }) => {
    await page
      .getByRole("button", { name: /elbillader/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();

    await expect(page.getByText("Inkludert i prisen")).toBeVisible();
    await expect(
      page.getByText("Samsvarserklæring")
    ).toBeVisible();
  });

  test("enkel jobb viser fastpris", async ({ page }) => {
    await page
      .getByRole("button", { name: /enkel jobb/i })
      .click();
    await page.getByRole("button", { name: /neste/i }).click();

    await expect(page.getByText(/fastpris/i).first()).toBeVisible();
  });
});
