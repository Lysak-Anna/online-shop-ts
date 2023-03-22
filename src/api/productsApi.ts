import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../interfaces/product';
// axios.defaults.baseURL = `https://fakestoreapi.com/products`;
export const getProducts = async (): Promise<IProduct[]> => {
  const response: AxiosResponse<IProduct[]> = await axios.get(
    'https://fakestoreapi.com/products'
  );
  return response.data;
};
export const getProductsByCategory = async (category: string) => {
  const products = await axios(`/category/${category}`);
  return products;
};

export const getProductDetailById = async (productId: string) => {
  const product = await axios(`/${productId}`);
  return product;
};
