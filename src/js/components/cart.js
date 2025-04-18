import { API_URL, formatPrice } from '../const';
import { localStorageLoad } from '../localStorage';
import { layout } from './layout';

let rendered = false;

export const cart = (parent, data = []) => {
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

  const cartList = localStorageLoad('ski-people-cart');

  const totalSum = cartList.reduce((sum, item) => sum + item.count * item.price, 0);

  let cartItem = '';

  const render = (data, result) => {
    console.log('data: ', data);
    data.forEach(({ id, title, img, article, price, count }) => {
      result += `
        <li class="cart__item" data-id=${id}>
          <img src="${API_URL}/${img}" alt="${title}" class="cart__item-image" />
          <h3 class="cart__item-title">${title}</h3>
          <p class="cart__item-price">${formatPrice(price)}</p>
          <p class="cart__item-article">арт.&nbsp;${article}</p>
          <div class="cart__item-counter counter" data-id="${id}">
            <button type="button" class="counter__decrement">-</button>
            <p class="counter__number">${count}</p>
            <button type="button" class="counter__increment">+</button>
          </div>
        </li>
      `;
    });
    return result;
  };

  const child = `
    <h2 class="cart__title">Корзина</h2>
    <div class="cart__wrapper">
      <ul class="cart__list">
        ${render(cartList, cartItem)}
      </ul>
      <div class="cart__order">
        <h3 class="cart__order-title">Оформление</h3>
        <div class="cart__order-info">
          <p class="cart__order-count">
            <span class="cart__order-number">${cartList.length}</span> товара на сумму:
          </p>
          <p class="cart__order-price">${formatPrice(totalSum)}</p>
        </div>
        <p class="cart__order-delivery">Доставка&nbsp;0&nbsp;&#8381;</p>
        <button type="submit" form="cartForm" class="cart__order-button">Оформить заказ</button>
      </div>
      <form id="cartForm" action="#" method="POST" class="cart__form">
        <h3 class="cart__form-title">Данные для доставки</h3>
        <fieldset class="cart__form-inputs">
          <input
            type="text"
            class="cart__form-input"
            name="name"
            placeholder="Фамилия Имя Отчество" />
          <input type="tel" class="cart__form-input" name="phone" placeholder="Телефон" />
          <input type="email" class="cart__form-input" name="email" placeholder="E-mail" />
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
            <input type="radio" name="deliveryType" value="delivery" class="cart__form-radio" />
            Доставка
          </label>
          <label class="cart__form-label">
            <input type="radio" name="deliveryType" value="pickup" class="cart__form-radio" />
            Самовывоз
          </label>
        </fieldset>
        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Оплата</legend>
          <label class="cart__form-label">
            <input type="radio" name="paymentType" value="card" class="cart__form-radio" />
            Картой при получении
          </label>
          <label class="cart__form-label">
            <input type="radio" name="paymentType" value="cash" class="cart__form-radio" />
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
