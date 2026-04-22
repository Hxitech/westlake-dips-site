import { expect, test } from "@playwright/test";

test("homepage shows agenda content without public registration CTAs", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "第二届数智病理峰会",
  );

  await expect(page.getByText("立即注册")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "查看日程" })).toHaveAttribute(
    "href",
    "/announcements",
  );
  await expect(page.getByText("前沿技术专场")).toBeVisible();
  await expect(page.getByText("数智病理临床应用专场")).toBeVisible();
  await expect(page.getByText("青年学者专场")).toBeVisible();
  await expect(page.getByText("产业融合与未来发展交流专场")).toBeVisible();
  await expect(page.getByText("与全国顶尖专家共话数智病理未来")).toHaveCount(0);
});

test("mobile navigation opens and shows key links", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Only meaningful in the mobile project");

  await page.goto("/");
  await page.getByTestId("mobile-nav-toggle").click();

  await expect(page.getByTestId("mobile-nav-guide")).toBeVisible();
  await expect(page.getByTestId("mobile-nav-contact")).toBeVisible();
  await expect(page.getByText("立即注册")).toHaveCount(0);
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

  await expect(page.getByTestId("search-result").first()).toContainText("首届数智病理西湖峰会");
});

test("unknown announcement routes render the 404 page", async ({ page }) => {
  await page.goto("/announcements/does-not-exist");

  await expect(page.getByRole("heading", { name: "页面不存在" })).toBeVisible();
});

test("announcements list page does not expose public registration ctas", async ({ page }) => {
  await page.goto("/announcements");

  await expect(page.getByText("立即报名")).toHaveCount(0);
});

test("meeting notice detail page stays in preview-only mode", async ({ page }) => {
  await page.goto("/announcements/2026-meeting-notice");

  await expect(page.getByText("查看 PDF")).toHaveCount(0);
  await expect(page.getByText("下载 PDF")).toHaveCount(0);
  await expect(page.getByText("查看报名说明")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "第二届全国数智病理峰会官网上线" })).toHaveCount(0);
  await expect(page.getByAltText("第二届数智病理峰会会议通知第 1 页")).toBeVisible();
  await expect(page.getByAltText("第二届数智病理峰会会议通知第 2 页")).toBeVisible();
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
