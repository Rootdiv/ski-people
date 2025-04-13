import { router } from './router';

export const search = () => {
  const searchForm = document.querySelector('.header__search');
  const searchInput = searchForm.elements.search;

  if (searchForm) {
    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      if (searchInput.value.trim() !== '') {
        router.navigate(`/search?query=${searchInput.value.trim()}`);
        searchInput.value = '';
      }
    });
  }
};
