import { layout } from './layout';

export const header = () => {
  const elem = document.createElement('header');
  elem.className = 'header';

  const child = `
    <div class="header__wrapper">
      <a
        href="/"
        class="header__logo-link"
        title="Переход на главную страницу"
        aria-label="Переход на главную страницу">
        <img src="/images/logo.svg" alt="" class="header__logo" />
      </a>
      <form action="#" class="header__search">
        <input
          type="search"
          name="search"
          class="header__search-input"
          placeholder="Введите запрос" />
        <button type="submit" class="header__search-button">
          <svg width="16" height="16">
            <use href="/images/sprite.svg#search" />
          </svg>
        </button>
      </form>
      <div class="header__links-list">
        <a href="/favorites" class="header__link">
          <span class="header__link-text">Избранное</span>
          <svg width="16" height="16" class="header__link-icon">
            <use href="/images/sprite.svg#favorites" />
          </svg>
        </a>
        <a href="/cart" class="header__link">
          <span class="header__link-text">Корзина</span>
          <span class="header__link-count">(5)</span>
          <svg width="16" height="16" class="header__link-icon">
            <use href="/images/sprite.svg#cart" />
          </svg>
        </a>
      </div>
    </div>
  `;

  elem.append(layout(child));

  return elem;
};
