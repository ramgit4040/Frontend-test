export const fetchSuggestions = (searchTerm) => {
  return fetch(`http://localhost:3001/search?q=${searchTerm}`)
  .then((res) => {
    if(res.ok){
     return res.json()
    } else {
      throw new Error('Something went wrong')
    }
  })
};

export const fetchProductDetail = (id) => {
  return fetch(`http://localhost:3001/products/${id}`).then((res) => res.json());
};
