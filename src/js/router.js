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
import { addToCart } from './addToCart';
import { cartCount } from './cartCount';
import { sendOrder } from './sendOrder';
import { checkDelivery } from './checkDelivery';

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
        addFavorites('card__favorites-button');
        addToCart(goods);
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
        addFavorites('card__favorites-button');
        addToCart(goods);
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
        addFavorites('card__favorites-button');
        addToCart(goods);
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
        addFavorites('card__favorites-button', true); //Передаём true на странице избранного
        addToCart(goods);
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
      async ({ data: { id } }) => {
        const productData = await getData({ id });
        const { title, type, thumbsImage } = productData;
        breadcrumb(mainElem(), [
          { text: 'Главная', href: '/' },
          { text: type, href: `/category?slug=${type}` },
          { text: title, href: '' },
        ]);
        product(mainElem(), productData);
        if (thumbsImage && thumbsImage?.length > 1) {
          productSlider();
        }
        router.updatePageLinks();
        addToCart([productData]);
        addFavorites('product__info-favorites');
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
        const cartList = localStorageLoad('ski-people-cart');
        cart(mainElem(), cartList);
        cartCount(cartList);
        checkDelivery();
        sendOrder(cartList);
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
      '/order/:id',
      ({ data: { id } }) => {
        const orderId = Number(id);
        const orders = localStorageLoad('ski-people-order');
        order(mainElem(), orders[orderId]);
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
