import {test, expect,type Page } from '@playwright/test'
import { HomePage } from '../pages/home_page'
import { TopMenuPage } from '../pages/top_menu_page'

let homePage: HomePage;
let topMenuPage: TopMenuPage;

test.describe('playwrite test',() =>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://playwright.dev/');
        homePage = new HomePage(page);
    });

    async function clickGetStarted(page:Page){
        await homePage.clickGetStarted();
        topMenuPage = new TopMenuPage(page);
    }

    test('check java page',async({page})=>{
        await test.step('Act', async () => {
          await clickGetStarted(page);
          await topMenuPage.hoverNode();
          await topMenuPage.clickJava();
        });

        await test.step('Assert', async () => {
          await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
          await expect(page.getByText('Playwright',{exact: true})).toBeVisible;
        });
    })
})

