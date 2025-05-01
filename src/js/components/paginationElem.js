import { layout } from './layout';

export const paginationElem = (parent, { currentPage, totalPages, totalGoods, limit }) => {
  const renderedElem = document.querySelector('.pagination');
  if (parent === 'remove') {
    renderedElem.remove();
    return;
  }

  const count = currentPage * limit;
  const countGoodsPage = count < totalGoods ? count : count - limit + (totalGoods % limit);

  const elem = document.createElement('div');
  elem.className = 'pagination';

  if (totalGoods <= limit) {
    (renderedElem || elem).setAttribute('hidden', true);
  } else {
    (renderedElem || elem).removeAttribute('hidden');
  }

  const listItems = '<li class="pagination__item"></li>'.repeat(totalPages);

  const child = `
    <ul class="pagination__list">
      ${listItems}
    </ul>
    <div class="pagination__count count-text">
      <a class="count-text__arrow">&lt;</a>
      <p class="count-text__text">${countGoodsPage} из ${totalGoods}</p>
      <a class="count-text__arrow">&gt;</a>
    </div>
  `;

  elem.append(layout(child, 'pagination__container'));

  if (renderedElem) {
    renderedElem.innerHTML = elem.innerHTML;
    return renderedElem;
  }

  parent.append(elem);

  return elem;
};
