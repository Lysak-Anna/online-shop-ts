import {
  Box,
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';

export default function PriceRange({ range, setRange, onClick }: any) {
  // const onClickHandler = () => {
  //   const filterPrice = products.filter(
  //     (product: { price: number }) =>
  //       product.price >= value[0] && product.price <= value[1]
  //   );
  //   setProducts(filterPrice);
  // };
  return (
    <Box display="flex">
      <Box
        borderColor="accent"
        borderWidth="1px"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pl="4"
        pr="4"
        h="40px"
        mr="4"
      >
        <RangeSlider
          w="360px"
          mr="4"
          defaultValue={range}
          min={10}
          max={2000}
          step={10}
          onChangeEnd={val => setRange(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="accent" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={5} index={0} />
          <RangeSliderThumb boxSize={5} index={1} />
        </RangeSlider>

        <Text mr="2">Price: </Text>
        <Box display="flex">
          <Text mr="1">{range[0]}$</Text>-<Text ml="1">{range[1]}$</Text>
        </Box>
      </Box>
      <Button
        bgColor="accent"
        color="white"
        variant="solid"
        _hover={{ boxShadow: '2xl' }}
        onClick={onClick}
      >
        Ok
      </Button>
    </Box>
  );
}
