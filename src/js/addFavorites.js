import { localStorageLoad, localStorageSave } from './localStorage';

export const addFavorites = (className, isFavPage = false) => {
  const favoritesList = localStorageLoad('ski-people-fav');
  const goodsList = document.querySelector('.goods__list');
  const productButtons = document.querySelector('.product__info-buttons');
  const parentWrapper = goodsList || productButtons;
  if (parentWrapper) {
    parentWrapper.addEventListener('click', ({ target }) => {
      const favoritesButton = target.closest(`.${className}`);
      if (favoritesButton) {
        const id = Number(favoritesButton.dataset.id);
        favoritesButton.classList.add(`${className}_active`);

        let thereIs = false;

        favoritesList.forEach((favoriteItem, index) => {
          if (favoriteItem === id) {
            thereIs = true;
            favoritesList.splice(index, 1);
            localStorageSave('ski-people-fav', favoritesList);
            favoritesButton.classList.remove(`${className}_active`);
            if (isFavPage) {
              target.closest('.goods__item').remove();
            }
          }
        });

        if (!thereIs) {
          favoritesList.push(id);
          localStorageSave('ski-people-fav', favoritesList);
        }
      }
    });
  }
};
