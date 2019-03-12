import { browser, by, element } from 'protractor';
import { pageElements } from '../data/app.test-data';

export class HomePage {

  findIcon() {
    return element(by.css('div[id=search]'));
}

  chooseItem(itemNumber) {
    return element(by.css(`span[data-component-id=${itemNumber}]`));
  }

}

export class OverviewPage {

  getTitle() {
    return element(by.id('productTitle'));
  }

  getQuantityElement() {
    return element(by.id('quantity'));
  }

  getQuantity(quantity) {
    return element(by.css(`option[value=${quantity}]`));
  }

  getAddToCartButton() {
    return element(by.id('add-to-cart-button'));
  }

}

export class ShoppingCartPage {

  getProductTitle() {
    return element(by.css('.a-size-medium sc-product-title a-text-bold'));
  }

  getProduct() {
    return element(by.id('sc-item-C93e74aea-3695-40c9-8360-24224998dea5'));
  }

  getShoppingCartButton() {
    return element(by.id('nav-cart'));
  }

}


