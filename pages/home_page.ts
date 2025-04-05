import { type Locator, type Page } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly getStartLink:Locator;
    readonly getStartbutton:Locator;

    constructor(page: Page){
        this.page = page;
        this.getStartLink = page.getByRole('link',{name:'Get start'});
        this.getStartbutton = page.getByRole('button',{name:'Node.js'});
    }
    async goto(){
        await this.page.goto('https://playwright.dev/')
    }

    async clickGetStarted() {
        await this.getStartLink.click();
    }
}

export default HomePage;