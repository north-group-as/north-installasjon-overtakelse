import { test, expect } from "@playwright/test";

/* ------------------------------------------------------------------ */
/*  Helper: viewport checks                                            */
/* ------------------------------------------------------------------ */

/** md breakpoint (768px) - desktop nav visible, hamburger hidden */
function isDesktop(page: import("@playwright/test").Page) {
  return (page.viewportSize()?.width ?? 0) >= 768;
}

/* ------------------------------------------------------------------ */
/*  Desktop navigation (viewport >= 768px)                             */
/* ------------------------------------------------------------------ */

test.describe("Desktop navigation", () => {
  test.beforeEach(async ({ page }) => {
    test.skip(!isDesktop(page), "Desktop-only tests");
    await page.goto("/");
  });

  const desktopNavLinks = [
    { label: "Tjenester", href: "/tjenester" },
    { label: "Prosjekter", href: "/prosjekter" },
    { label: "Jobb med oss", href: "/jobb-med-oss" },
    { label: "Blogg", href: "/blogg" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  test("all 6 nav links are visible with correct hrefs", async ({ page }) => {
    // Desktop nav container (hidden md:flex)
    const desktopNav = page.locator("nav .hidden.md\\:flex");

    for (const { label, href } of desktopNavLinks) {
      const link = desktopNav.getByRole("link", { name: label, exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", href);
    }
  });

  test("logo links to homepage", async ({ page }) => {
    const logo = page.locator('nav a[href="/"]');
    await expect(logo).toBeVisible();

    const img = logo.locator("img");
    await expect(img).toHaveAttribute("alt", "North Installasjon");
  });

  test("phone link present with correct tel: href", async ({ page }) => {
    const desktopNav = page.locator("nav .hidden.md\\:flex");
    const phoneLink = desktopNav.locator('a[href="tel:+4774999333"]');
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toContainText("749 99 333");
  });

  test("Logg inn link opens in new tab", async ({ page }) => {
    const desktopNav = page.locator("nav .hidden.md\\:flex");
    const loginLink = desktopNav.getByRole("link", { name: "Logg inn" });
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute(
      "href",
      "https://northinstallasjon.recman.page/login"
    );
    await expect(loginLink).toHaveAttribute("target", "_blank");
  });

  test("Bestill befaring CTA navigates to /kontakt", async ({ page }) => {
    const desktopNav = page.locator("nav .hidden.md\\:flex");
    const cta = desktopNav.getByRole("link", { name: "Bestill befaring" });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/kontakt");

    await cta.click();
    await expect(page).toHaveURL(/\/kontakt/);
  });

  test("navbar is fixed and stays visible on scroll", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Verify the nav has fixed positioning
    await expect(nav).toHaveCSS("position", "fixed");

    // Scroll down and verify navbar is still visible
    await page.evaluate(() => window.scrollBy(0, 800));
    await expect(nav).toBeVisible();
    await expect(nav).toBeInViewport();
  });
});

/* ------------------------------------------------------------------ */
/*  Mobile navigation (viewport < 768px)                               */
/* ------------------------------------------------------------------ */

test.describe("Mobile navigation", () => {
  test.beforeEach(async ({ page }) => {
    test.skip(isDesktop(page), "Mobile-only tests");
    await page.goto("/");
  });

  const mobileNavLinks = [
    { label: "Tjenester", href: "/tjenester" },
    { label: "Prosjekter", href: "/prosjekter" },
    { label: "Jobb med oss", href: "/jobb-med-oss" },
    { label: "Blogg", href: "/blogg" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  test("hamburger button is visible", async ({ page }) => {
    const hamburger = page.getByLabel("Åpne meny");
    await expect(hamburger).toBeVisible();
  });

  test("clicking hamburger opens overlay menu", async ({ page }) => {
    const hamburger = page.getByLabel("Åpne meny");
    await hamburger.click();

    // After opening, button label changes to "Lukk meny"
    const closeButton = page.getByLabel("Lukk meny");
    await expect(closeButton).toBeVisible();
  });

  test("all nav links are present in mobile menu", async ({ page }) => {
    const hamburger = page.getByLabel("Åpne meny");
    await hamburger.click();

    // The overlay is the fixed full-screen div inside nav
    const overlay = page.locator("nav .fixed.inset-0");
    await expect(overlay).toHaveCSS("opacity", "1");

    for (const { label, href } of mobileNavLinks) {
      const link = overlay.getByRole("link", { name: label, exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", href);
    }
  });

  test("mobile menu has phone link and Logg inn", async ({ page }) => {
    const hamburger = page.getByLabel("Åpne meny");
    await hamburger.click();

    const overlay = page.locator("nav .fixed.inset-0");
    await expect(overlay).toHaveCSS("opacity", "1");

    // Phone link
    const phoneLink = overlay.locator('a[href="tel:+4774999333"]');
    await expect(phoneLink).toBeVisible();

    // Logg inn link
    const loginLink = overlay.getByRole("link", { name: "Logg inn" });
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute("target", "_blank");

    // Bestill befaring in overlay
    const cta = overlay.getByRole("link", { name: "Bestill befaring" });
    await expect(cta).toBeVisible();
  });

  test("clicking a nav link closes menu and navigates", async ({ page }) => {
    const hamburger = page.getByLabel("Åpne meny");
    await hamburger.click();

    const overlay = page.locator("nav .fixed.inset-0");
    await expect(overlay).toHaveCSS("opacity", "1");

    // Click on "Om oss" (centered in the list, reliably visible in viewport).
    // The overlay has many items that can overflow small screens, so we
    // pick one near the middle.
    const link = overlay.getByRole("link", { name: "Om oss", exact: true });
    await link.click();

    // Should navigate to /om-oss
    await expect(page).toHaveURL(/\/om-oss/);

    // After navigation, the menu state resets (component re-mounts).
    // Verify the hamburger is back to "Åpne meny" (closed state).
    await expect(page.getByLabel("Åpne meny")).toBeVisible();
  });

  test("MobileCTA bar is visible at bottom", async ({ page }) => {
    // The MobileCTA is a fixed bottom bar (lg:hidden) with "Bestill befaring" + phone
    const mobileCTA = page.locator(".fixed.bottom-0");
    await expect(mobileCTA).toBeVisible();
  });

  test("MobileCTA Bestill befaring links to /kontakt", async ({ page }) => {
    const mobileCTA = page.locator(".fixed.bottom-0");
    const befaringLink = mobileCTA.getByRole("link", {
      name: "Bestill befaring",
    });
    await expect(befaringLink).toBeVisible();
    await expect(befaringLink).toHaveAttribute("href", "/kontakt");
  });

  test("MobileCTA phone button has correct tel: href", async ({ page }) => {
    const mobileCTA = page.locator(".fixed.bottom-0");
    const phoneButton = mobileCTA.getByLabel("Ring oss");
    await expect(phoneButton).toBeVisible();
    await expect(phoneButton).toHaveAttribute("href", "tel:+4774999333");
  });
});

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Scroll footer into view so elements are visible for assertions
    await page.locator("footer").scrollIntoViewIfNeeded();
  });

  test("phone link with correct href", async ({ page }) => {
    const footer = page.locator("footer");
    const phoneLink = footer.locator('a[href="tel:+4774999333"]');
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toContainText("749 99 333");
  });

  test("email link with correct href", async ({ page }) => {
    const footer = page.locator("footer");
    const emailLink = footer.locator(
      'a[href="mailto:post@northinstallasjon.no"]'
    );
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText("post@northinstallasjon.no");
  });

  const serviceLinks = [
    { label: "Service & feilsøking", href: "/tjenester/service" },
    { label: "Bedrift", href: "/tjenester/bedrift" },
    { label: "Elbillader", href: "/tjenester/elbillader" },
    { label: "Restaurant & næring", href: "/tjenester/restaurant-og-naering" },
    { label: "Borettslag & sameie", href: "/tjenester/borettslag-og-sameie" },
  ];

  test("all 5 service links present with correct hrefs", async ({ page }) => {
    const footer = page.locator("footer");

    for (const { label, href } of serviceLinks) {
      const link = footer.getByRole("link", { name: label });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", href);
    }
  });

  const pageLinks = [
    { label: "Prosjekter", href: "/prosjekter" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Karriere", href: "/karriere" },
    { label: "Blogg", href: "/blogg" },
    { label: "Kontakt oss", href: "/kontakt" },
    { label: "Priskalkulator", href: "/kalkulator" },
  ];

  test("all 6 page links present with correct hrefs", async ({ page }) => {
    const footer = page.locator("footer");

    for (const { label, href } of pageLinks) {
      const link = footer.getByRole("link", { name: label });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", href);
    }
  });

  test("org.nr displayed", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toContainText("927 424 636");
  });

  test("AIKI link to aikias.no with target=_blank", async ({ page }) => {
    const footer = page.locator("footer");
    const aikiLink = footer.getByRole("link", { name: "AIKI AS" });
    await expect(aikiLink).toBeVisible();
    await expect(aikiLink).toHaveAttribute("href", "https://aikias.no");
    await expect(aikiLink).toHaveAttribute("target", "_blank");
  });
});
