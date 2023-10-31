import { breedSelect, divCatIfoEl } from '../index';
import SlimSelect from 'slim-select';

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

export function createInfoMarkup(breedId) {
  const markup = breedId
    .map(({ url, name, description, temperament }) => {
      return `
  <div class="box-img">
  <img src="${url}" alt="#" width="400"/>
  </div>
  <div class="box-text">
  <h1>${name}</h1>
  <p>${description}</p>
  <p><b>Temperament:</b> ${temperament}</p>
  </div>`;
    })
    .join('');

  divCatIfoEl.insertAdjacentHTML('beforeend', markup);
}
