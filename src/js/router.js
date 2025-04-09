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
    .on('/favorites', () => {
      mainElem().append(breadcrumb());
      productList('Избранное', [], mainElem());
    })
    .on('/product/:id', () => {
      mainElem().append(breadcrumb(), product());
      productSlider();
    })
    .on('/cart', () => {
      mainElem().append(cart());
    })
    .on('/order', () => {
      mainElem().append(order());
    })
    .notFound(() => {
      console.log('error');
    })
    .resolve();
};
