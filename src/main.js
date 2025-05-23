import {
  getAllProducts,
  getProductById,
  addProduct,
} from './requests/products';
import {
  markupAllProducts,
  markupProduct,
  markupNewProduct,
} from './services/markupService';

const allProducts = document.querySelector('#allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');
const newProductForm = document.querySelector('#newProductForm');
const newProductSection = document.querySelector('#newProductSection');

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

newProductForm.addEventListener('submit', addNewProduct);
function addNewProduct(e) {
  e.preventDefault()
  const brand = e.target.elements.brand.value
  const price = e.target.elements.brand.value;
  const description = e.target.elements.brand.value;
  const title = e.target.elements.brand.value;


const newProduct = {brand, title, description, price}

  addNewProduct(newProduct).then(({ data }) => {
  //   const markupSingleCard = markupProduct(data);
  // singleProduct.innerHTML = markupSingleCard;
  //   singleProductForm.reset();
  // })
}