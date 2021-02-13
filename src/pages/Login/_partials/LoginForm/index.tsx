// react
import React, { useState } from 'react';

// third party libraries
import { Link as RouterLink } from 'react-router-dom';

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
import api from 'api';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api.auth.login({ email, password });
  };
  return (
    <Box>
      <LogoWithName />
      <Box>
        <Heading as="h1" size="xl" lineHeight="xl" mt="20px">
          Welcome
        </Heading>
        <Heading size="sm">please enter you login details</Heading>
      </Box>
      <Box as="form" mt="56px" w="470px" onSubmit={handleSubmit}>
        <VStack spacing="30px">
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
        <Box w="288px" mt="86px" textAlign="center">
          <Button type="submit" w="100%" variant="solid">
            Login
          </Button>
        </Box>
        <Box mt="20px">
          <Link>Forgot Password?</Link>
        </Box>
        <Box mt="136px">
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

export default LoginForm;
