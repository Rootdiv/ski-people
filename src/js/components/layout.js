let rendered = false;

export const layout = (child, className) => {
  const elem = document.createElement('div');
  elem.className = 'container';

  if (className) {
    elem.classList.add(className);
  }

  elem.innerHTML = child;

  rendered = true;

  return elem;
};
