import { localStorageLoad } from '../localStorage';
import { API_URL } from '../const';
import { layout } from './layout';
import { formatPrice } from '../helpers';

export const productList = (title, data, parent) => {
  const mountElem = document.querySelector('.goods');
  const elem = document.createElement('section');
  elem.className = 'goods';

  if (title === 'remove') {
    mountElem.remove();
    return;
  }

  let titleClassElem = 'good__title visually-hidden';

  if (title !== 'Список товаров') {
    titleClassElem = 'goods__title';
  }

  let goodsItem = '';

  const favoritesList = localStorageLoad('ski-people-fav');
  const cartList = localStorageLoad('ski-people-cart');

  data.forEach(({ id, title, img, price }) => {
    const favoritesClass = favoritesList.includes(id)
      ? 'card__favorites-button card__favorites-button_active'
      : 'card__favorites-button';

    const isInCart = cartList.find(item => item.id === id);

    goodsItem += `
      <li class="goods__item">
        <article class="goods__card card">
          <a href="/product/${id}" class="card__link">
            <img src="${API_URL}/${img}" alt="${title}" class="card__image" />
          </a>
          <button type="button" class="${favoritesClass}" data-id="${id}">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">${title}</h3>
            <p class="card__info-price">${formatPrice(price)}</p>
          </div>
          <button type="button" class="card__button" data-add-to-cart-id="${id}">
            ${isInCart ? 'Из корзины' : 'В корзину'}
          </button>
        </article>
      </li>
    `;
  });

  const child = `
    <h3 class="${titleClassElem}">${title}</h3>
    <ul class="goods__list">
      ${goodsItem}
    </ul>
  `;

  elem.append(layout(child, 'goods__container'));

  if (mountElem) {
    mountElem.innerHTML = elem.innerHTML;
    return mountElem;
  }

  parent.append(elem);

  return elem;
};
