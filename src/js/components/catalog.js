import { getCategories } from '../api';
import { layout } from './layout';

let rendered = false;

export const catalog = async parent => {
  const elem = document.createElement('div');
  elem.className = 'catalog';

  if (parent === 'remove') {
    document.querySelector('.catalog').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.catalog');
  }

  const typeList = await getCategories();

  let catalogItem = '';

  typeList.forEach(item => {
    catalogItem += `
      <li class="catalog__item">
        <a href="/category?slug=${item}" class="catalog__link">${item}</a>
      </li>
    `;
  });

  const child = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a href="/category?slug=all" class="catalog__link catalog__link_active">Все</a>
      </li>
      ${catalogItem}
    </ul>
  `;

  elem.append(layout(child));

  parent.append(elem);

  rendered = true;

  return elem;
};
