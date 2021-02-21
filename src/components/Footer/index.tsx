// react
import React from 'react';

// third party components
import { Box, Link } from '@chakra-ui/layout';

const Footer = () => (
  <Box as="footer" mt="5rem" textAlign="center" fontSize="md">
    <Link>Terms of use</Link>. <Link>Privacy policy</Link>
  </Box>
);

export default Footer;
