import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarouselComponentProps } from '../interfaces/product';
import { addProduct } from '../redux/cart/cartSlice';
import { isLoggedIn } from '../redux/user/selectors';
import ModalComponent from './Modal';

export default function ProductInfo(props: CarouselComponentProps) {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(isLoggedIn);
  const { product } = props;
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const onClickHandler = ({
    title,
    price,
    id,
  }: {
    title: string;
    price: number;
    id: number;
  }) => {
    if (!isUserLoggedIn) {
      console.log('hello');
      setOverlay(<OverlayOne />);
      onOpen();
    } else {
      dispatch(addProduct({ title, price, id }));
    }
  };
  if (!product) {
    return null;
  }
  const { title, price, brand, description, id } = product;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider color="gray" />} spacing="5">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Brand
            </Heading>
            <Text pt="2" fontSize="sm">
              {brand}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Price
            </Heading>
            <Text pt="2" fontSize="sm">
              {price}$
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Description
            </Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
          <Box>
            <Button
              onClick={() => onClickHandler({ title, price, id })}
              bgColor="accent"
              color="white"
              _hover={{ boxShadow: '2xl' }}
            >
              Add to cart
            </Button>
          </Box>
        </Stack>
      </CardBody>
      <ModalComponent isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </Card>
  );
}
