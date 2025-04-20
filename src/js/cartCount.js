import { declOfNum, formatPrice } from './const';
import { localStorageSave } from './localStorage';

export const cartCount = data => {
  const cartList = document.querySelector('.cart__list');
  const headerCount = document.querySelector('.header__link-count');
  const cartOrderPrice = document.querySelector('.cart__order-price');
  const cartOrderCount = document.querySelector('.cart__order-count');

  if (cartList) {
    cartList.addEventListener('click', ({ target }) => {
      const cartItem = target.closest('[data-id]');
      const id = Number(cartItem.dataset.id);
      const countText = cartItem.querySelector('.counter__number');

      data.forEach((item, index) => {
        if (item.id === id) {
          if (target.textContent === '+') {
            data[index].count++;
          }
          if (target.textContent === '-') {
            data[index].count--;

            if (data[index].count <= 0) {
              data.splice(index, 1);
              headerCount.textContent = `(${data.length})`;
              cartOrderCount.textContent = `${declOfNum(data.length, [
                'товар',
                'товара',
                'товаров',
              ])}  на сумму:`;
              cartItem.remove();
            }
          }
          countText.textContent = data[index]?.count || 0;
        }
      });

      const totalSum = data.reduce((sum, item) => sum + item.count * item.price, 0);
      cartOrderPrice.textContent = formatPrice(totalSum);
      localStorageSave('ski-people-cart', data);
    });
  }
};
