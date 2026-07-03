import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/kontakt");
});

test.describe("Kontaktside", () => {
  test("laster uten feil", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
  });

  test("har alle skjemafelt", async ({ page }) => {
    await expect(page.getByLabel(/navn/i)).toBeVisible();
    await expect(page.getByLabel(/telefon/i)).toBeVisible();
    await expect(page.getByLabel(/e-post/i)).toBeVisible();
    await expect(page.locator("select")).toBeVisible();
    await expect(page.getByLabel(/beskrivelse|melding/i)).toBeVisible();
  });

  test("har haster-checkbox", async ({ page }) => {
    const haster = page.getByText(/haster/i);
    await expect(haster).toBeVisible();
  });

  test("har filopplastingsområde", async ({ page }) => {
    const uploadArea = page.getByText(/last opp|dra og slipp|vedlegg/i);
    await expect(uploadArea).toBeVisible();
  });

  test("validerer required-felt", async ({ page }) => {
    const submitBtn = page.getByRole("button", { name: /send/i });
    await submitBtn.click();
    // Form should not submit without required fields
    await expect(page.getByText(/takk/i)).not.toBeVisible();
  });

  test("fyller ut og sender skjema", async ({ page }) => {
    await page.getByLabel(/navn/i).fill("Test Testesen");
    await page.getByLabel(/telefon/i).fill("99887766");
    await page.getByLabel(/e-post/i).fill("test@test.no");
    await page.locator("select").selectOption({ index: 1 });
    await page.getByLabel(/beskrivelse|melding/i).fill("Testmelding fra Playwright");

    const submitBtn = page.getByRole("button", { name: /send/i });
    await submitBtn.click();

    await expect(page.getByText(/takk/i)).toBeVisible({ timeout: 5000 });
  });

  test("kan nullstille etter innsending", async ({ page }) => {
    await page.getByLabel(/navn/i).fill("Test");
    await page.getByLabel(/telefon/i).fill("99887766");
    await page.getByLabel(/e-post/i).fill("test@test.no");
    await page.getByRole("button", { name: /send/i }).click();
    await expect(page.getByText(/takk/i)).toBeVisible({ timeout: 5000 });

    const resetBtn = page.getByRole("button", { name: /ny henvendelse/i });
    if (await resetBtn.isVisible()) {
      await resetBtn.click();
      await expect(page.getByLabel(/navn/i)).toBeVisible();
    }
  });
});

test.describe("Kontaktside - infopanel", () => {
  test("viser telefonnummer", async ({ page }) => {
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toBeVisible();
  });

  test("viser e-post", async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toBeVisible();
  });

  test("viser adresse", async ({ page }) => {
    await expect(page.getByText(/Frydenbergveien|oslo/i)).toBeVisible();
  });

  test("viser åpningstider", async ({ page }) => {
    await expect(page.getByText(/man|fre/i).first()).toBeVisible();
  });

  test("har Google Maps iframe", async ({ page }) => {
    const iframe = page.locator("iframe[src*='google.com/maps']");
    await expect(iframe).toBeVisible();
  });
});

test.describe("Kontaktside - responsivt", () => {
  test("ingen horisontal overflow", async ({ page }) => {
    const body = page.locator("body");
    const bodyWidth = await body.evaluate((el) => el.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});
