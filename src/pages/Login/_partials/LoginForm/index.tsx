// react
import React, { useEffect, useState } from 'react';

// third party libraries
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { History } from 'history';

// redux
import { login } from 'redux/actions/auth';

// third party components
import {
  Box,
  Heading,
  FormControl,
  VStack,
  FormLabel,
  Button,
  Link,
  Center,
  Flex,
  Stack,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

// components
import LogoWithName from 'components/LogoWithName';
import routePaths from 'utils/routePaths';
import { AppState } from 'redux/store';
import CustomErrorMessage from 'components/CustomErrorMessage';

// utils
interface Props {
  login: (creds: any) => Promise<any>;
  history: History;
  isAuthenticated: boolean;
}

const LoginForm: React.FC<Props> = ({ login, history, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    isAuthenticated && history.push(routePaths.inventory);
  }, [isAuthenticated]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    login({ email, password })
      .then((res) => {
        if (res === 'success') {
          setIsLoggingIn(false);
          history.push(routePaths.inventory);
        }
      })
      .catch((err) => {
        setLoginError(
          err
            ? err.status === 404
              ? 'Incorrect email/password'
              : err.message
            : 'Something went wrong there. Please try again',
        );

        setIsLoggingIn(false);
      });
  };

  return (
    <Flex
      flexDirection="column"
      p={['5rem 2rem', '5rem', '5vh 10rem']}
      w={{ base: '80%', xl: '50%' }}
      alignItems={{ base: 'center', xl: 'flex-start' }}
      m="auto"
      textAlign={{ base: 'center', xl: 'left' }}
      justifyContent="center"
    >
      <LogoWithName />
      <Box>
        <Heading as="h2" fontSize={{ base: 'lg', xl: 'xl' }} m="1rem 0">
          Welcome back
        </Heading>
        <Heading size="sm" fontSize={{ base: 'xs', lg: 'sm' }}>
          please enter you login details
        </Heading>
      </Box>
      <Box
        as="form"
        mt="6vh"
        w={{ base: '100%', xl: '47rem' }}
        onSubmit={handleSubmit}
      >
        <Stack spacing="1.8rem">
          <FormControl id="email">
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Stack>
        <Box w={{ base: '100%', xl: '28rem' }} mt="8vh">
          <FormControl id="submit">
            <Button
              type="submit"
              variant="solid"
              isLoading={isLoggingIn}
              loadingText="Please wait..."
              w="full"
            >
              Login
            </Button>
            {loginError && (
              <CustomErrorMessage>{loginError}</CustomErrorMessage>
            )}
          </FormControl>
          <Center mt="2rem" fontSize="md">
            <Link as={RouterLink} to={routePaths.forgotPassword}>
              Forgot Password?
            </Link>
          </Center>
          <Box mt="8vh">
            <Box as="p">
              New to RetailCo?{' '}
              <Link as={RouterLink} to={routePaths.signUp} color="#FF7700">
                Sign up
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
