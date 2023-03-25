import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { StyledCart, StyledUser } from './../Components.styled';

export default function Header() {
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
          <NavLink to="/">
            <Text as="b" fontSize="20px">
              Home
            </Text>
          </NavLink>
        </Box>
        <Spacer />
        <Link to="/account">
          <StyledUser />
        </Link>
        <Link to="/cart">
          <StyledCart />
        </Link>
      </Flex>
      <Outlet />
    </>
  );
}
