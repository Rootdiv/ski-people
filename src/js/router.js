import Navigo from 'navigo';
import { mainElem } from './components/mainElem';
import { catalog } from './components/catalog';
import { breadcrumb } from './components/breadcrumb';
import { goods } from './components/goods';
import { product } from './components/product';
import { cart } from './components/cart';
import { order } from './components/order';

import { Swiper } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';

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
      const thumbnailsSwiper = new Swiper('.product__slider-thumbnails', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      new Swiper('.product__slider', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.product__slider-arrow_next',
          prevEl: '.product__slider-arrow_prev',
        },
        modules: [Navigation, Thumbs],
        thumbs: {
          swiper: thumbnailsSwiper,
        },
      });
      document.body.append(mainElem([breadcrumb(), product()]));
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
