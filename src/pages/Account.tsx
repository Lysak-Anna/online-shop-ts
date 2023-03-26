import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledExit } from '../Components.styled';
import { clearCart } from '../redux/cart/cartSlice';
import { getUserInfo } from '../redux/user/selectors';
import { removeUser } from '../redux/user/userSlice';
import { getProductFromState } from './../redux/cart/selectors';

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserInfo);
  const products = useSelector(getProductFromState);
  const onClickLogout = () => {
    dispatch(removeUser());
    dispatch(clearCart());
    navigate('/');
  };
  const tooltipText = () => {
    return products.length > 0
      ? 'There are products in your basket! Make an order before leaving, otherwise they will be removed after loging out'
      : 'Are you leaving already? We are waiting for you again in the nearest future';
  };
  return (
    <Box p="4">
      <Box borderColor="gray" borderRadius="lg" borderWidth="1px" p="4">
        <Flex justifyContent="space-around">
          <Heading textAlign="center" as="h2" size="xl" mb="3">
            Welcome {user.email}
          </Heading>
          <Tooltip
            label={tooltipText()}
            placement="right"
            bg="gray"
            color="black"
          >
            <Button onClick={onClickLogout}>
              <StyledExit />
            </Button>
          </Tooltip>
        </Flex>
        <Text>
          In your personal account you will receive information about purchases,
          sales, orders, delivery, etc...
        </Text>
      </Box>
    </Box>
  );
}
