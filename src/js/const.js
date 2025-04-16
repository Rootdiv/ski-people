export const API_URL = import.meta.env.DEV
  ? 'http://localhost:3118/api'
  : 'https://api.rootdiv.ru/ski/api';

export const formatPrice = number =>
  Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(number);
