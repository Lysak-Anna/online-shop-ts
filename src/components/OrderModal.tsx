import {
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
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cart/cartSlice';

export default function OrderModal({ isOpen, onClose }: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const onClickHandler = () => {
    dispatch(clearCart());
    toast({
      title: `Your order is being processed... Our manager will call you back within an hour`,
      position: 'top',
      status: 'success',
      isClosable: true,
    });
    navigate('/');
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please, fill out the form to place an order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input variant="flushed" ref={initialRef} placeholder="David" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Smith" variant="flushed" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone number</FormLabel>
              <Input placeholder="1111111111" variant="flushed" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="example@mail.xxx"
                type="email"
                variant="flushed"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="accent"
              mr={3}
              color="white"
              onClick={onClickHandler}
            >
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
