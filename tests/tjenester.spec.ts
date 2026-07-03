import { test, expect } from "@playwright/test";

test.describe("Tjenester - oversikt", () => {
  test("laster med h1", async ({ page }) => {
    await page.goto("/tjenester");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("har tjenestekort med lenker", async ({ page }) => {
    await page.goto("/tjenester");
    const serviceLinks = page.locator("a[href^='/tjenester/']");
    const count = await serviceLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test("tjenestekort navigerer korrekt", async ({ page }) => {
    await page.goto("/tjenester");
    const serviceLink = page.locator("a[href='/tjenester/service']").first();
    if (await serviceLink.isVisible()) {
      await serviceLink.click();
      await page.waitForURL("**/tjenester/service");
      await expect(page.locator("h1")).toBeVisible();
    }
  });
});

const subpages = [
  { path: "/tjenester/service", name: "Service" },
  { path: "/tjenester/bedrift", name: "Bedrift" },
  { path: "/tjenester/elbillader", name: "Elbillader" },
  { path: "/tjenester/restaurant-og-naering", name: "Restaurant og næring" },
  { path: "/tjenester/borettslag-og-sameie", name: "Borettslag og sameie" },
];

for (const subpage of subpages) {
  test.describe(`Tjenester - ${subpage.name}`, () => {
    test("laster uten feil", async ({ page }) => {
      const response = await page.goto(subpage.path);
      expect(response?.status()).toBeLessThan(400);
    });

    test("har h1", async ({ page }) => {
      await page.goto(subpage.path);
      await expect(page.locator("h1")).toBeVisible();
    });

    test("har CTA-knapp", async ({ page }) => {
      await page.goto(subpage.path);
      const cta = page.getByRole("link", { name: /kontakt|befaring|beregn|pris/i }).first();
      await expect(cta).toBeVisible();
    });

    test("ingen horisontal overflow", async ({ page }) => {
      await page.goto(subpage.path);
      const bodyWidth = await page.locator("body").evaluate((el) => el.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
    });
  });
}

test.describe("404-side", () => {
  test("viser 404-innhold", async ({ page }) => {
    await page.goto("/denne-siden-finnes-ikke");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText(/finnes ikke/i)).toBeVisible();
  });

  test("har navigasjonskort", async ({ page }) => {
    await page.goto("/denne-siden-finnes-ikke");
    await expect(page.getByRole("link", { name: /forsiden/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /tjenester/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /kontakt/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /priskalkulator/i })).toBeVisible();
  });

  test("navigasjonskort fungerer", async ({ page }) => {
    await page.goto("/denne-siden-finnes-ikke");
    await page.getByRole("link", { name: /forsiden/i }).click();
    await page.waitForURL("**/");
    await expect(page.locator("h1")).toBeVisible();
  });
});

test.describe("Karriere", () => {
  test("laster med h1", async ({ page }) => {
    await page.goto("/karriere");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("har innhold", async ({ page }) => {
    await page.goto("/karriere");
    await expect(page.locator("main")).toBeVisible();
  });

  test("har CTA-knapp", async ({ page }) => {
    await page.goto("/karriere");
    const cta = page.getByRole("link", { name: /stillinger|søk|kontakt|jobb/i }).first();
    await expect(cta).toBeVisible();
  });
});
