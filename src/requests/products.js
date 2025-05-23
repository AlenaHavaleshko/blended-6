import { dummyApi } from '../services/api';

// Task 1
export async function getAllProducts() {
  return await dummyApi.get('/products');
}

//  TASK 2
export async function getProductById(id) {
  return await dummyApi.get(`/products/${id}`);
}
