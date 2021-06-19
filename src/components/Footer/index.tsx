// react
import React from 'react';

// third party components
import { Box, Link } from '@chakra-ui/layout';

const Footer = () => (
  <Box
    as="footer"
    h={{ base: '5rem', xl: '5vh' }}
    textAlign="center"
    fontSize="md"
  >
    <Link>Terms of use</Link>. <Link>Privacy policy</Link>
  </Box>
);

export default Footer;
