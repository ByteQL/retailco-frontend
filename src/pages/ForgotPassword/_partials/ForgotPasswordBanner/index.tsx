// react
import React from 'react';

// third party components
import { Box, Image } from '@chakra-ui/react';

// images
import { ReactComponent as ForgotPasswordFrontImage } from 'svg/login-front-image.svg';
import ForgotPasswordRearImage from 'svg/login-rear-image.svg';

const ForgotPasswordBanner = () => {
  return (
    <Box>
      <Box
        pos="absolute"
        right="0"
        top="0"
        w="43.4rem"
        h="47rem"
        p="5rem 8rem"
        bg={`url(${ForgotPasswordRearImage}) no-repeat center`}
        bgSize="cover"
        color="#fff"
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
