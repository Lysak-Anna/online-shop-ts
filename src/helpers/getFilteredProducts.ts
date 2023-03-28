import { getProducts, getProductsByCategory } from './../api/productsApi';
import { IProduct } from './../interfaces/product';
import { selectFilter } from './selectFilter';
export const rangeData = (array: IProduct[], range: number[]) => {
  return array.filter(item => item.price >= range[0] && item.price <= range[1]);
};
export const setData = (
  array: IProduct[],
  cb: ([]) => void,
  filter: string,
  range: number[]
) => {
  const rangedData = rangeData(array, range);
  const filteredData = filter ? selectFilter(filter, rangedData) : rangedData;
  cb(filteredData);
};
export const getFilteredProducts = async (
  category: string,
  cb: ([]) => void,
  range: number[],
  filter: string
) => {
  if (category === 'all products') {
    const data = await getProducts();
    setData(data.products, cb, filter, range);
  } else {
    const data = await getProductsByCategory(category);
    setData(data.products, cb, filter, range);
  }
};
