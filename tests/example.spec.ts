import { test as base, expect } from "@playwright/test";

const test = base.extend<{ bugRepro: undefined; noRepro: undefined }>({
  bugRepro: [
    async ({ page }, use) => {
      await page.goto("https://google.com");
      await use(undefined);
      await page.getByLabel("asdadsasdasds").click();
    },
    { timeout: 5_000 },
  ],
  noRepro: [
    async ({ page }, use) => {
      await page.goto("https://google.com");
      await page.getByLabel("asdadsasdasds").click();
      await use(undefined);
    },
    { timeout: 5_000 },
  ],
});

test("reproduce bug", async ({ bugRepro }) => {});
test("no bug", async ({ noRepro }) => {});
