const baseURL = 'https://api.sampleapis.com/beers/ale';

export const getProducts = async () => {
  return fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};

export const getProductById = async (id: string | undefined) => {
  if (!id) return null;

  return fetch(`${baseURL}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
