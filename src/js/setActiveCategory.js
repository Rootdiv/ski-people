export const setActiveCategory = slug => {
  const linksList = document.querySelectorAll('.catalog__link');
  const encodedSlug = encodeURIComponent(slug);
  linksList.forEach(link => {
    const linkSlug = new URL(link.href).searchParams.get('slug');
    if (slug === undefined) {
      linksList[0].classList.add('catalog__link_active');
    }
    if (encodeURIComponent(linkSlug) === encodedSlug) {
      link.classList.add('catalog__link_active');
    } else {
      link.classList.remove('catalog__link_active');
    }
  });
};
