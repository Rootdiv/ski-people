import { localStorageLoad } from '../localStorage';
import { API_URL } from '../const';
import { layout } from './layout';
import { formatPrice } from '../helpers';

export const product = (parent, data) => {
  const mountElem = document.querySelector('.product');
  const elem = document.createElement('section');
  elem.className = 'product';

  if (parent === 'remove') {
    mountElem.remove();
    return;
  }

  if (mountElem) {
    return mountElem;
  }

  const favoritesList = localStorageLoad('ski-people-fav');

  const favoritesClass = favoritesList.includes(data.id)
    ? 'product__info-favorites product__info-favorites_active'
    : 'product__info-favorites';

  const child = `
    <h2 class="product__title">${data.title}</h2>
    <div class="product__description">
      <div class="product__images">
        <div class="swiper product__slider">
          <ul class="swiper-wrapper product__slider-image slider-image">
            ${data.mainImage
              .map(
                item => `
                <li class="swiper-slide slider-image__slide">
                  <img class="slider-image__img" src="${API_URL}/img/${item}" />
                </li>`,
              )
              .join('')}
          </ul>
          ${
            data?.thumbsImage.length > 1
              ? `<button type="button" class="product__slider-arrow product__slider-arrow_prev">
              <svg width="32" height="32" class="product__slider-arrow-svg">
                <use href="/images/sprite.svg#prev" />
              </svg>
            </button>
            <button type="button" class="product__slider-arrow product__slider-arrow_next">
              <svg width="32" height="32" class="product__slider-arrow-svg">
                <use href="/images/sprite.svg#next" />
              </svg>
            </button>`
              : ''
          }
        </div>
        ${
          data?.thumbsImage.length > 1
            ? `<div class="swiper product__slider-thumbnails slider-thumbnails">
            <ul class="swiper-wrapper slider-thumbnails__list">
              ${data.thumbsImage
                .map(
                  item => `
                  <li class="swiper-slide slider-thumbnails__item">
                    <img class="slider-thumbnails__image" src="${API_URL}/img/${item}" />
                  </li>`,
                )
                .join('')}
            </ul>
          </div>`
            : ''
        }
      </div>
      <div class="product__info">
        <p class="product__info-price">${formatPrice(data.price)}</p>
        <p class="product__info-id">арт.&nbsp${data.article}</p>
        <table class="product__info-table table">
          <caption class="table__title">Общие характеристики</caption>
          <tr class="table__row">
            <td class="table__filed">Коллекция</td>
            <td class="table__value">${data.collection}</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Производитель</td>
            <td class="table__value">${data.manufacturer}</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Гарантия</td>
            <td class="table__value">${data.warranty}</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Срок службы</td>
            <td class="table__value">${data.life}</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Цвет</td>
            <td class="table__value">${data.color}</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Макс. нагрузка</td>
            <td class="table__value">${data.max_weight}</td>
          </tr>
        </table>
        <div class="product__info-buttons">
          <button type="button" class="product__info-to-card" data-add-to-cart-id="${data.id}">
            В корзину
          </button>
          <button type="button" class="${favoritesClass}" data-id="${data.id}">
            <svg width="16" height="16" class="product__info-favorites-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  elem.append(layout(child));

  parent.append(elem);

  return elem;
};
