// react
import React from 'react';

// third party components
import { Box, BoxProps, Center, Circle } from '@chakra-ui/react';

const IconWrapper: React.FC<BoxProps> = ({ children }) => (
  <Box
    width="43px"
    height="45px"
    background="#FFFFFF 0% 0% no-repeat padding-box"
    boxShadow="0px 1px 1px #00000029"
    borderRadius="15px"
    d="flex"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);

export default IconWrapper;
