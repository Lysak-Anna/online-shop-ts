import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getProductDetailById } from '../api/productsApi';
import { IProduct } from './../interfaces/product';

export default function ProductPage() {
  const { productId }: any = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { isError } = useQuery(['product', productId], async () => {
    const { data } = await getProductDetailById(productId);
    setProduct(data);
    console.log(data);
  });
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product?.title}</Heading>
            <Text>{product?.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {product?.price}$
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <SimpleGrid columns={2} spacing={10}>
        {product?.images.map(img => (
          <Box w="100%" height="auto">
            <Image src={img} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
