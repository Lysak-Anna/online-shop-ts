import Form from '../components/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user/userSlice';
import { Container, Heading, Text, useToast } from '@chakra-ui/react';
import { StyledLink } from '../Components.styled';

export default function SignUpPage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const handleSignUp = (
    email: string,
    password: string,
    setEmail: (email: string) => void,
    setPassword: (email: string) => void
  ) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      <Heading mb={4}>Sign up</Heading>
      <Form title="Sign up" handleClick={handleSignUp} />
      <Text>
        <Text as="span" mr="8px">
          Already have an account?
        </Text>
        <StyledLink to="/login">Sign in</StyledLink>
      </Text>
    </Container>
  );
}
