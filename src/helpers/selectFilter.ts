import { IProduct } from '../interfaces/product';

export const selectFilter = (filter: string, products: IProduct[]) => {
  switch (filter) {
    case 'rating':
      return [...products].sort(
        (firstProd, secondProd) => secondProd.rating - firstProd.rating
      );

    case 'highest price':
      return [...products].sort(
        (firstProd, secondProd) => secondProd.price - firstProd.price
      );

    case 'lowest price':
      return [...products].sort(
        (firstProd, secondProd) => firstProd.price - secondProd.price
      );

    default:
      return products;
  }
};
