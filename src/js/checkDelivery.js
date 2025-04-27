export const checkDelivery = () => {
  const deliveryFieldset = document.querySelector('.cart__form-fieldset');
  const cartOrderDelivery = document.querySelector('.cart__order-delivery');
  const address = document.querySelector('[name="address"]');

  deliveryFieldset.addEventListener('change', ({ target }) => {
    if (target.value === 'delivery') {
      address.disabled = false;
      address.required = true;
      cartOrderDelivery.innerHTML = 'Доставка 1000 &#8381;';
    } else if (target.value === 'pickup') {
      address.disabled = true;
      address.required = false;
      address.value = '';
      cartOrderDelivery.innerHTML = 'Доставка 0 &#8381;';
    }
  });
};
