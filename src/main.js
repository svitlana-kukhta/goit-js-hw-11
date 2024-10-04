'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchInput = document.querySelector('#search-input');
const fetchSearchBtn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox;

fetchSearchBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    iziToast.show({ message: 'Please try again!' });
    return;
  }

  loader.style.display = 'block';

  fetchImages(searchQuery)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits || data.hits.length === 0) {
        iziToast.show({ message: 'No images found for your query. Please try another search.' });
        return;
      }

      renderImages(data.hits, gallery);

      lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
      lightbox.refresh();
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({ title: 'Error', message: 'Sorry, there are no images matching your search query. Please try again!' });
    });
});
    
      
