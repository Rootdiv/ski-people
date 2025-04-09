import { layout } from './layout';

let rendered = false;

export const product = () => {
  if (rendered) {
    return '';
  }

  const elem = document.createElement('section');
  elem.className = 'product';

  const child = `
    <h2 class="product__title">Горные лыжи</h2>
    <div class="product__description">
      <div class="product__images">
        <div class="swiper product__slider">
          <ul class="swiper-wrapper product__slider-image slider-image">
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
            <li class="swiper-slide slider-image__slide">
              <img class="slider-image__img" src="/images/photo.jpg" />
            </li>
          </ul>
          <button type="button" class="product__slider-arrow product__slider-arrow_prev">
            <svg width="32" height="32" class="product__slider-arrow-svg">
              <use href="/images/sprite.svg#prev" />
            </svg>
          </button>
          <button type="button" class="product__slider-arrow product__slider-arrow_next">
            <svg width="32" height="32" class="product__slider-arrow-svg">
              <use href="/images/sprite.svg#next" />
            </svg>
          </button>
        </div>
        <div class="swiper product__slider-thumbnails slider-thumbnails">
          <ul class="swiper-wrapper slider-thumbnails__list">
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
            <li class="swiper-slide slider-thumbnails__item">
              <img class="slider-thumbnails__image" src="/images/photo-1.jpg" />
            </li>
          </ul>
        </div>
      </div>
      <div class="product__info">
        <p class="product__info-price">5&nbsp;000&nbsp;&#8381;</p>
        <p class="product__info-id">арт.&nbsp;84348945757</p>
        <table class="product__info-table table">
          <caption class="table__title">Общие характеристики</caption>
          <tr class="table__row">
            <td class="table__filed">Коллекция</td>
            <td class="table__value">Snow</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Производитель</td>
            <td class="table__value">Россия</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Гарантия</td>
            <td class="table__value">18 мес.</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Срок службы</td>
            <td class="table__value">5 лет</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Цвет</td>
            <td class="table__value">Синий</td>
          </tr>
          <tr class="table__row">
            <td class="table__filed">Макс. нагрузка</td>
            <td class="table__value">130 кг</td>
          </tr>
        </table>
        <div class="product__info-buttons">
          <button type="button" class="product__info-to-card">В корзину</button>
          <button type="button" class="product__info-favorites">
            <svg width="16" height="16" class="product__info-favorites-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  elem.append(layout(child));

  rendered = true;

  return elem;
};
