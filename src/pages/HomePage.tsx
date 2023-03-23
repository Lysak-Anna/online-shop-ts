import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import { useQuery } from 'react-query';
import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import { getProducts } from '../api/productsApi';
import { IProduct } from './../interfaces/product';

export default function HomePage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { error } = useQuery('products', async () => {
    const data = await getProducts();
    setProducts(data.products);
  });

  return (
    <Container maxW="100%" p="4">
      <CategoryList />
      {products?.length > 0 && <ProductList products={products} />}
    </Container>
  );
}
