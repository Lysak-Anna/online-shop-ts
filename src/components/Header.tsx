import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getProductFromState } from '../redux/cart/selectors';
import {
  ProductAmount,
  StyledCart,
  StyledNavLink,
  StyledUser,
} from './../Components.styled';

export default function Header() {
  const cart = useSelector(getProductFromState);
  return (
    <>
      <Flex
        p="4"
        as="header"
        minWidth="max-content"
        alignItems="center"
        gap="6"
        bgColor="black"
        color="white"
      >
        <Box>
          <StyledNavLink to="/">
            <Text as="b" fontSize="20px" mr={6}>
              Home
            </Text>
          </StyledNavLink>
          <StyledNavLink to={'/login'}>
            <Text as="b" fontSize="20px" mr={6}>
              Sign In
            </Text>
          </StyledNavLink>
          <StyledNavLink to={'/register'}>
            <Text as="b" fontSize="20px">
              Sign Up
            </Text>
          </StyledNavLink>
        </Box>
        <Spacer />
        <StyledNavLink to="/account">
          <StyledUser />
        </StyledNavLink>
        <StyledNavLink to="/cart">
          <Box position="relative">
            <StyledCart />
            {cart.length > 0 && <ProductAmount>{cart.length}</ProductAmount>}
          </Box>
        </StyledNavLink>
      </Flex>
      <Outlet />
    </>
  );
}
