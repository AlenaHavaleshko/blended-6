import { getAllProducts, getProductById } from './requests/products';
import { markupAllProducts, markupProduct } from './services/markupService';

const allProducts = document.querySelector('#allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');

// getAllProducts().then((console.log))

getAllProducts().then(({ data: { products } }) => {
  console.log(products);
  //  const markupCards = markupAllProducts(products);
  //  allProducts.insertAdjacentHTML('beforeend', markupCards);
});

singleProductForm.addEventListener('submit', findProductById);
function findProductById(event) {
  event.preventDefault();
  const id = event.target.elements.id.value;
  getProductById(id).then(console.log);
  getProductById(id).then(({ data }) => {
    // console.log(data);
    const markupSingleCard = markupProduct(data);
    singleProduct.innerHTML = markupSingleCard;
    singleProductForm.reset();
  });
}
