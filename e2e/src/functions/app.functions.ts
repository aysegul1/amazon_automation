import { OverviewPage } from './../pages/app.po';
import { browser } from 'protractor';
import { testData, pageElements } from './../data/app.test-data';

export class AppFunctions {
    protected overviewpage: OverviewPage;

    constructor() {
        this.overviewpage = new OverviewPage();
    }

    public selectQuantity() {
        this.overviewpage.getQuantityElement().click();
        this.overviewpage.getQuantity(testData.quantity).click();
    }

    public addToShoppingCart() {
        this.overviewpage.getAddToCartButton().click();
    }

    navigateToShoppingCart() {
        return browser.get(pageElements.cartUrl) as Promise<any>;
      }

}
