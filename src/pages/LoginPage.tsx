import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/user/userSlice';
import { Container, Heading, Text, useToast } from '@chakra-ui/react';
import Form from '../components/Form';
import { StyledLink } from '../Components.styled';

export default function LoginPage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const handleLogin = (
    email: string,
    password: string,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void
  ) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }: any) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      )
      .catch(error => {
        toast({
          position: 'top',
          title: 'Wrong email or password',
          status: 'error',
          isClosable: true,
        });
      })
      .finally(() => {
        setEmail('');
        setPassword('');
      });
  };
  return (
    <Container p="4">
      <Heading mb={4}>Sign in</Heading>
      <Form title="Sign in" handleClick={handleLogin} />
      <Text>
        <Text as="span" mr="8px">
          Don't have an account?
        </Text>
        <StyledLink to="/register">Create account</StyledLink>
      </Text>
    </Container>
  );
}
