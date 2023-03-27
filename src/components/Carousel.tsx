import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { CarouselComponentProps } from '../interfaces/product';

export default function CarouselComponent(props: CarouselComponentProps) {
  const { product } = props;
  return (
    <Box maxW="50%" p="4" mr="5">
      <Carousel autoPlay>
        {product?.images.map((img, index) => (
          <Box as="div" key={index}>
            <img
              src={img}
              alt={img}
              style={{
                maxWidth: '400px',
                maxHeight: '400px',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
