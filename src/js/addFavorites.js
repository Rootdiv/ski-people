import { localStorageLoad, localStorageSave } from './localStorage';

export const addFavorites = (isFavPage = false) => {
  const favoritesList = localStorageLoad('ski-people-fav');
  const goodsList = document.querySelector('.goods__list');
  if (goodsList) {
    goodsList.addEventListener('click', ({ target }) => {
      const favoritesButton = target.closest('.card__favorites-button');
      if (favoritesButton) {
        const id = Number(favoritesButton.dataset.id);
        favoritesButton.classList.add('card__favorites-button_active');

        let thereIs = false;

        favoritesList.forEach((favoriteItem, index) => {
          if (favoriteItem === id) {
            thereIs = true;
            favoritesList.splice(index, 1);
            localStorageSave('ski-people-fav', favoritesList);
            favoritesButton.classList.remove('card__favorites-button_active');
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
