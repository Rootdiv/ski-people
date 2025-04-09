import { layout } from './layout';

let rendered = false;

export const breadcrumb = () => {
  if (rendered) {
    return '';
  }

  const elem = document.createElement('div');
  elem.className = 'breadcrumb';

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

  rendered = true;

  return elem;
};
