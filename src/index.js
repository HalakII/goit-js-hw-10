import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createBreedsMarkup, createInfoMarkup } from './js/create-markup';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const divCatIfoEl = document.querySelector('.cat-info');

loaderEl.classList.replace('loader', 'is-hidden');
errorEl.classList.add('is-hidden');
divCatIfoEl.classList.add('is-hidden');

fetchBreeds()
  .then(breeds => createBreedsMarkup(breeds))
  .catch(error => {
    console.log(error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  })
  .finally(() => {
    //   loaderEl.classList.add('unvisible');
    //   breedSelect.classList.remove('unvisible');
  });

// console.log(arrDataBreeds);
breedSelect.addEventListener('change', onSelectBreed);

// fetchCatByBreed(breedId);
fetchCatByBreed('abys').then(data => console.log(data));
// fetchCatByBreed();
// console.log(fetchBreeds());

function onSelectBreed(event) {
  clearAll();
  loaderEl.classList.replace('is-hidden', 'loader');
  errorEl.classList.add('is-hidden');
  divCatIfoEl.classList.add('is-hidden');
  const breedId = event.target.value;

  fetchCatByBreed(breedId)
    .then(breed => createInfoMarkup(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      //   loaderEl.classList.add('unvisible');
      //   breedSelect.classList.remove('unvisible');
    });
  // .finally(() => loaderEl.classList.add('unvisible'));
}

function clearAll() {
  //   breedSelect.innerHTML = '';
  divCatIfoEl.innerHTML = '';
}
export { breedSelect, divCatIfoEl };
// ===============================================
// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_ersgwzUABvriZ6nRWzsdRfNKFCOgdiewRlrapQ4SSUvSN5ilvdN1PeidqaKq2hwj';

//   return fetch(url, options).then(res => res.json());
// }
// // axios.get('https://api.thecatapi.com/v1/breeds');
// axios
//   .get('https://api.thecatapi.com/v1/images/search?breed_ids')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {});
