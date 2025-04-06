import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check java page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link',{name:'Get start'}).click();
  await page.getByRole('button',{name:'Node.js'}).hover();
  await page.getByText('Java',{exact:true}).click();

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.getByText('Installing Playwright',{exact:true})).not.toBeVisible();
  
  const javadescription="Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation."
  await expect(page.getByText(javadescription,{exact:true})).toBeVisible();
});

//npx playwright test tests/ --project=chromium