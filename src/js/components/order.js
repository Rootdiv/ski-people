import { layout } from './layout';

let rendered = false;

export const order = (parent, data = {}) => {
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

  const child = `
    <div class="order__wrapper">
      <div class="order__info">
        <p class="order__title">Заказ успешно размещен</p>
        <p class="order__price">20&nbsp;000&nbsp;&#8381;</p>
        <p class="order__number">&numero;43435</p>
      </div>
      <table class="order__table table">
        <caption class="table__title">Данные доставки</caption>
        <tr class="table__row">
          <td class="table__filed">Получатель</td>
          <td class="table__value">Иванов Петр Александрович</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">Телефон</td>
          <td class="table__value">+7 (737) 346 23 00</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">E-mail</td>
          <td class="table__value">Ivanov84@gmail.com</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">Адрес доставки</td>
          <td class="table__value">Москва, ул. Ленина, 21, кв. 33</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">Способ оплаты</td>
          <td class="table__value">Картой при получении</td>
        </tr>
        <tr class="table__row">
          <td class="table__filed">Способ получения</td>
          <td class="table__value">Доставка</td>
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
