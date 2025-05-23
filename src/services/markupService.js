// task 1

export const markupAllProducts = (products) => {
 return products.map(({id, description, price, images,brand, title}) => {
  return `<li data-id="${id}">
      <img src="${images[0]}" alt="${title}" width="200">
      <h3>Brand: ${brand}</h3>
      <h4>Model: ${title}</h4>
      <p>Price: ${price}</p>
      <p>Description: ${description}</p>
    </li>`;
 }).join('');
}