// react
import React from 'react';

// third party components
import { Box, BoxProps, Center, Circle } from '@chakra-ui/react';

const IconWrapper: React.FC<BoxProps> = ({ children }) => (
  <Box
    width="4.3rem"
    height="4.5rem"
    background="#FFFFFF 0% 0% no-repeat padding-box"
    boxShadow="0 .1rem .1rem #00000029"
    borderRadius="1.5rem"
    d="flex"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);

export default IconWrapper;
