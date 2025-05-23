import { getAllProducts } from "./requests/products";
import { markupAllProducts } from "./services/markupService";

const allProducts = document.querySelector('#allProducts');

// getAllProducts().then((console.log))

getAllProducts().then(({data: {products}}) => {console.log(products)
 const markupCards = markupAllProducts(products);
 allProducts.insertAdjacentHTML('beforeend', markupCards);
});



