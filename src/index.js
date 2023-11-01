import { fetchCatByBreed } from './js/cat-api';
import { fetchAndRenderBreeds } from './js/render-fetch';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
// const errorEl = document.querySelector('.error');
const divCatIfoEl = document.querySelector('.cat-info');
export { breedSelect, loaderEl };
fetchAndRenderBreeds();

breedSelect.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
  loaderEl.classList.remove('unvisible');
  divCatIfoEl.innerHTML = '';
  const breedId = event.target.value;
  fetchCatByBreed({ breedId })
    .then(breed => createInfoMarkup(breed))
    // .then(breed => console.log(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loaderEl.classList.add('unvisible'));

  const createInfoMarkup = breed => {
    const markup = ` <div class="box-img"><img class="cat-picture" src="${breed.url}" alt="${breed.id}"></div><div class="box-text"><h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
    <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p></div>`;
    divCatIfoEl.insertAdjacentHTML('beforeend', markup);
  };
}
