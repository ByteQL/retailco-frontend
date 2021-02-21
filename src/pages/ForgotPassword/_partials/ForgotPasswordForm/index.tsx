// react
import React from 'react';

// third party libraries
import { Link as RouterLink } from 'react-router-dom';

// third party components
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Link,
  Center,
} from '@chakra-ui/react';

// components
import LogoWithName from 'components/LogoWithName';
import BaseInput from 'components/BaseInput';
import routePaths from 'utils/routePaths';
const LoginForm = () => {
  return (
    <Box w="50rem">
      <Center mt="24rem">
        <LogoWithName />
      </Center>

      <Box>
        <Center>
          <Heading color="grey.verylightgrey" size="sm">
            Enter your email to get reset link
          </Heading>
        </Center>
      </Box>
      <Center mt="5.6rem" w="full">
        <FormControl id="email">
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <BaseInput type="email" name="email" />
        </FormControl>
      </Center>
      <Box mt="8.6rem" textAlign="center">
        <Center>
          <Button type="submit" variant="solid">
            Send request
          </Button>
        </Center>

        <Center mt="2rem">
          I remember now.{' '}
          <Link
            as={RouterLink}
            to={routePaths.login}
            fontWeight="bold"
            color="brand.primary"
            ml=".5rem"
          >
            <Box as="strong">Sign in</Box>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default LoginForm;
