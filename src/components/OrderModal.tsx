import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cart/cartSlice';
type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
};
export default function OrderModal({ isOpen, onClose }: any) {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [firstName, setName] = useState('');
  const [phone, setPhone] = useState('');
  const onClickHandler = () => {
    dispatch(clearCart());
    toast({
      title: `Thank's for your order, ${firstName}! Our manager will call you back within an hour`,
      position: 'top',
      status: 'success',
      isClosable: true,
    });
    navigate('/');
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please, fill out the form to place an order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="David"
                value={firstName}
                borderColor={errors.firstName?.message ? 'red' : 'gray'}
                focusBorderColor="gray"
                {...register('firstName', {
                  onChange: event => setName(event.target.value),
                  required: 'Name is required',
                  minLength: 2,
                  maxLength: 16,
                })}
              />
              <Text color="red" fontSize="12px" mt="2px">
                {errors.firstName?.message}
              </Text>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                borderColor={errors.lastName?.message ? 'red' : 'gray'}
                focusBorderColor="gray"
                placeholder="Smith"
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: 2,
                  maxLength: 16,
                })}
              />
              <Text color="red" fontSize="12px" mt="2px">
                {errors.lastName?.message}
              </Text>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone number</FormLabel>
              <Input
                value={phone}
                borderColor={errors.phone?.message ? 'red' : 'gray'}
                focusBorderColor="gray"
                placeholder="1111111111"
                {...register('phone', {
                  onChange: event => setPhone(event.target.value),
                  required: 'Phone is required',
                  minLength: 10,
                  maxLength: 10,
                })}
              />
              <Text color="red" fontSize="12px" mt="2px">
                {errors.phone?.message}
              </Text>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Box
              as="button"
              disabled={
                Object.keys(errors).length !== 0 ||
                firstName === '' ||
                phone === ''
              }
              _disabled={{ bgColor: 'red.200', cursor: 'not-allowed' }}
              bgColor="accent"
              h="40px"
              w="80px"
              borderRadius="lg"
              fontWeight="500"
              type="button"
              mr={3}
              color="white"
              onClick={onClickHandler}
            >
              Send
            </Box>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
