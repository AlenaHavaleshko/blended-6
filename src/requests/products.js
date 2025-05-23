import { dummyApi } from "../services/api";

 // Task 1
 export async function getAllProducts() {
  return await dummyApi.get('/products');
 }
