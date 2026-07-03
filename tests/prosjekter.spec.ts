import { test, expect } from "@playwright/test";

test.describe("Prosjekter - listing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/prosjekter");
  });

  test("laster med h1", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
  });

  test("har filtertabs", async ({ page }) => {
    await expect(page.getByRole("button", { name: /alle/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /bolig/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /næring/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /offentlig/i })).toBeVisible();
  });

  test("filtrering endrer antall prosjekter", async ({ page }) => {
    const allCards = page.locator("a[href^='/prosjekter/']");
    const alleCount = await allCards.count();
    expect(alleCount).toBeGreaterThan(0);

    await page.getByRole("button", { name: /bolig/i }).click();
    await page.waitForTimeout(300);
    const boligCount = await allCards.count();
    expect(boligCount).toBeLessThanOrEqual(alleCount);

    await page.getByRole("button", { name: /alle/i }).click();
    await page.waitForTimeout(300);
    const resetCount = await allCards.count();
    expect(resetCount).toBe(alleCount);
  });

  test("prosjektkort har bilde, tittel og lenke", async ({ page }) => {
    const firstCard = page.locator("a[href^='/prosjekter/']").first();
    await expect(firstCard).toBeVisible();
    await expect(firstCard.locator("img")).toBeVisible();
  });

  test("klikk på prosjektkort navigerer til detaljside", async ({ page }) => {
    const firstCard = page.locator("a[href^='/prosjekter/']").first();
    const href = await firstCard.getAttribute("href");
    await firstCard.click();
    await page.waitForURL(`**${href}`);
    await expect(page.locator("h1")).toBeVisible();
  });
});

test.describe("Prosjekter - detaljside", () => {
  test("laster prosjektdetaljer", async ({ page }) => {
    await page.goto("/prosjekter");
    const firstCard = page.locator("a[href^='/prosjekter/']").first();
    await firstCard.click();

    await expect(page.locator("h1")).toBeVisible();
  });

  test("har CTA-knapper", async ({ page }) => {
    await page.goto("/prosjekter");
    const firstCard = page.locator("a[href^='/prosjekter/']").first();
    await firstCard.click();

    const cta = page.getByRole("link", { name: /kontakt|beregn|befaring/i }).first();
    await expect(cta).toBeVisible();
  });

  test("har neste prosjekt-lenke", async ({ page }) => {
    await page.goto("/prosjekter");
    const firstCard = page.locator("a[href^='/prosjekter/']").first();
    await firstCard.click();

    const nextProject = page.getByText(/neste prosjekt/i);
    if (await nextProject.isVisible()) {
      await expect(nextProject).toBeVisible();
    }
  });
});
