import ProductCard from './ProductCard';
import { IProductsList } from '../interfaces/product';

export default function ProductList({ products }: IProductsList) {
  return (
    <ul>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
