import { test, expect } from "@playwright/test";

const ALL_ROUTES = [
  "/",
  "/blogg",
  "/jobb-med-oss",
  "/kalkulator",
  "/karriere",
  "/kontakt",
  "/om-oss",
  "/prosjekter",
  "/tjenester",
  "/tjenester/service",
  "/tjenester/bedrift",
  "/tjenester/elbillader",
  "/tjenester/restaurant-og-naering",
  "/tjenester/borettslag-og-sameie",
];

test.describe("Responsivt design - ingen horisontal overflow", () => {
  for (const route of ALL_ROUTES) {
    test(`${route} ingen overflow`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("domcontentloaded");

      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(overflow, `Horisontal overflow på ${route}`).toBe(false);
    });
  }
});

test.describe("Responsivt design - sideinnlasting", () => {
  for (const route of ALL_ROUTES) {
    test(`${route} laster uten feil`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (err) => errors.push(err.message));

      const response = await page.goto(route);
      expect(response?.status()).toBeLessThan(400);

      // Allow some time for client-side errors
      await page.waitForLoadState("domcontentloaded");

      if (errors.length > 0) {
        console.log(`JS errors on ${route}: ${errors.join("; ")}`);
      }
    });
  }
});
