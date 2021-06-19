// react
import React from 'react';

// third party components
import { Box } from '@chakra-ui/react';

// images
import { ReactComponent as LoginFrontImage } from 'svg/login-front-image.svg';
import LoginRearImage from 'svg/login-rear-image.svg';

const LoginBanner = () => {
  return (
    <Box pos="relative" w="50%" ml="auto" d={{ base: 'none', xl: 'block' }}>
      <Box pos="absolute" right="0" top="14rem" width="55rem" zIndex={100}>
        <LoginFrontImage />
      </Box>
      <Box
        pos="absolute"
        right="0"
        top="0"
        w="35rem"
        h="35rem"
        p="3rem 5rem"
        bg={`url(${LoginRearImage}) no-repeat center`}
        bgSize="cover"
        color="#fff"
        fontSize="sm"
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
