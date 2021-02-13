// react
import React from 'react';

// third party components
import { Box, Center, HStack, Link } from '@chakra-ui/react';

// components
import FrogotPasswordForm from './_partials/ForgotPasswordForm';
import FrogotPasswordBanner from './_partials/ForgotPasswordBanner';

const FrogotPassword: React.FC = ({}) => {
  return (
    <Box p="100px">
      <FrogotPasswordBanner />
      <Center w="100%">
        <FrogotPasswordForm />
      </Center>
      <Box as="footer" mt="70px" textAlign="center">
        <Link>Terms of use</Link>. <Link>Privacy policy</Link>
      </Box>
    </Box>
  );
};

export default FrogotPassword;
