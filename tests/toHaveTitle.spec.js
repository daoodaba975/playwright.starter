const { test, expect } = require("@playwright/test");

test("use toHaveTitle on playwright.dev", async ({ page }) => {
  await page.goto("https://playwright.dev");

  await expect(page).toHaveTitle(
    /Fast and reliable end-to-end testing for modern web apps | Playwright/
  );
});

test("Utilisation de toHaveUrl", async ({ page }) => {
  await page.goto("https://www.instagram.com/");
  await expect(page).toHaveURL("https://www.instagram.com/");
});
