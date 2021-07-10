// react
import React from 'react';

// third party components
import { Box, BoxProps } from '@chakra-ui/react';

const CustomCard: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Box
    className="custom-card"
    borderRadius="2rem"
    boxShadow="0.5px 0.5px 99px #00000008;"
    bg="#fff"
    p="2rem"
    {...rest}
  >
    {children}
  </Box>
);

export default CustomCard;
