import {CartPageActions} from "./cart-page.actions";

describe('cart page actions', () => {
  it('should return increaseNumberOfItemInCart action', () => {
    expect(CartPageActions.increaseNumberOfItemInCart.type).toBe('[Cart/Page] Increase number of item in cart');
  });

  it('should return reduceNumberOfItemInCart action', () => {
    expect(CartPageActions.reduceNumberOfItemInCart.type).toBe('[Cart/Page] Reduce number of item in cart');
  });
});
