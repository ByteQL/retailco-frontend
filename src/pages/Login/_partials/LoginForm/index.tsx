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
  const DashboardLoader: React.FC = () => {
    history.push(routePaths.dashBoard);
    return <></>;
  };

  if (isAuthenticated) return <DashboardLoader />;
  return (
    <Box>
      <LogoWithName />
      <Box>
        <Heading as="h1" size="xl" lineHeight="xl" mt="20px">
          Welcome
        </Heading>
        <Heading size="sm">please enter you login details</Heading>
      </Box>
      <Box as="form" mt="50px" w="470px" onSubmit={handleSubmit}>
        <VStack spacing="20px">
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
        <Box w="288px" mt="70px" textAlign="center">
          <Button
            type="submit"
            w="100%"
            variant="solid"
            isLoading={isLoggingIn}
            loadingText="Please wait..."
          >
            Login
          </Button>
        </Box>
        <Box mt="20px">
          <Link>Forgot Password?</Link>
        </Box>
        <Box mt="100px">
          <Box as="p">
            New to RetailCo?{' '}
            <Link as={RouterLink} to={routePaths.signUp} color="#FF7700">
              Sign up
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);