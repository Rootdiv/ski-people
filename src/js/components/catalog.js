import { layout } from './layout';

export const catalog = () => {
  const elem = document.createElement('div');
  elem.className = 'catalog';

  const child = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a href="#" class="catalog__link catalog__link_active">Все</a>
      </li>
      <li class="catalog__item">
        <a href="#" class="catalog__link">Лыжи</a>
      </li>
      <li class="catalog__item">
        <a href="#" class="catalog__link">Сноуборды</a>
      </li>
      <li class="catalog__item">
        <a href="#" class="catalog__link">Экипировка</a>
      </li>
      <li class="catalog__item">
        <a href="#" class="catalog__link">Ботинки</a>
      </li>
    </ul>
  `;

  elem.append(layout(child));

  return elem;
};
