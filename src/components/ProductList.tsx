import ProductCard from './ProductCard';
import { IProductsList } from '../interfaces/product';
import { Grid } from '@chakra-ui/react';

export default function ProductList({ products }: IProductsList) {
  return (
    <Grid as="ul" templateColumns="repeat(5, 1fr)" gap={6}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
