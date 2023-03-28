import { StarIcon } from '@chakra-ui/icons';
import { Box, GridItem, Image, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { IProduct } from '../interfaces/product';

interface ProductCardProps {
  product: IProduct;
}
export default function ProductCard({ product }: ProductCardProps) {
  const location = useLocation();

  return (
    <NavLink to={`/product/${product.id}`} state={{ from: location }}>
      <GridItem
        w="100%"
        as="li"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="gray"
        overflow="hidden"
        transition="transform .35s ease-in-out"
        _hover={{
          transform: 'scale(1.1, 1.1)',
          transition: 'transform .35s ease-in-out',
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          objectFit="contain"
          w="100%"
          h="200px"
        />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            <Text
              _hover={{ color: 'accent', textDecor: 'underline' }}
              textTransform="capitalize"
            >
              {product.title}
            </Text>
          </Box>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {product.price}$
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < product.rating ? '#ffdf00' : 'gray'}
                />
              ))}
            <Text ml="8px">{product.rating}</Text>
          </Box>
        </Box>
      </GridItem>
    </NavLink>
  );
}
