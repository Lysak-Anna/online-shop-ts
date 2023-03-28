import { Box, Image, Text } from '@chakra-ui/react';
import noResult from '../images/noResult.svg';

export default function NoResult() {
  return (
    <Box p="4">
      <Text textAlign="center" mt="4">
        No products with these parameters were found
      </Text>
      <Image src={noResult} alt="Searching cat"></Image>
    </Box>
  );
}
