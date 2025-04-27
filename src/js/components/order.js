import { formatPrice } from '../helpers';
import { layout } from './layout';

let rendered = false;

export const order = (parent, data) => {
  console.log('data: ', data);
  const elem = document.createElement('section');
  elem.className = 'order';

  if (parent === 'remove') {
    document.querySelector('.order').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.order');
  }

  if (!data) {
    const childEmpty = `
      <div class="order__wrapper">
        Ваш заказ не найден
      </div>
    `;
    elem.append(layout(childEmpty, 'order__container'));

    parent.append(elem);

    rendered = true;

    return elem;
  }

  const address = data.address ? data.address : '';
  const deliveryType = data.deliveryType === 'pickup' ? 'Самовывоз' : 'Доставка';
  const paymentType = data.paymentType === 'card' ? 'Картой' : 'Наличными';

  const child = `
    <div class="order__wrapper">
      <div class="order__info">
        <p class="order__title">Заказ успешно размещен</p>
        <p class="order__price">${formatPrice(data.totalSum)}</p>
        <p class="order__number">&numero;${data.orderId}</p>
      </div>
      <table class="order__table table">
        <caption class="table__title">Данные доставки</caption>
        <tr class="table__row">
          <td class="table__filed">Получатель</td>
          <td class="table__value">${data.name}</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">Телефон</td>
          <td class="table__value">${data.phone}</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">E-mail</td>
          <td class="table__value">${data.email}</td>
        </tr>
        ${
          address
            ? `<tr class="table__row">
          <td class="table__filed">Адрес доставки</td>
          <td class="table__value">${address}</td>
        </tr>`
            : ''
        }
        <tr class="table__row">
          <td class="table__filed">Способ оплаты</td>
          <td class="table__value">${paymentType} при получении</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">Способ получения</td>
          <td class="table__value">${deliveryType}</td>
        </tr>
      </table>
      <a href="/" class="order__link-button">На главную</a>
    </div>
  `;

  elem.append(layout(child, 'order__container'));

  parent.append(elem);

  rendered = true;

  return elem;
};
