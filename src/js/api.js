import { API_URL } from './const';

export const getData = async category => {
  const params = category ? `?${new URLSearchParams(category)}` : '';
  const response = await fetch(`${API_URL}/goods${params}`);
  return await response.json();
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/category`);
  return await response.json();
};
