import { API_URL } from '../const';
import { layout } from './layout';
import { localStorageLoad } from '../localStorage';

let rendered = false;

export const productList = (title, data, parent) => {
  const elem = document.createElement('section');
  elem.className = 'goods';

  if (title === 'remove') {
    document.querySelector('.goods').remove();
    rendered = false;
    return;
  }

  let titleClassElem = 'good__title visually-hidden';

  if (title !== 'Список товаров') {
    titleClassElem = 'goods__title';
  }

  let goodsItem = '';

  const favoritesList = localStorageLoad('ski-people-fav');

  data.forEach(({ id, title, img, price }) => {
    const favoritesClass = favoritesList.find(item => item.id === id)
      ? 'card__favorites-button card__favorites-button_active'
      : 'card__favorites-button';

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
            <p class="card__info-price">${price}&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
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

  if (rendered) {
    document.querySelector('.goods').innerHTML = elem.innerHTML;
    return document.querySelector('.goods');
  }

  parent.append(elem);

  rendered = true;

  return elem;
};
