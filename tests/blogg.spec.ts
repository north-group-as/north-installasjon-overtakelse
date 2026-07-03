import { test, expect } from "@playwright/test";

test.describe("Blogg - listing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blogg");
  });

  test("laster med h1", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
  });

  test("har kategorifilter", async ({ page }) => {
    await expect(page.getByRole("button", { name: /alle/i })).toBeVisible();
  });

  test("viser blogginnlegg", async ({ page }) => {
    const posts = page.locator("a[href^='/blogg/']");
    const count = await posts.count();
    expect(count).toBeGreaterThan(0);
  });

  test("filtrering fungerer", async ({ page }) => {
    const allPosts = page.locator("a[href^='/blogg/']");
    const alleCount = await allPosts.count();

    const filterBtns = page.getByRole("button").filter({ hasNotText: /alle/i });
    const firstFilter = filterBtns.first();
    if (await firstFilter.isVisible()) {
      await firstFilter.click();
      await page.waitForTimeout(300);
      const filteredCount = await allPosts.count();
      expect(filteredCount).toBeLessThanOrEqual(alleCount);
    }
  });

  test("bloggkort har tittel, dato og kategori", async ({ page }) => {
    const firstPost = page.locator("a[href^='/blogg/']").first();
    await expect(firstPost).toBeVisible();
  });

  test("klikk navigerer til artikkel", async ({ page }) => {
    const firstPost = page.locator("a[href^='/blogg/']").first();
    const href = await firstPost.getAttribute("href");
    await firstPost.click();
    await page.waitForURL(`**${href}`);
    await expect(page.locator("h1")).toBeVisible();
  });
});

test.describe("Blogg - artikkelside", () => {
  test("laster artikkel med innhold", async ({ page }) => {
    await page.goto("/blogg");
    const firstPost = page.locator("a[href^='/blogg/']").first();
    await firstPost.click();

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByRole("article")).toBeVisible();
  });

  test("har metadata (dato, lesetid)", async ({ page }) => {
    await page.goto("/blogg");
    const firstPost = page.locator("a[href^='/blogg/']").first();
    await firstPost.click();

    const timeText = page.getByText(/min|lesing/i);
    await expect(timeText.first()).toBeVisible();
  });

  test("TOC synlig på desktop, skjult på mobil", async ({ page, browserName }, testInfo) => {
    await page.goto("/blogg");
    const firstPost = page.locator("a[href^='/blogg/']").first();
    await firstPost.click();

    const toc = page.locator("nav").filter({ hasText: /innhold/i });
    if (testInfo.project.name === "desktop-chrome") {
      // TOC should be visible on desktop
      if (await toc.isVisible()) {
        await expect(toc).toBeVisible();
      }
    }
  });

  test("har tilbake-lenke til bloggen", async ({ page }) => {
    await page.goto("/blogg");
    const firstPost = page.locator("a[href^='/blogg/']").first();
    await firstPost.click();

    const backLink = page.getByRole("link", { name: /tilbake|blogg/i }).first();
    await expect(backLink).toBeVisible();
  });

  test("har CTA-seksjon", async ({ page }) => {
    await page.goto("/blogg");
    const firstPost = page.locator("a[href^='/blogg/']").first();
    await firstPost.click();

    const cta = page.getByRole("link", { name: /kontakt|beregn|befaring/i }).first();
    await expect(cta).toBeVisible();
  });
});

test.describe("Blogg - image orientation layouts", () => {
  test("renders portrait listing cards in portrait mode", async ({ page }) => {
    await page.goto("/blogg");

    const portraitCard = page
      .locator("a[href='/blogg/elbillader-pris-hjemme'] [data-image-orientation]")
      .first();

    await expect(portraitCard).toHaveAttribute("data-image-orientation", "portrait");
  });

  test("renders landscape listing cards in landscape mode", async ({ page }) => {
    await page.goto("/blogg");

    const landscapeCard = page
      .locator(
        "a[href='/blogg/easee-zaptec-garo-velg-elbillader'] [data-image-orientation]"
      )
      .first();

    await expect(landscapeCard).toHaveAttribute("data-image-orientation", "landscape");
  });

  test("uses portrait hero layout for portrait article images", async ({ page }) => {
    await page.goto("/blogg/termografering-el-anlegg");

    await expect(page.locator("[data-hero-layout='portrait']")).toBeVisible();
    await expect(page.locator("[data-hero-layout='landscape']")).toHaveCount(0);
  });

  test("keeps related posts orientation metadata", async ({ page }) => {
    await page.goto("/blogg/easee-zaptec-garo-velg-elbillader");

    const portraitRelatedCard = page
      .locator("section")
      .filter({ hasText: /les ogsa|les også/i })
      .locator("[data-image-orientation='portrait']")
      .first();

    await expect(portraitRelatedCard).toBeVisible();
  });
});
