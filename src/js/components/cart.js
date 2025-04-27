import { API_URL } from '../const';
import { layout } from './layout';
import { declOfNum, formatPrice, totalSum } from '../helpers';

let rendered = false;

export const cart = (parent, data) => {
  const elem = document.createElement('section');
  elem.className = 'cart';

  if (parent === 'remove') {
    document.querySelector('.cart').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.cart');
  }

  let cartItem = '';

  data.forEach(({ id, title, img, article, price, count }) => {
    cartItem += `
      <li class="cart__item" data-id=${id}>
        <img src="${API_URL}/${img}" alt="${title}" class="cart__item-image" required />
        <h3 class="cart__item-title">${title}</h3>
        <p class="cart__item-price">${formatPrice(price)}</p>
        <p class="cart__item-article">арт.&nbsp;${article}</p>
        <div class="cart__item-counter counter">
          <button type="button" class="counter__decrement">-</button>
          <p class="counter__number">${count}</p>
          <button type="button" class="counter__increment">+</button>
        </div>
      </li>
    `;
  });

  const child = `
    <h2 class="cart__title">Корзина</h2>
    <div class="cart__wrapper">
      <ul class="cart__list">
        ${cartItem}
      </ul>
      <div class="cart__order">
        <h3 class="cart__order-title">Оформление</h3>
        <div class="cart__order-info">
          <p class="cart__order-count">${declOfNum(data.length, [
            'товар',
            'товара',
            'товаров',
          ])} на сумму:</p>
          <p class="cart__order-price">${formatPrice(totalSum(data))}</p>
        </div>
        <p class="cart__order-delivery">Доставка&nbsp;0&nbsp;&#8381;</p>
        <button type="submit" form="cartForm" class="cart__order-button" ${
          data.length ? '' : 'disabled'
        }>
          Оформить заказ
        </button>
      </div>
      <form id="cartForm" action="#" method="POST" class="cart__form">
        <h3 class="cart__form-title">Данные для доставки</h3>
        <fieldset class="cart__form-inputs">
          <input
            type="text"
            class="cart__form-input"
            name="name" required
            placeholder="Фамилия Имя Отчество" required />
          <input type="tel" class="cart__form-input" name="phone" required placeholder="Телефон" required />
          <input type="email" class="cart__form-input" name="email" required placeholder="E-mail" required />
          <input
            type="text"
            class="cart__form-input"
            name="address"
            placeholder="Адрес доставки" />
          <textarea
            name="comments"
            placeholder="Комментарий к заказу"
            class="cart__form-textarea"></textarea>
        </fieldset>
        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Доставка</legend>
          <label class="cart__form-label">
            <input type="radio" name="deliveryType" value="delivery" class="cart__form-radio" required />
            Доставка
          </label>
          <label class="cart__form-label">
            <input type="radio" name="deliveryType" value="pickup" class="cart__form-radio" required />
            Самовывоз
          </label>
        </fieldset>
        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Оплата</legend>
          <label class="cart__form-label">
            <input type="radio" name="paymentType" value="card" class="cart__form-radio" required />
            Картой при получении
          </label>
          <label class="cart__form-label">
            <input type="radio" name="paymentType" value="cash" class="cart__form-radio" required />
            Наличными при получении
          </label>
        </fieldset>
      </form>
    </div>
  `;

  elem.append(layout(child));

  parent.append(elem);

  rendered = true;

  return elem;
};
