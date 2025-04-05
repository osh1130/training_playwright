import {test, expect } from '@playwright/test'
import { HomePage } from '../pages/home_page'

test.describe('playwrite test',() =>{
    test.beforeEach(async ({page})=>{
        const home = new HomePage(page);
        await home.goto();
    });

    test('check java page',async({page})=>{
        const home = new HomePage(page);

        await test.step('Act', async () => {
          await home.clickGetStarted();
          await home.getStartbutton.hover();
          //await page.getByText('Java',{exact:true}).click();
          await page.getByRole('link', { name: 'Java', exact: true }).click();
        });

        await test.step('Assert', async () => {
          await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
          await expect(page.getByText('Playwright',{exact: true})).toBeVisible;
        });
    })
})