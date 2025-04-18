import { localStorageLoad, localStorageSave } from './localStorage';

export const cartCount = () => {
  const cartList = localStorageLoad('ski-people-cart');
  const list = document.querySelector('.cart__list');

  if (list) {
    list.addEventListener('click', ({ target }) => {
      const cartCounter = target.closest('.cart__item-counter');
      if (cartCounter) {
        const id = Number(cartCounter.dataset.id);
        const countText = cartCounter.querySelector('.counter__number');
        //map или forEach не важно, изменение в localStorage всё равно сохраняется
        cartList.forEach((item, index) => {
          if (item.id === id) {
            if (target.textContent === '+') {
              cartList[index].count++;
            }
            if (target.textContent === '-') {
              cartList[index].count--;
              if (cartList[index].count <= 0) {
                cartList.splice(index, 1);
              }
            }
            countText.textContent = cartList[index]?.count || 0;
          }
        });
        localStorageSave('ski-people-cart', cartList);
      }
    });
  }
};
