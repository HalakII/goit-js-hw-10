import { loaderEl, breedSelect } from '../index';
import { fetchBreeds } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

export const fetchAndRenderBreeds = () => {
  console.log(loaderEl);
  loaderEl.classList.remove('hidden');
  fetchBreeds()
    .then(data => createBreedsMarkup(data))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
      breedSelect.classList.remove('hidden');
    });
};

export function createBreedsMarkup(data) {
  const markup = data
    .map(({ name, id }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#selectElement',
  });
}
