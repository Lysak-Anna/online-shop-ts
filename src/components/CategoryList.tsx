import { Select } from '@chakra-ui/react';
export default function CategoryList() {
  const onChangeHandler = () => {};
  return (
    <Select onChange={onChangeHandler} bg="glitter" borderColor="glitter">
      <option value="all">Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's clothing</option>
      <option value="women's clothing">Women's clothing</option>
    </Select>
  );
}
