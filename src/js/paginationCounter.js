export const paginationCounter = (totalPages, url, page, slug) => {
  const currentPage = parseInt(page);
  const buttons = document.querySelectorAll('.count-text__arrow');

  const paginationActiveElements = index => {
    const paginationElements = document.querySelectorAll('.pagination__item');

    paginationElements.forEach(item => {
      item.classList.remove('pagination__item_active');
    });

    paginationElements[index]?.classList.add('pagination__item_active');
  };

  const paramsUrl = new URLSearchParams();
  if (url !== '/search' && slug) {
    paramsUrl.set('slug', slug);
  }
  if (url === '/search' && slug) {
    paramsUrl.set('query', slug);
  }

  const pagePrev = currentPage - 1;
  if (pagePrev >= 1) {
    paramsUrl.set('page', pagePrev);
    buttons[0].href = `${url}?${paramsUrl}`;
  }

  const pageNext = currentPage + 1;
  if (pageNext <= totalPages) {
    paramsUrl.set('page', pageNext);
    buttons[1].href = `${url}?${paramsUrl}`;
  }

  paginationActiveElements(page - 1);
};
