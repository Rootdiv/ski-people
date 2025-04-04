import { layout } from './layout';

export const goods = title => {
  const elem = document.createElement('section');
  elem.className = 'goods';
  let titleClassElem = 'good__title visually-hidden';
  let titleText = 'Главная';

  if (title) {
    titleClassElem = 'good__title';
    titleText = title;
  }

  const child = `
    <h3 class="${titleClassElem}">${titleText}</h3>
    <ul class="goods__list">
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/images/ski.jpg" alt="Фото зимней экипировки" class="card__image" />
          </a>
          <button type="button" class="card__favorites-button">
            <svg width="16" height="16" class="card__favorites-button-icon">
              <use href="/images/sprite.svg#favorites" />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;&#8381;</p>
          </div>
          <button type="button" class="card__button">В корзину</button>
        </article>
      </li>
    </ul>
  `;

  elem.append(layout(child, 'goods__container'));

  return elem;
};
