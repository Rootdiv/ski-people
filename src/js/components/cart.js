import { layout } from './layout';

export const cart = () => {
  const elem = document.createElement('section');
  elem.className = 'cart';

  const child = `
    <h2 class="cart__title">Корзина</h2>
    <ul class="cart__list">
      <li class="cart__item-product">
        <img src="/images/ski-mini.jpg" alt="Горные лыжи" class="cart__image" />
        <h3 class="cart__item-title">Горные лыжи</h3>
        <p class="cart__item-price">5&nbsp;000&nbsp;&#8381;</p>
        <p class="cart__item-id">арт.&nbsp;84348945757</p>
        <div class="cart__item-counter counter">
          <button type="button" class="counter__decrement">-</button>
          <p class="counter__number">1</p>
          <button type="button" class="counter__increment">+</button>
        </div>
      </li>
    </ul>
    <div class="cart__order">
      <h3 class="cart__order-title">Оформление</h3>
      <div class="cart__order-info">
        <p class="cart__order-count">
          <span class="cart__order-number">4</span> товара на сумму:
        </p>
        <p class="cart__order-price">20&nbsp;000&nbsp;&#8381;</p>
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
  `;

  elem.append(layout(child));

  return elem;
};
