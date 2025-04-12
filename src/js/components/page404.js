import { layout } from './layout';

let rendered = false;

export const page404 = parent => {
  const elem = document.createElement('section');
  elem.className = 'error';

  if (parent === 'remove') {
    document.querySelector('.error').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.error');
  }

  const child = `
    <h2 class="error__message">Страница не найдена</h2>
    <p class="error__info">
      Через 5 секунд Вы будете перенаправлены <a href="/" class="error__link">на главную страницу</a>
    </p>
  `;

  elem.append(layout(child));

  parent.append(elem);

  rendered = true;

  return elem;
};
