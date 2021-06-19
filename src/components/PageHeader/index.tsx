import React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

const PageHeader: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Box mb="5rem" {...rest}>
    {children}
  </Box>
);
export default PageHeader;
