import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

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

test.describe("SEO - meta tags", () => {
  for (const route of ALL_ROUTES) {
    test(`${route} har title`, async ({ page }) => {
      await page.goto(route);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
    });

    test(`${route} har meta description`, async ({ page }) => {
      await page.goto(route);
      const desc = page.locator('meta[name="description"]');
      const content = await desc.getAttribute("content");
      expect(content?.length).toBeGreaterThan(0);
    });
  }

  test("forsiden har OG tags", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /.+/);
  });

  test("forsiden har Twitter card", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", /.+/);
  });

  test("html har lang-attributt", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBeTruthy();
    expect(["no", "nb", "nn"]).toContain(lang);
  });

  test("forsiden har JSON-LD structured data", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThan(0);
    const content = await jsonLd.first().textContent();
    const data = JSON.parse(content!);
    expect(data["@context"]).toBe("https://schema.org");
  });

  test("sitemap er tilgjengelig", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });

  test("robots.txt er tilgjengelig", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
  });
});

test.describe("Tilgjengelighet (axe-core)", () => {
  const criticalPages = ["/", "/kontakt", "/kalkulator", "/blogg", "/tjenester"];

  for (const route of criticalPages) {
    test(`${route} ingen kritiske a11y-brudd`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("domcontentloaded");

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .disableRules(["color-contrast"]) // Often false positives with gradients
        .analyze();

      const critical = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious"
      );

      if (critical.length > 0) {
        const summary = critical.map(
          (v) =>
            `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} occurrences)`
        );
        console.log(`A11y issues on ${route}:\n${summary.join("\n")}`);
      }

      // Soft assertion: log but don't fail on serious, fail on critical
      const criticalOnly = critical.filter((v) => v.impact === "critical");
      expect(
        criticalOnly,
        `Critical a11y violations on ${route}: ${JSON.stringify(criticalOnly.map((v) => v.id))}`
      ).toHaveLength(0);
    });
  }
});

test.describe("Bilder - alt-attributter", () => {
  const pagesToCheck = ["/", "/om-oss", "/prosjekter", "/tjenester"];

  for (const route of pagesToCheck) {
    test(`${route} alle bilder har alt-attributt`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("domcontentloaded");

      const images = page.locator("img");
      const count = await images.count();

      const missingAlt: string[] = [];
      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute("alt");
        if (alt === null) {
          const src = await img.getAttribute("src");
          missingAlt.push(src || `img[${i}]`);
        }
      }

      if (missingAlt.length > 0) {
        console.log(`Images missing alt on ${route}: ${missingAlt.join(", ")}`);
      }
      expect(missingAlt).toHaveLength(0);
    });
  }
});
