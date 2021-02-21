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
} from '@chakra-ui/react';

// components
import LogoWithName from 'components/LogoWithName';
import BaseInput from 'components/BaseInput';
import routePaths from 'utils/routePaths';
import { AppState } from 'redux/store';

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

  useEffect(() => {
    isAuthenticated && history.push(routePaths.dashBoard);
  }, [isAuthenticated]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoggingIn(true);
    login({ email, password })
      .then((res) => {
        if (res === 'success') {
          setIsLoggingIn(false);
          history.push(routePaths.dashBoard);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoggingIn(false);
      });
  };

  return (
    <Flex
      flexDirection="column"
      p={['5rem 2rem', '5rem', '7vh 10rem']}
      w={{ base: '100%', xl: '50%' }}
      alignItems={{ base: 'center', xl: 'flex-start' }}
    >
      <LogoWithName />
      <Box>
        <Heading
          as="h2"
          fontSize={{ sm: 'lg', xl: 'xl' }}
          lineHeight="xl"
          mt="1rem"
        >
          Welcome back
        </Heading>
        <Heading size="sm">please enter you login details</Heading>
      </Box>
      <Box as="form" mt="6vh" w="47rem" onSubmit={handleSubmit}>
        <VStack spacing="1.8rem">
          <FormControl id="email">
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <BaseInput
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel htmlFor="password">Password</FormLabel>
            <BaseInput
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </VStack>
        <Box w="28.8rem" mt="6vh" textAlign="center">
          <Button
            type="submit"
            w="100%"
            variant="solid"
            isLoading={isLoggingIn}
            loadingText="Please wait..."
          >
            Login
          </Button>
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
