// react
import React from 'react';

// third party components
import { Box } from '@chakra-ui/layout';

const CustomErrorMessage: React.FC = ({ children }) => (
  <Box className="custom-error-message" mt="1rem" color="red.500">
    {children}
  </Box>
);
export default CustomErrorMessage;
