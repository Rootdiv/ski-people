import Navigo from 'navigo';
import { mainElem } from './components/mainElem';
import { catalog } from './components/catalog';
import { breadcrumb } from './components/breadcrumb';
import { productList } from './components/productList';
import { productSlider } from './slider';
import { product } from './components/product';
import { cart } from './components/cart';
import { order } from './components/order';
import { setActiveCategory } from './setActiveCategory';
import { getData } from './api';
import { addFavorites } from './addFavorites';
import { localStorageLoad } from './localStorage';
import { page404 } from './components/page404';
import { paginationElem } from './components/paginationElem';
import { paginationCounter } from './paginationCounter';

export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on(
      '/',
      async ({ params }) => {
        const page = params ? params.page : 1;
        await catalog(mainElem());
        setActiveCategory();
        const { goods, pagination } = await getData({ page });
        productList('Список товаров', goods, mainElem());
        paginationElem(mainElem(), pagination);
        paginationCounter(pagination.totalPages, '/', page);
        addFavorites();
        router.updatePageLinks();
      },
      {
        already(match) {
          match.route.handler(match);
        },
        leave(done) {
          catalog('remove');
          productList('remove');
          paginationElem('remove', {});
          done();
        },
      },
    )
    .on(
      '/search',
      async ({ url, params: { page, query } }) => {
        breadcrumb(mainElem(), [
          { text: 'Главная', href: '/' },
          { text: 'Результаты поиска', href: '' },
        ]);
        const currentPage = page || 1;
        const { goods, pagination } = await getData({ page, query });
        productList('Список товаров', goods, mainElem());
        paginationElem(mainElem(), pagination);
        paginationCounter(pagination.totalPages, `/${url}`, currentPage, query);
        addFavorites();
        router.updatePageLinks();
      },
      {
        leave(done) {
          breadcrumb('remove');
          productList('remove');
          paginationElem('remove', {});
          done();
        },
      },
    )
    .on(
      '/category',
      async ({ url, params: { page, slug } }) => {
        await catalog(mainElem());
        setActiveCategory(slug);
        const currentPage = page || 1;
        const { goods, pagination } = await getData({ page, category: slug });
        productList('Список товаров', goods, mainElem());
        paginationElem(mainElem(), pagination);
        paginationCounter(pagination.totalPages, `/${url}`, currentPage, slug);
        addFavorites();
        router.updatePageLinks();
      },
      {
        leave(done) {
          catalog('remove');
          productList('remove');
          paginationElem('remove', {});
          done();
        },
      },
    )
    .on(
      '/favorites',
      async ({ url, params }) => {
        breadcrumb(mainElem(), [
          { text: 'Главная', href: '/' },
          { text: 'Избранное', href: '' },
        ]);
        const page = params ? params.page : 1;
        const list = localStorageLoad('ski-people-fav').join(',');
        const { goods, pagination } = await getData({ page, list });
        productList('Избранное', goods, mainElem());
        paginationElem(mainElem(), pagination);
        paginationCounter(pagination.totalPages, `/${url}`, page);
        addFavorites(true); //Передаём true на странице избранного
        router.updatePageLinks();
      },
      {
        already(match) {
          match.route.handler(match);
        },
        leave(done) {
          breadcrumb('remove');
          productList('remove');
          paginationElem('remove', {});
          done();
        },
      },
    )
    .on(
      '/product/:id',
      ({ data: { id } }) => {
        breadcrumb(mainElem(), [
          { text: 'Главная', href: '/' },
          { text: 'Лыжи', href: '/ski' },
          { text: 'Горные лыжи', href: '' },
        ]);
        product(mainElem());
        productSlider();
      },
      {
        leave(done) {
          breadcrumb('remove');
          product('remove');
          done();
        },
      },
    )
    .on(
      '/cart',
      () => {
        cart(mainElem());
      },
      {
        already(match) {
          match.route.handler();
        },
        leave(done) {
          cart('remove');
          done();
        },
      },
    )
    .on(
      '/order',
      () => {
        order(mainElem());
      },
      {
        leave(done) {
          order('remove');
          done();
        },
      },
    )
    .notFound(
      () => {
        page404(mainElem());

        setTimeout(() => {
          router.navigate('/');
        }, 5000);
      },
      {
        leave(done) {
          page404('remove');
          done();
        },
      },
    )
    .resolve();
};
