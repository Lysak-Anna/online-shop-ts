import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import { useQuery } from 'react-query';
import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import { getProducts } from '../api/productsApi';
import { IProduct } from './../interfaces/product';

export default function HomePage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  //   const { error } = useQuery(['products'], async () => {
  //     const data = await getProducts();
  //     setProducts(data);
  //   });
  return (
    <Container p="4" h="100vh">
      <CategoryList />
      <ProductList products={products} />
    </Container>
  );
}
