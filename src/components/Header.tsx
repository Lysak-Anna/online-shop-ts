import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Flex
        as="header"
        minWidth="max-content"
        alignItems="center"
        gap="2"
        borderBottomWidth="1px"
        borderBottomColor="pink"
      >
        <Box p="3">
          <NavLink to="/">
            <Text as="b" fontSize="20px" color="blue">
              Home
            </Text>
          </NavLink>
        </Box>
        <Spacer />
      </Flex>
      <Outlet />
    </>
  );
}
