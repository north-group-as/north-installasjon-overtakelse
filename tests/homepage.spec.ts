import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Hero-seksjon", () => {
  test("viser h1 med riktig tekst", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Trenger du");
    await expect(h1).toContainText("elektriker?");
  });

  test("viser ledig kapasitet-badge", async ({ page }) => {
    await expect(
      page.getByText("Ledig kapasitet denne uken")
    ).toBeVisible();
  });

  test("har Bestill gratis befaring-knapp som lenker til /kontakt", async ({
    page,
  }) => {
    const cta = page.getByRole("link", { name: "Bestill gratis befaring" }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/kontakt");
  });

  test("har ringeknapp med riktig tel-href", async ({ page }) => {
    const phoneLink = page.getByRole("link", { name: /Ring 749 99 333/ });
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toHaveAttribute("href", "tel:+4774999333");
  });

  test("viser trust-indikatorer", async ({ page }) => {
    await expect(
      page.getByText("Autorisert installatør")
    ).toBeVisible();
    await expect(
      page.getByText("Fast pris før arbeid starter")
    ).toBeVisible();
  });
});

test.describe("Seksjoner laster", () => {
  test("tjenester-seksjon er synlig", async ({ page }) => {
    const services = page.locator("#tjenester");
    await expect(services).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Alt innen/i })
    ).toBeVisible();
  });

  test("anmeldelser-seksjon er synlig", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Hva kundene sier/i })
    ).toBeVisible();
  });

  test("prosjekter-seksjon er synlig", async ({ page }) => {
    const projects = page.locator("#prosjekter");
    await expect(projects).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Referanseprosjekter/i })
    ).toBeVisible();
  });
});

test.describe("Kontaktskjema på forsiden", () => {
  test("har alle 4 skjemafelt", async ({ page }) => {
    const form = page.locator("#bestill");
    await form.scrollIntoViewIfNeeded();

    await expect(page.locator("#nc-name")).toBeVisible();
    await expect(page.locator("#nc-phone")).toBeVisible();
    await expect(page.locator("#nc-service")).toBeVisible();
    await expect(page.locator("#nc-message")).toBeVisible();
  });

  test("tjeneste-dropdown inneholder Elbillader", async ({ page }) => {
    const select = page.locator("#nc-service");
    await select.scrollIntoViewIfNeeded();

    const options = select.locator("option");
    const texts = await options.allTextContents();
    expect(texts).toContain("Elbillader");
  });

  test("sender skjema med kun telefonnummer og viser suksess", async ({
    page,
  }) => {
    const phoneInput = page.locator("#nc-phone");
    await phoneInput.scrollIntoViewIfNeeded();
    await phoneInput.fill("99887766");

    const submitBtn = page.locator("#bestill").getByRole("button", {
      name: /bestill gratis befaring/i,
    });
    await submitBtn.click();

    await expect(
      page.getByText("Takk for henvendelsen!")
    ).toBeVisible({ timeout: 5000 });
  });

  test("tomt skjema kan ikke sendes (telefon er required)", async ({
    page,
  }) => {
    const submitBtn = page.locator("#bestill").getByRole("button", {
      name: /bestill gratis befaring/i,
    });
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();

    // Suksessmelding skal ikke vises
    await expect(
      page.getByText("Takk for henvendelsen!")
    ).not.toBeVisible();

    // Skjemaet skal fortsatt vises
    await expect(page.locator("#nc-phone")).toBeVisible();
  });
});
