import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import PriceRange from '../components/PriceRange';
import { useQuery } from 'react-query';
import { Box, Button, Container, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  getProducts,
  getAllProducts,
  getProductsByCategory,
} from '../api/productsApi';
import { IProduct } from '../interfaces/product';
import { useSelector } from 'react-redux';
import { getCategoryFromState } from '../redux/products/selectors';
import { getDataFromLocalStorage } from './../helpers/getDataFromLocalStorage';

export default function HomePage() {
  const selectedCategory = useSelector(getCategoryFromState);
  const [products, setProducts] = useState<IProduct[]>(
    getDataFromLocalStorage('products') ?? []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [range, setRange] = useState(
    getDataFromLocalStorage('range') ?? [10, 2000]
  );
  const [filter, setFilter] = useState(getDataFromLocalStorage('filter') ?? '');
  const getProductsList = async (category: string) => {
    if (category === 'all') {
      const data = await getProducts();
      setProducts(data.products);
      return;
    }
    const data = await getProductsByCategory(selectedCategory);
    setProducts(data.products);
  };

  const { isError } = useQuery(['products', selectedCategory], async () => {
    if (products.length === 0) {
      await getProductsList(selectedCategory);
    }
  });

  const onClickHandler = async () => {
    const skip = products.length;
    const limit = 20;
    setIsLoading(true);
    const data = await getAllProducts(skip, limit);
    setProducts(prevState => [...prevState, ...data.products]);
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('filter', JSON.stringify(filter));
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('range', JSON.stringify(range));
    };
  }, [filter, products, range]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    switch (event.target.value) {
      case 'rating':
        const sortByRating = [...products].sort(
          (firstProd, secondProd) => secondProd.rating - firstProd.rating
        );
        setProducts(sortByRating);
        break;
      case 'highest price':
        const sortByHighestPrice = [...products].sort(
          (firstProd, secondProd) => secondProd.price - firstProd.price
        );
        setProducts(sortByHighestPrice);
        break;
      case 'lowest price':
        const sortByLowestPrice = [...products].sort(
          (firstProd, secondProd) => firstProd.price - secondProd.price
        );
        setProducts(sortByLowestPrice);
        break;
      default:
        return products;
    }
  };
  const onRangeHandler = () => {};
  return (
    <Container maxW="100%" p="4">
      <Box display="flex">
        <CategoryList />
        <Select
          placeholder="Select filter"
          w="240px"
          borderColor="accent"
          focusBorderColor="accent"
          mr="4"
          value={filter}
          onChange={onChangeHandler}
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
      {products?.length > 0 && <ProductList products={products} />}
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
