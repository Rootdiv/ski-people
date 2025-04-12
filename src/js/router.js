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

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on(
      '/',
      async () => {
        await catalog(mainElem());
        setActiveCategory();
        const goods = await getData();
        productList('Список товаров', goods, mainElem());
        router.updatePageLinks();
        addFavorites(goods);
      },
      {
        already(match) {
          match.route.handler();
        },
        leave(done) {
          catalog('remove');
          productList('remove');
          done();
        },
      },
    )
    .on(
      '/category',
      async ({ params: { slug } }) => {
        await catalog(mainElem());
        setActiveCategory(slug);
        const goods = await getData({ category: slug });
        productList('Список товаров', goods, mainElem());
        router.updatePageLinks();
      },
      {
        leave(done) {
          catalog('remove');
          productList('remove');
          done();
        },
      },
    )
    .on(
      '/favorites',
      async () => {
        const goods = await getData();
        breadcrumb(mainElem());
        productList('Избранное', localStorageLoad('ski-people-fav'), mainElem());
        addFavorites(goods, true);
      },
      {
        already(match) {
          match.route.handler();
        },
        leave(done) {
          breadcrumb('remove');
          productList('remove');
          done();
        },
      },
    )
    .on(
      '/product/:id',
      ({ data: { id } }) => {
        breadcrumb(mainElem());
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
