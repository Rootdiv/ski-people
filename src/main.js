import 'normalize.css';
import './style.scss';

import { Swiper } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';

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
