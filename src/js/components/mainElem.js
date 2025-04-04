export const mainElem = child => {
  const elem = document.createElement('main');

  elem.append(...child);

  return elem;
};
