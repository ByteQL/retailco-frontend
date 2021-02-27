// react
import React from 'react';

// third party components
import { Box, Flex } from '@chakra-ui/react';
import SideMenu from 'components/SideMenu';

import DashboardPageWrapperHeader from './_partials/DashboardPageWrapperHeader';

const DashboardPageWrapper: React.FC = ({ children }) => {
  return (
    <Box className="dashboards-wrapper" bg="blue.100" h="100vh" minH="100vh">
      <Flex w="100vw">
        <SideMenu />
        <Box p="5rem" flex="1 1 0%" ml={{ xl: '25.5rem' }}>
          <DashboardPageWrapperHeader />
          <Box as="main" p="5rem 0">
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardPageWrapper;
