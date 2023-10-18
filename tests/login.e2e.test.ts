import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

test.beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

test.afterAll(async () => {
  await browser.close();
});

test.describe("E2E Tests", () => {
  test("should be able to login", async () => {
    await page.goto("http://localhost:3000/");
    await page.fill("#email", "user@demo.com");
    await page.fill("#password", "User1234");

    async function clickSignInButton(page: any) {
      const signInButton = page.locator('button:has-text("Sign in")');
      await signInButton.click();
    }

    await clickSignInButton(page);
    // await page.click("button[type=submit]");
    // console.log(page.innerHTML("body"));

    await expect(page).toHaveURL("http://localhost:3000/orders");
  });
});
