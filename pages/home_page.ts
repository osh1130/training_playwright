import { type Locator, type Page } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly getStartButton:Locator;
    readonly pageTitle:RegExp;

    constructor(page: Page){
        this.page = page;
        this.getStartButton = page.getByRole('link',{name:'Get start'});
        this.pageTitle = /Playwright/;
    }


    async clickGetStarted() {
        await this.getStartButton.click();
    }
}

export default HomePage;