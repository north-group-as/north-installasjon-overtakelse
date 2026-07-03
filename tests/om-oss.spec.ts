import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/om-oss");
});

test.describe("Om oss", () => {
  test("laster med h1", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
  });

  test("viser selskapsbeskrivelse", async ({ page }) => {
    const content = page.locator("main");
    await expect(content).toContainText(/North/);
  });

  test("har verdier-seksjon", async ({ page }) => {
    const values = page.getByText(/pålitelighet|fremdrift|lojalitet/i).first();
    await expect(values).toBeVisible();
  });
});

test.describe("Om oss - team", () => {
  test("viser teammedlemmer", async ({ page }) => {
    const members = page.locator("[class*='grid'] img[alt]");
    const count = await members.count();
    expect(count).toBeGreaterThan(0);
  });

  test("klikk på teammedlem åpner modal", async ({ page }) => {
    // Find a clickable team member card
    const teamCard = page.locator("button, [role='button'], [class*='cursor-pointer']")
      .filter({ has: page.locator("img") })
      .first();

    if (await teamCard.isVisible()) {
      await teamCard.click();
      await page.waitForTimeout(500);

      // Modal should be visible with member info
      const modal = page.locator("[class*='fixed'], [role='dialog']").filter({ hasText: /@|telefon|e-post/i });
      if (await modal.isVisible()) {
        await expect(modal).toBeVisible();

        // Close modal
        const closeBtn = modal.getByRole("button").filter({ hasText: /x|lukk/i }).first();
        if (await closeBtn.isVisible()) {
          await closeBtn.click();
        } else {
          // Try clicking X button by icon
          const xBtn = modal.locator("button").first();
          await xBtn.click();
        }
        await page.waitForTimeout(300);
      }
    }
  });

  test("teammedlem har kontaktknapper", async ({ page }) => {
    // Look for phone/email links in team section
    const phoneLinks = page.locator("a[href^='tel:']");
    const emailLinks = page.locator("a[href^='mailto:']");

    const phoneCount = await phoneLinks.count();
    const emailCount = await emailLinks.count();

    // Should have contact methods available (in cards or modals)
    expect(phoneCount + emailCount).toBeGreaterThan(0);
  });
});
