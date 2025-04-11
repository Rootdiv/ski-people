import { layout } from './layout';

let rendered = false;

export const breadcrumb = parent => {
  const elem = document.createElement('div');
  elem.className = 'breadcrumb';

  if (parent === 'remove') {
    document.querySelector('.breadcrumb').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.breadcrumb');
  }

  const child = `
    <nav class="breadcrumb__navigation">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Главная</a>
        </li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Лыжи</a>
        </li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Горные лыжи</a>
        </li>
      </ul>
    </nav>
  `;

  elem.append(layout(child));

  parent.append(elem);

  rendered = true;

  return elem;
};
