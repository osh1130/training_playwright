import { test, expect, type Page } from '@playwright/test';

//AAA
//POM

const url = 'https://playwright.dev/';

test.beforeEach(async ({page}) =>{
  await page.goto(url);
});

async function clickGetStart(page: Page) {
  await page.getByRole('link',{name:'Get start'}).click();
}

test.describe('playwright test',() =>{
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
    await clickGetStart(page);
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  
  test.only('check java page', async ({ page }) => {
    await clickGetStart(page);
    await page.getByRole('button',{name:'Node.js'}).hover();
    await page.getByText('Java',{exact:true}).click();
  
    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByText('Installing Playwright',{exact:true})).not.toBeVisible();
    
    const javadescription="Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation."
    await expect(page.getByText(javadescription,{exact:true})).toBeVisible();
  });
})