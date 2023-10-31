export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';

  const url = BASE_URL + END_POINT;

  // console.log(url);
  const options = {
    headers: {
      'x-api-key':
        'live_ersgwzUABvriZ6nRWzsdRfNKFCOgdiewRlrapQ4SSUvSN5ilvdN1PeidqaKq2hwj',
    },
  };
  return fetch(url, options).then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/images/search';
  const PARAMS = `?breed_ids=${breedId}`;
  //   const PARAMS = new URLSearchParams({
  //     breed_ids: 'name,description,temperament',
  //   });
  const url = BASE_URL + END_POINT + PARAMS;

  console.log(url);
  const options = {
    headers: {
      'x-api-key':
        'live_ersgwzUABvriZ6nRWzsdRfNKFCOgdiewRlrapQ4SSUvSN5ilvdN1PeidqaKq2hwj',
    },
  };
  return fetch(url, options).then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json;
  });
}
