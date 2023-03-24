import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import { BackLinkArrow } from '../Components.styled';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import { getProductDetailById } from '../api/productsApi';
import { IProduct } from '../interfaces/product';
import CarouselComponent from '../components/Carousel';
import ProductInfo from '../components/ProductInfo';
import { Container, Text } from '@chakra-ui/react';

export default function ProductPage() {
  const location = useLocation();
  const { productId }: any = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { isError } = useQuery(['product', productId], async () => {
    const { data } = await getProductDetailById(productId);
    setProduct(data);
  });
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLinkArrow to={backLinkHref}>
        <HiOutlineArrowNarrowLeft />
        <Text ml="8px">Back</Text>
      </BackLinkArrow>
      <Container maxW="100%" p="4" display="flex">
        <CarouselComponent product={product} />
        <ProductInfo product={product} />
      </Container>
    </>
  );
}
