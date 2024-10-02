'use strict';

const API_KEY = '46284520-d906981dc6cb4e25f7cb86bba';
const BASE_URL = 'https://pixabay.com/api/';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const options = {
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  },
};

/**
 * Функція для отримання зображень з Pixabay
 * @param {string} searchQuery - запит для пошуку
 * @returns {Promise} - обіцянка, що виконує дані з Pixabay
 */
export function fetchImages(searchQuery) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${PROXY_URL}${BASE_URL}?${searchParams.toString()}`;


  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

