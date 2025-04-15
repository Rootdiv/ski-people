import { layout } from './layout';

let rendered = false;

export const breadcrumb = (parent, data) => {
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

  const listItems = data
    .map(
      ({ text, href }) => `
      <li class="breadcrumb__item">
        <a ${href ?? `href="${href}"`} class="breadcrumb__link">${text}</a>
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

  rendered = true;

  return elem;
};
