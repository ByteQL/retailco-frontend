// react
import React from 'react';

// third party components
import { Box, HStack, Link } from '@chakra-ui/react';

// components
import LoginForm from './_partials/LoginForm';
import LoginBanner from './_partials/LoginBanner';

const Login: React.FC = ({}) => {
  return (
    <Box p="100px">
      <HStack>
        <LoginForm />
        <LoginBanner />
      </HStack>
      <Box as="footer" mt="70px" textAlign="center">
        <Link>Terms of use</Link>. <Link>Privacy policy</Link>
      </Box>
    </Box>
  );
};

export default Login;
