import { test } from "@playwright/test";
import path from "path";

const ALL_ROUTES = [
  { path: "/", name: "forside" },
  { path: "/blogg", name: "blogg" },
  { path: "/jobb-med-oss", name: "jobb-med-oss" },
  { path: "/kalkulator", name: "kalkulator" },
  { path: "/karriere", name: "karriere" },
  { path: "/kontakt", name: "kontakt" },
  { path: "/om-oss", name: "om-oss" },
  { path: "/prosjekter", name: "prosjekter" },
  { path: "/tjenester", name: "tjenester" },
  { path: "/tjenester/service", name: "tjenester-service" },
  { path: "/tjenester/bedrift", name: "tjenester-bedrift" },
  { path: "/tjenester/elbillader", name: "tjenester-elbillader" },
  { path: "/tjenester/restaurant-og-naering", name: "tjenester-restaurant" },
  { path: "/tjenester/borettslag-og-sameie", name: "tjenester-borettslag" },
];

const SCREENSHOT_DIR = path.join(process.cwd(), "test-results", "screenshots");

test.describe("Screenshots - alle sider", () => {
  for (const route of ALL_ROUTES) {
    test(`screenshot ${route.name}`, async ({ page }, testInfo) => {
      await page.goto(route.path);
      await page.waitForLoadState("networkidle");
      // Wait for animations to settle
      await page.waitForTimeout(1000);

      const viewport = testInfo.project.name.includes("mobile") ? "mobil" : "desktop";
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${route.name}-${viewport}.png`),
        fullPage: true,
      });
    });
  }
});
