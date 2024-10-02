'use strict';

/**
 * Функція для відображення зображень у галереї
 * @param {Array} hits - масив зображень
 * @param {HTMLElement} gallery - контейнер для зображень
 */
export function renderImages(hits, gallery) {
  gallery.innerHTML = '';
  hits.forEach(hit => {
    const linkElement = document.createElement('a');
    linkElement.href = hit.largeImageURL;

    const imgElement = document.createElement('img');
    imgElement.src = hit.webformatURL;
    imgElement.alt = hit.tags;
    imgElement.width = 360;
  

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
}