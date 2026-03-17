import { expect, test } from "@playwright/test";

test("homepage routes users to registration and announcements", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "全国数智病理峰会",
  );

  await expect(
    page.getByRole("link", { name: "立即注册" }).first(),
  ).toHaveAttribute("href", "/register");
});

test("mobile navigation opens and shows key links", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Only meaningful in the mobile project");

  await page.goto("/");
  await page.getByTestId("mobile-nav-toggle").click();

  await expect(page.getByTestId("mobile-nav-guide")).toBeVisible();
  await expect(page.getByTestId("mobile-nav-contact")).toBeVisible();
});

test("homepage does not overflow horizontally on mobile", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Only meaningful in the mobile project");

  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
});

test("search page returns archive results", async ({ page }) => {
  await page.goto("/search");
  await page.getByTestId("search-input").fill("2025");

  await expect(page.getByTestId("search-result").first()).toContainText("首届数智病理峰会");
});

test("unknown announcement routes render the 404 page", async ({ page }) => {
  await page.goto("/announcements/does-not-exist");

  await expect(page.getByRole("heading", { name: "页面不存在" })).toBeVisible();
});

test("guide page exposes the venue navigation link", async ({ page }) => {
  await page.goto("/guide");

  await expect(page.getByTestId("guide-venue-map-shell")).toBeVisible();
  await expect(page.getByTestId("guide-venue-map-link")).toHaveAttribute(
    "href",
    /uri\.amap\.com\/marker/,
  );
});

test("contact page reuses the venue navigation destination", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByTestId("contact-venue-map-link")).toHaveAttribute(
    "href",
    /uri\.amap\.com\/marker/,
  );
});
