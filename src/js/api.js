import { API_URL } from './const';

export const getData = async param => {
  try {
    const paramURL = param ? `?${new URLSearchParams(param)}` : '';
    const response = await fetch(`${API_URL}/goods${paramURL}`);
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
