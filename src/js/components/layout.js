export const layout = (child, className) => {
  const elem = document.createElement('div');
  elem.className = 'container';

  if (className) {
    elem.classList.add(className);
  }

  elem.innerHTML = child;

  return elem;
};
