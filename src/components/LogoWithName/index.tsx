// react
import React from 'react';

// third party components
import { Box, Image } from '@chakra-ui/react';

// images
import Logo from 'svg/logo.svg';

const LogoWithName: React.FC = () => (
  <Box>
    <Image src="/img/logo.png" h={10} mr={4} display="inline-block" />
    &nbsp;
    <strong>RetailCo</strong>
  </Box>
);

export default LogoWithName;
