import { breedSelect, divCatIfoEl } from '../index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

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

export function createInfoMarkup(breeds) {
  const markup = breeds
    .map(({ url, breeds }) => {
      return `
  <div class="box-img">
  <img src="${url}" alt="${breeds[0].name}" width="400"/>
  </div>
  <div class="box-text">
  <h1>${breeds[0].name}</h1>
  <p>${breeds[0].description}</p>
  <p><b>Temperament:</b> ${breeds[0].temperament}</p>
  </div>`;
    })
    .join('');

  divCatIfoEl.insertAdjacentHTML('beforeend', markup);
}
