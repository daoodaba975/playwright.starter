const { test, expect } = require("@playwright/test");

test("connexion the-internet.herokuapp.com/login", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.fill('input[id="username"]', "tomsmith");
  await page.fill('input[id="password"]', "SuperSecretPassword!");
  await page.click('button[type="submit"]');

  const flashText = await page.locator("id=flash").innerText();
  await expect(flashText).toContain("You logged into a secure area!");
});
