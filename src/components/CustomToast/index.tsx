import React from 'react';

// third party libraries
import { Box, BoxProps } from '@chakra-ui/react';

const CustomToast: React.FC<BoxProps> = ({ children }) => (
  <Box
    bg="green.toast"
    color="#fff"
    borderRadius="1rem 1rem 0 0"
    p="1.5rem 2rem"
    textAlign="center"
    w={{ base: '90vw', lg: '80vw' }}
    m="0 auto"
    fontSize="1.4rem"
  >
    {children}
  </Box>
);

export default CustomToast;
