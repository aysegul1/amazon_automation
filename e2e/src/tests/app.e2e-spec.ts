import { HomePage, OverviewPage, ShoppingCartPage } from '../pages/app.po';
import { browser, logging, By, by } from 'protractor';
import { pageElements, testData } from '../data/app.test-data';
import { AppFunctions } from './../functions/app.functions';

describe('Amazon Search Tests', () => {
  const homePage = new HomePage();
  const overviewPage = new OverviewPage();
  const shoppingCartPage = new ShoppingCartPage();
  const appFunctions = new AppFunctions();

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get(pageElements.url);
});
  afterAll(() => {
  browser.close();
});
  it('should search for an item', () => {

    browser.driver.findElement(By.id(pageElements.elements.searchBar)).sendKeys(testData.searchTerm);
    browser.driver.findElement(By.xpath(pageElements.elements.searchButton)).click();
    expect(homePage.findIcon().isDisplayed()).toBe(true);

  });

  it('should navigate to item overview page', () => {
    homePage.chooseItem(testData.itemPicked).click();
    expect(overviewPage.getTitle().isPresent()).toBe(true);
  });

  it('should select quantity and add item to shopping cart', () => {
    appFunctions.selectQuantity();
    appFunctions.addToShoppingCart();
  });

  it('should  validate that the item is added', () => {
    expect(shoppingCartPage.getProduct().isPresent).toBe(true);
    // expect(shoppingCartPage.getSuccessMessage().isPresent).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
