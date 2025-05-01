import { layout } from './layout';

export const breadcrumb = (parent, data) => {
  const mountElem = document.querySelector('.breadcrumb');
  const elem = document.createElement('div');
  elem.className = 'breadcrumb';

  if (parent === 'remove') {
    mountElem.remove();
    return;
  }

  if (mountElem) {
    return mountElem;
  }

  const listItems = data
    .map(
      ({ text, href }) => `
      <li class="breadcrumb__item">
        <a ${href ? `href="${href}"` : ''} class="breadcrumb__link">${text}</a>
      </li>`,
    )
    .join('');

  const child = `
    <nav class="breadcrumb__navigation">
      <ul class="breadcrumb__list">
        ${listItems}
      </ul>
    </nav>
  `;

  elem.append(layout(child));

  parent.append(elem);

  return elem;
};
