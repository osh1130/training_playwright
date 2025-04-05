import { type Locator, type Page } from '@playwright/test';

export class TopMenuPage{
    readonly page: Page;
    readonly nodeLink: Locator;
    readonly javaLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.nodeLink = page.getByRole('button',{name:'Node.js'});
        this.javaLink = page.getByRole('link', { name: 'Java', exact: true });
    }

    async hoverNode(){
        await this.nodeLink.hover();
    }

    async clickJava(){
        await this.javaLink.click();
    }


}

export default TopMenuPage;