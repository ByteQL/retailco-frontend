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
    <Box w="500px">
      <Center mt="240px">
        <LogoWithName />
      </Center>

      <Box>
        <Center>
          <Heading color="brand.verylightgrey" size="sm">
            Enter your email to get reset link
          </Heading>
        </Center>
      </Box>
      <Center mt="56px" w="100%">
        <FormControl id="email">
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <BaseInput type="email" name="email" />
        </FormControl>
      </Center>
      <Box mt="86px" textAlign="center">
        <Center>
          <Button type="submit" variant="solid">
            Send request
          </Button>
        </Center>

        <Center mt="20px">
          I remember now.{' '}
          <Link
            as={RouterLink}
            to={routePaths.login}
            fontWeight="bold"
            color="brand.primary"
            ml="5px"
          >
            <Box as="strong">Sign in</Box>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default LoginForm;
