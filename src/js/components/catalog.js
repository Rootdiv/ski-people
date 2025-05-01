import { getCategories } from '../api';
import { layout } from './layout';

export const catalog = async parent => {
  const mountElem = document.querySelector('.catalog');
  const elem = document.createElement('div');
  elem.className = 'catalog';

  if (parent === 'remove') {
    mountElem.remove();
    return;
  }

  if (mountElem) {
    return mountElem;
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

  return elem;
};
