import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import OrderModal from '../components/OrderModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCount,
  deleteProduct,
  increaseCount,
} from '../redux/cart/cartSlice';
import { getProductFromState } from '../redux/cart/selectors';
export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const products = useSelector(getProductFromState);
  const dispatch = useDispatch();
  const onDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };
  const increase = (id: number) => {
    dispatch(increaseCount(id));
  };
  const decrease = (id: number) => {
    dispatch(decreaseCount(id));
  };
  return (
    <Box p="4">
      <TableContainer
        borderWidth="1px"
        p="4"
        borderRadius="lg"
        borderColor="gray"
      >
        {products.length > 0 ? (
          <>
            <Table size="md">
              <Thead>
                <Tr>
                  <Th borderColor="gray">Product</Th>
                  <Th borderColor="gray">Price</Th>
                  <Th textAlign="center" borderColor="gray">
                    Count
                  </Th>
                  <Th borderColor="gray">Sum</Th>
                  <Th borderColor="gray"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map(({ id, title, price, count }) => (
                  <Tr key={id}>
                    <Td borderColor="gray">{title}</Td>
                    <Td borderColor="gray">{price}$</Td>
                    <Td p="1" borderColor="gray">
                      {
                        <Flex justifyContent="space-around">
                          <button
                            type="button"
                            disabled={count === 0}
                            onClick={() => decrease(id)}
                          >
                            <MinusIcon w="10px" />
                          </button>
                          <Box
                            borderWidth="1px"
                            borderColor="gray"
                            borderRadius="md"
                            p="2"
                          >
                            {count}
                          </Box>
                          <button
                            type="button"
                            onClick={() => increase(id)}
                            disabled={count > 8}
                          >
                            <AddIcon w="10px" />
                          </button>
                        </Flex>
                      }
                    </Td>
                    <Td borderColor="gray">{price * count}$</Td>
                    <Td borderColor="gray">
                      {
                        <DeleteIcon
                          onClick={() => onDeleteProduct(id)}
                          cursor="pointer"
                          _hover={{ color: 'accent' }}
                        />
                      }
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
            <Button
              bgColor="accent"
              color="white"
              mt="20px"
              ml="auto"
              mr="auto"
              display="block"
              onClick={onOpen}
              _hover={{ boxShadow: '2xl' }}
            >
              Buy now
            </Button>
          </>
        ) : (
          <Text>You have not added products to the cart yet</Text>
        )}
      </TableContainer>
      <OrderModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
