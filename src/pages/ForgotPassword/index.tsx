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
    <Box p="10rem">
      <FrogotPasswordBanner />
      <Center w="100%">
        <FrogotPasswordForm />
      </Center>
      <Footer />
    </Box>
  );
};

export default ForgotPassword;
