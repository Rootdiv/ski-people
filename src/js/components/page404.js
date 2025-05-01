import { layout } from './layout';

export const page404 = parent => {
  const mountElem = document.querySelector('.error');
  const elem = document.createElement('section');
  elem.className = 'error';

  if (parent === 'remove') {
    mountElem.remove();
    return;
  }

  if (mountElem) {
    return mountElem;
  }

  const child = `
    <h2 class="error__message">Страница не найдена</h2>
    <p class="error__info">
      Через 5 секунд Вы будете перенаправлены <a href="/" class="error__link">на главную страницу</a>
    </p>
  `;

  elem.append(layout(child));

  parent.append(elem);

  return elem;
};
