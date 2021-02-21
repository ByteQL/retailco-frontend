// React
import React from 'react';

// third party libraries
import { Link as RouterLink } from 'react-router-dom';

// third party components
import { Box, Center, Link, Text } from '@chakra-ui/react';

// images
import SideBannerImage from 'svg/side-banner-image.svg';
import LogoWithName from 'components/LogoWithName';
import routePaths from 'utils/routePaths';

const SideBanner = () => (
  <Box
    minH={'100vh'}
    w={{ base: 0, xl: '23%' }}
    bg={`linear-gradient(to bottom, #F2BC8D ,#F1984B)`}
    p="3rem 0"
  >
    <Box
      h="80%"
      pos="relative"
      bgImg={`url(${SideBannerImage})`}
      overflow="hidden"
      bgSize="120% 92%"
      bgRepeat="no-repeat"
      bgPos="center"
    >
      <Center>
        <LogoWithName />
      </Center>

      <Text size="sm" pos="absolute" w="full" bottom="0" textAlign="center">
        Already on retailco,{' '}
        <Link as={RouterLink} color="brand.primary" to={routePaths.login}>
          <Box as="strong">Sign in</Box>
        </Link>
      </Text>
    </Box>
  </Box>
);
export default SideBanner;
