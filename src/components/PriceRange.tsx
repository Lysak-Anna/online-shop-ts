import {
  Box,
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function PriceRange({ products, setProducts }: any) {
  const [value, setValue] = useState([10, 2000]);
  const onClickHandler = () => {
    const filterPrice = products.filter(
      (product: { price: number }) =>
        product.price >= value[0] && product.price <= value[1]
    );
    setProducts(filterPrice);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="40px"
    >
      <RangeSlider
        w="360px"
        mr="4"
        defaultValue={[10, 2000]}
        min={10}
        max={2000}
        step={10}
        onChangeEnd={val => setValue(val)}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="accent" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={5} index={0} />
        <RangeSliderThumb boxSize={5} index={1} />
      </RangeSlider>
      <Button
        bgColor="accent"
        color="white"
        variant="solid"
        mr="2"
        onClick={onClickHandler}
      >
        Ok
      </Button>

      <Text mr="2">Price: </Text>
      <Box display="flex">
        <Text mr="1">{value[0]}$</Text>-<Text ml="1">{value[1]}$</Text>
      </Box>
    </Box>
  );
}
