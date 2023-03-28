import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import PriceRange from '../components/PriceRange';
import NoResult from '../components/NoResult';

import { useQuery } from 'react-query';
import { Box, Button, Container, Select } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { getProducts, getAllProducts } from '../api/productsApi';
import { IProduct } from '../interfaces/product';
import { useSelector } from 'react-redux';
import { getCategoryFromState } from '../redux/products/selectors';
import { getDataFromLocalStorage } from './../helpers/getDataFromLocalStorage';

import { getFilteredProducts, setData } from './../helpers/getFilteredProducts';
import { throttle } from 'lodash';
export default function HomePage() {
  const localStorageData = getDataFromLocalStorage('products');
  const selectedCategory = useSelector(getCategoryFromState);
  const [products, setProducts] = useState<IProduct[]>(localStorageData ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [range, setRange] = useState(
    getDataFromLocalStorage('range') ?? [10, 2000]
  );
  const [filter, setFilter] = useState<string>(
    getDataFromLocalStorage('filter') ?? ''
  );
  const [position, setPosition] = useState<number[]>(
    getDataFromLocalStorage('position') ?? []
  );
  const { isError, isFetching } = useQuery('products', async () => {
    if (!localStorageData) {
      const data = await getProducts();
      setProducts(data.products);
    }
  });

  const handleScrollPosition = useCallback(
    throttle(() => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      setPosition([scrollX, scrollY]);
    }, 4000),
    []
  );
  useEffect(() => {
    window.scrollTo(position[0], position[1]);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScrollPosition);
    return () => {
      localStorage.setItem('filter', JSON.stringify(filter));
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('range', JSON.stringify(range));
      localStorage.setItem('position', JSON.stringify(position));
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, [filter, products, range, position, handleScrollPosition]);

  const onChangeCategoryHandler = (selectedCategory: string) => {
    getFilteredProducts(selectedCategory, setProducts, range, filter);
  };

  const onChangeFilterHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter(event.target.value);
    getFilteredProducts(
      selectedCategory,
      setProducts,
      range,
      event.target.value
    );
  };

  const onRangeHandler = () => {
    getFilteredProducts(selectedCategory, setProducts, range, filter);
  };

  const onClickHandler = async () => {
    const skip = products.length;
    const limit = 20;
    setIsLoading(true);
    const data = await getAllProducts(skip, limit);
    setData([...products, ...data.products], setProducts, filter, range);
    setIsLoading(false);
  };

  return (
    <Container maxW="100%" p="4">
      <Box display="flex">
        <CategoryList onChangeCategory={onChangeCategoryHandler} />
        <Select
          placeholder="Select filter"
          w="240px"
          borderColor="accent"
          focusBorderColor="accent"
          mr="4"
          value={filter}
          onChange={onChangeFilterHandler}
        >
          <option value="rating">From the highest rating</option>
          <option value="highest price">From the highest price</option>
          <option value="lowest price">From the lowest price</option>
        </Select>
        <PriceRange
          range={range}
          setRange={setRange}
          onClick={onRangeHandler}
        />
      </Box>
      {products?.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <NoResult />
      )}
      {products?.length >= 30 && products?.length < 100 && (
        <Box display="flex" justifyContent="center">
          <Button
            isLoading={isLoading}
            loadingText="Loading"
            bgColor="accent"
            color="white"
            spinnerPlacement="start"
            onClick={onClickHandler}
          >
            Load more
          </Button>
        </Box>
      )}
    </Container>
  );
}
