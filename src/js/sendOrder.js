import { localStorageLoad, localStorageSave } from './localStorage';
import { totalSum } from './helpers';
import { router } from './router';

export const sendOrder = cartList => {
  const orders = localStorageLoad('ski-people-order');
  const cartForm = document.querySelector('.cart__form');
  cartForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(cartForm));
    const orderData = cartList.map(item => ({ productId: item.id, count: item.count }));

    formData.orderId = orders.length + 1;
    formData.totalSum = totalSum(cartList);
    formData.order = orderData;

    if (
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.email.trim() !== '' &&
      (formData?.deliveryType === 'delivery' || formData?.deliveryType === 'pickup') &&
      (formData?.paymentType === 'card' || formData?.paymentType === 'cash')
    ) {
      orders.push(formData);
      localStorageSave('ski-people-order', orders);

      document.querySelector('.cart__list').textContent = '';
      localStorageSave('ski-people-cart', []);

      router.navigate(`/order/${formData.orderId}`);
    }
  });
};
