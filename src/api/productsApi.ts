import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../interfaces/product';
type DatabaseDate = {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
};
axios.defaults.baseURL = `https://dummyjson.com/products`;
export const getProducts = async (): Promise<DatabaseDate> => {
  const response: AxiosResponse<DatabaseDate> = await axios.get(
    'https://dummyjson.com/products'
  );
  return response.data;
};
export const getAllProducts = async (skip: number, limit: number) => {
  const response = await axios(`?skip=${skip}&limit=${limit}`);
  return response.data;
};
export const getProductsByCategory = async (category: string) => {
  const response = await axios(`/category/${category}`);
  return response.data;
};

export const getProductDetailById = async (productId: string) => {
  const product = await axios(`/${productId}`);
  return product;
};
