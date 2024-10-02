'use strict';
/*import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = `46284520-d906981dc6cb4e25f7cb86bba`;
const BASE_URL = `https://pixabay.com/api/`;
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const searchInput = document.querySelector('#search-input');
const fetchSearchBtn = document.querySelector(".btn");
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const options = {
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache', // Заборонити використання кешу
    'Pragma': 'no-cache', // Забороняє кешування в старих браузерах
  }
};
let lightbox;
let requestCount = 0; // Лічильник запитів
// Функція для отримання зображень
function fetchImages() {requestCount++;
  console.log(`Кількість запитів: ${requestCount}`);
  
  const searchQuery = searchInput.value.trim(); // Отримуємо значення запиту
  if (!searchQuery) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return; // Виходимо, якщо немає запиту
  }

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${PROXY_URL}${BASE_URL}?${searchParams.toString()}`;  
  console.log(`Надсилається запит на URL: ${url}`); // Перевірка URL запиту

  gallery.innerHTML = ''; 
  loader.style.display = 'block';

  fetch(url, options)
    .then(response => {console.log('Отримана відповідь:', response);
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
       }
      return response.json();
      console.log(data)
    })
    .then(data => {
      loader.style.display = 'none';
      // Перевірка наявності зображень у відповіді
      if (data.hits && data.hits.length > 0) {
         iziToast.hide();
      // Додавання зображень до галереї
      data.hits.forEach(hit => {
        const linkElement = document.createElement('a');
        linkElement.href = hit.largeImageURL;

        linkElement.setAttribute('rel', 'noopener noreferrer');
        linkElement.setAttribute('target', '_blank');
        
        const imgElement = document.createElement('img');
        imgElement.src = hit.webformatURL;
        imgElement.alt = hit.tags;

         const infoDiv = document.createElement('div');
        infoDiv.classList.add('image-info');
        infoDiv.innerHTML = `
          <p><strong>Likes:</strong> ${hit.likes}</p>
          <p><strong>Views:</strong> ${hit.views}</p>
          <p><strong>Comments:</strong> ${hit.comments}</p>
          <p><strong>Downloads:</strong> ${hit.downloads}</p>
        `;

        linkElement.appendChild(imgElement);
        linkElement.appendChild(infoDiv);
        gallery.appendChild(linkElement);
      });

      // Активуємо SimpleLightbox після додавання зображень
      lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
      lightbox.refresh();
      } else {
        // Якщо зображень немає
        iziToast.show({ message: 'No images found for your query. Please try another search.' });
      }
    })
  
    .catch(error => {loader.style.display = 'none'; // Сховуємо лоадер в разі помилки
      console.error('Помилка запиту:', error.message); // Логування помилки
      iziToast.error({ title: 'Error', message: `Sorry, there was an error with your request: ${error.message}` });
    });
}

// Додаємо слухача подій до кнопки
fetchSearchBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми
  fetchImages(); // Викликаємо функцію для отримання зображень
});*/

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = `46284520-d906981dc6cb4e25f7cb86bba`;
const BASE_URL = `https://pixabay.com/api/`;
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const searchInput = document.querySelector('#search-input');
const fetchSearchBtn = document.querySelector(".btn");
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const options = {
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  },
};

let lightbox; // Оголошення змінної для lightbox

// Функція для отримання зображень
function fetchImages() {
  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    iziToast.show({ message: 'Please try again!' });
    return;
  }

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${PROXY_URL}${BASE_URL}?${searchParams.toString()}`;
  console.log(`Надсилається запит на URL: ${url}`);

  gallery.innerHTML = '';
  loader.style.display = 'block';

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        console.log('Отримана відповідь:', response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits || data.hits.length === 0) {
        iziToast.show({ message: 'No images found for your query. Please try another search.' });
        return;
      }

      // Додавання зображень до галереї
      data.hits.forEach(hit => {
        const linkElement = document.createElement('a');
        linkElement.href = hit.largeImageURL;

        const imgElement = document.createElement('img');
        imgElement.src = hit.webformatURL;
        imgElement.alt = hit.tags;

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('image-info');
        infoDiv.innerHTML = `
          <p><strong>Likes:</strong> ${hit.likes}</p>
          <p><strong>Views:</strong> ${hit.views}</p>
          <p><strong>Comments:</strong> ${hit.comments}</p>
          <p><strong>Downloads:</strong> ${hit.downloads}</p>
        `;

        linkElement.appendChild(imgElement);
        linkElement.appendChild(infoDiv);
        gallery.appendChild(linkElement);
      });

      // Ініціалізація SimpleLightbox та виклик refresh
      lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
      lightbox.refresh();
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({ title: 'Error', message: 'Sorry, there are no images matching your search query. Please try again!' });
    });
}

// Додаємо слухача подій до кнопки
fetchSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetchImages();
});


