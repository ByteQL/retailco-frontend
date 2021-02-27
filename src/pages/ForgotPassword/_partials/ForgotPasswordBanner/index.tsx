// react
import React from 'react';

// third party components
import { Box, Image } from '@chakra-ui/react';

// images
import ForgotPasswordRearImage from 'svg/login-rear-image.svg';

const ForgotPasswordBanner = () => {
  return (
    <Box pos="relative" w="30%" ml="auto" d={{ base: 'none', xl: 'block' }}>
      <Box
        pos="absolute"
        right="0"
        top="0"
        w="35rem"
        h="35rem"
        p="3rem 5rem"
        bg={`url(${ForgotPasswordRearImage}) no-repeat center`}
        bgSize="cover"
        color="#fff"
        zIndex="-1"
        fontSize="sm"
      >
        <Box as="p">
          Ensure that you provide the email you registered with. You will
          receive a password reset link.
        </Box>
        <Box mt="1.6rem" w="12rem" h="12rem">
          <Image src="/img/key.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPasswordBanner;
