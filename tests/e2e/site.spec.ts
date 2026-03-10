import { expect, test } from "@playwright/test";

test("homepage routes users to registration and announcements", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "全国数智病理西湖峰会",
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

test("search page returns cross-content results", async ({ page }) => {
  await page.goto("/search");
  await page.getByTestId("search-input").fill("赵清越");

  await expect(page.getByTestId("search-result").first()).toContainText("赵清越");
});

test("unknown announcement routes render the 404 page", async ({ page }) => {
  await page.goto("/announcements/does-not-exist");

  await expect(page.getByRole("heading", { name: "页面不存在" })).toBeVisible();
});
