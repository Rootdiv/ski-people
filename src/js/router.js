import Navigo from 'navigo';
import { mainElem } from './components/mainElem';
import { catalog } from './components/catalog';
import { breadcrumb } from './components/breadcrumb';
import { goods } from './components/goods';
import { productSlider } from './slider';
import { product } from './components/product';
import { cart } from './components/cart';
import { order } from './components/order';

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', () => {
      document.body.append(mainElem([catalog(), goods()]));
    })
    .on('/favorites', () => {
      document.body.append(mainElem([breadcrumb(), goods()]));
    })
    .on('/product', () => {
      document.body.append(mainElem([breadcrumb(), product()]));
      productSlider();
    })
    .on('/cart', () => {
      document.body.append(mainElem([cart()]));
    })
    .on('/order', () => {
      document.body.append(mainElem([order()]));
    })
    .notFound(() => {
      console.log('error');
    })
    .resolve();
};
