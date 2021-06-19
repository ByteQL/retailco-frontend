// react
import React from 'react';

// third party components
import { Box, Center } from '@chakra-ui/react';

// components
import FrogotPasswordForm from './_partials/ForgotPasswordForm';
import FrogotPasswordBanner from './_partials/ForgotPasswordBanner';
import Footer from 'components/Footer';

const ForgotPassword: React.FC = () => {
  return (
    <Box>
      <FrogotPasswordBanner />
      <Center
        p="10rem"
        w={{ base: 'full' }}
        minH="95vh"
        justifyContent="center"
      >
        <FrogotPasswordForm />
      </Center>
      <Footer />
    </Box>
  );
};

export default ForgotPassword;
