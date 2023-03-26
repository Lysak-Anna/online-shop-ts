import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase/firebase';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user/userSlice';
import { StyledGoogle } from '../Components.styled';
import { useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

type Inputs = {
  email: string;
  password: string;
};
export default function Form({ title, handleClick }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
  });
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then(({ user }: any) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      )
      .catch((error: any) =>
        toast({
          position: 'top',
          title: 'Something went wrong... Please, try to sign in with email',
          status: 'error',
          isClosable: true,
        })
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  const isShowPassword = () => setShow(!show);
  return (
    <Box
      borderRadius="lg"
      borderWidth="1px"
      p="4"
      maxW="400px"
      mb={3}
      borderColor="gray"
    >
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter email"
          type="email"
          borderColor={errors.email?.message ? 'red' : 'gray'}
          focusBorderColor="gray"
          value={email}
          {...register('email', {
            onChange: event => setEmail(event.target.value),
            required: 'Email is required',
            pattern: {
              value: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email',
            },
          })}
        />
        <Text color="red" fontSize="12px" mt="2px">
          {errors.email?.message}
        </Text>
      </FormControl>

      <FormControl mt={4} mb={4}>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            placeholder="Enter password"
            type={show ? 'text' : 'password'}
            borderColor={errors.password?.message ? 'red' : 'gray'}
            focusBorderColor="gray"
            value={password}
            {...register('password', {
              onChange: event => setPassword(event.target.value),
              required: 'Password is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message:
                  '6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter',
              },
            })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={isShowPassword}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text color="red" fontSize="12px" mt="2px">
          {errors.password?.message}
        </Text>
      </FormControl>
      <Box
        as="button"
        disabled={
          isLoading ||
          Object.keys(errors).length !== 0 ||
          email === '' ||
          password === ''
        }
        _disabled={{ bgColor: 'red.200', cursor: 'not-allowed' }}
        display="block"
        h="40px"
        w="368px"
        borderRadius="lg"
        mb={4}
        bgColor="accent"
        color="white"
        fontWeight="500"
        type="button"
        onClick={() => handleClick(email, password, setEmail, setPassword)}
      >
        {title}
      </Box>
      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          border: '1px',
          width: '44%',
          display: 'inline-block',
          mr: '3',
          color: 'gray',
        }}
        _after={{
          content: '""',
          border: '1px',
          width: '44%',
          display: 'inline-block',
          ml: '3',
          color: 'gray',
        }}
      >
        or
      </Text>

      <Button
        type="button"
        onClick={() => signInWithGoogle()}
        w="368px"
        borderColor="accent"
        borderWidth="2px"
        mt={4}
      >
        <StyledGoogle />
        <Text mb="2px">Continue with Google</Text>
      </Button>
    </Box>
  );
}
