import { fetchCatByBreed } from './js/cat-api';
import { fetchAndRenderBreeds } from './js/render-fetch';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const divCatIfoEl = document.querySelector('.cat-info');
export { breedSelect, loaderEl };
fetchAndRenderBreeds();

breedSelect.addEventListener('change', onSelectBreed);

const createInfoMarkup = breed => {
  console.log(breed[0].breeds[0]);
  const markup = ` <div class="box-img"><img class="cat-picture" src="${breed[0].url}" alt="${breed[0].breeds[0].name}" width="1600" height="1000"></div><div class="box-text"><h2 class="cat-info-desc-title">${breed[0].breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed[0].breeds[0].description}</p>
    <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed[0].breeds[0].temperament}</p></div>`;
  divCatIfoEl.insertAdjacentHTML('beforeend', markup);
};
function onSelectBreed(event) {
  loaderEl.classList.remove('hidden');
  divCatIfoEl.innerHTML = '';
  const breedId = event.target.value;
  fetchCatByBreed(breedId)
    .then(breed => createInfoMarkup(breed))
    // .then(breed => console.log(breed))
    .catch(error => {
      // console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loaderEl.classList.add('hidden'));
}
