const { test } = require("@playwright/test");

test("Utilisation de saveScreenshot", async ({ page }) => {
  await page.goto("https://www.transfermarkt.fr");

  const elem = await page.locator("body");
  await elem.screenshot({ path: "./scrns/elemScreenshot.png" });
});
