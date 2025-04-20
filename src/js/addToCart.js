import { localStorageLoad, localStorageSave } from './localStorage';

export const addToCart = data => {
  const cartList = localStorageLoad('ski-people-cart');
  const goodsList = document.querySelector('.goods__list');
  const productButtons = document.querySelector('.product__info-buttons');
  const headerCount = document.querySelector('.header__link-count');
  const parentWrapper = goodsList || productButtons;
  if (parentWrapper) {
    parentWrapper.addEventListener('click', ({ target }) => {
      const cartToButton = target.closest('[data-add-to-cart-id]');
      if (cartToButton) {
        const id = Number(cartToButton.dataset.addToCartId);
        const product = data.find(item => item.id === id);
        product.count = 1;

        let thereIs = false;

        cartList.forEach((cartItem, index) => {
          if (cartItem.id === id) {
            thereIs = true;
            cartList.splice(index, 1);
            localStorageSave('ski-people-cart', cartList);
            cartToButton.textContent = 'В корзину';
          }
        });

        if (!thereIs) {
          cartList.push(product);
          localStorageSave('ski-people-cart', cartList);
          cartToButton.textContent = 'Из корзины';
        }
        headerCount.textContent = `(${cartList.length})`;
      }
    });
  }
};
