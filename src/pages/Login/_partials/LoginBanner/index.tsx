// react
import React from 'react';

// third party components
import { Box } from '@chakra-ui/react';

// images
import { ReactComponent as LoginFrontImage } from 'svg/login-front-image.svg';
import LoginRearImage from 'svg/login-rear-image.svg';

const LoginBanner = () => {
  return (
    <Box>
      <Box pos="absolute" right="0" top="190px" width="660px">
        <LoginFrontImage />
      </Box>
      <Box
        pos="absolute"
        right="0"
        top="0"
        w="434px"
        h="470px"
        p="50px 80px"
        bg={`url(${LoginRearImage}) no-repeat center`}
        bgSize="cover"
        color="#fff"
        zIndex="-1"
      >
        <Box as="p">
          Manage stock items, optimize inventory, know your best sellers, make
          smart decisions.
        </Box>
      </Box>
    </Box>
  );
};

export default LoginBanner;
