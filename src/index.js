import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createBreedsMarkup, createInfoMarkup } from './js/create-markup';
const breedSelect = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const divCatIfoEl = document.querySelector('.cat-info');

breedSelect.addEventListener('change', onSelectBreed);

// // fetchCatByBreed(breedId);
// fetchCatByBreed('abys').then(data => console.log(data));
// fetchCatByBreed();
// console.log(fetchBreeds());

// let arrDataBreeds = [];

// fetchBreeds()
//   .then(data => {
//     data.forEach(breed => {
//       const breedData = {
//         id: breed.id,
//         name: breed.name,
//       };
//       arrDataBreeds.push(breedData);
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   });
// console.log(arrDataBreeds);
function onSelectBreed(event) {
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      createInfoMarkup(data, breedSelect);
      console.log(breedId);
    })
    .catch(onFetchError);
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
