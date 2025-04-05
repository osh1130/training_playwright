import {test, expect } from '@playwright/test'
import { HomePage } from '../pages/home_page'

test.describe('playwrite test',() =>{
    test.beforeEach(async ({page})=>{
        const home = new HomePage(page);
        await home.goto();
    });

    test('has title',async ({page})=>{
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('get start link',async ({page})=>{
        const home = new HomePage(page);
        await home.clickGetStarted();
        await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible;
    });

    test('check java page',async({page})=>{
        const home = new HomePage(page);
        await home.clickGetStarted();
        await home.getStartbutton.hover();
        await page.getByText('Java',{exact:true}).click();

        await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
        await expect(page.getByText('Playwright',{exact: true})).toBeVisible;
    })
})