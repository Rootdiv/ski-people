import { API_URL } from './const';

export const getData = async category => {
  try {
    const params = category ? `?${new URLSearchParams(category)}` : '';
    const response = await fetch(`${API_URL}/goods${params}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/category`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
