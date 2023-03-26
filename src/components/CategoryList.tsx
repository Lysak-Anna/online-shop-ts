import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { categories } from '../data/categories';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../redux/products/productsCategoriesSlice';

export default function CategoryList() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickHandler = (category: string) => {
    dispatch(changeCategory(category));
    onClose();
  };
  return (
    <>
      <Button
        bgColor="accent"
        color="white"
        _hover={{ boxShadow: '2xl' }}
        onClick={onOpen}
        mb={4}
        mr={4}
      >
        Categories
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody paddingTop={5}>
            {categories.map((category, index) => (
              <Box key={index} cursor="pointer" _hover={{ color: 'accent' }}>
                <Text
                  fontSize={20}
                  textTransform="capitalize"
                  mt="10px"
                  onClick={() => onClickHandler(category)}
                >
                  {category}
                </Text>
                <Divider />
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
