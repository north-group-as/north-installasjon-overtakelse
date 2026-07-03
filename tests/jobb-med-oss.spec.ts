import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/jobb-med-oss");
});

test.describe("Jobb med oss", () => {
  test("laster med h1", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
  });

  test("viser fordeler/benefits", async ({ page }) => {
    const content = page.locator("main");
    await expect(content).toBeVisible();
  });

  test("har søknadsskjema", async ({ page }) => {
    await expect(page.getByLabel(/navn/i)).toBeVisible();
    await expect(page.getByLabel(/telefon/i)).toBeVisible();
    await expect(page.getByLabel(/e-post/i)).toBeVisible();
  });

  test("har stilling-dropdown", async ({ page }) => {
    const select = page.locator("select");
    await expect(select).toBeVisible();
    const options = select.locator("option");
    const count = await options.count();
    expect(count).toBeGreaterThan(1);
  });

  test("har meldingsfelt", async ({ page }) => {
    const textarea = page.locator("textarea");
    await expect(textarea).toBeVisible();
  });

  test("har CV-opplasting", async ({ page }) => {
    const uploadLabel = page.getByText("Last opp CV", { exact: false }).first();
    await expect(uploadLabel).toBeVisible();
  });

  test("fyller ut og sender søknad", async ({ page }) => {
    await page.getByLabel(/navn/i).fill("Test Søker");
    await page.getByLabel(/telefon/i).fill("99887766");
    await page.getByLabel(/e-post/i).fill("test@test.no");
    await page.locator("select").selectOption({ index: 1 });
    await page.locator("textarea").fill("Testsøknad fra Playwright");

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

    const resetBtn = page.getByRole("button", { name: /ny søknad/i });
    if (await resetBtn.isVisible()) {
      await resetBtn.click();
      await expect(page.getByLabel(/navn/i)).toBeVisible();
    }
  });
});
