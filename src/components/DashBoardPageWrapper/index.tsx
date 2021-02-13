// react
import React from 'react';

// third party components
import { Box, Flex } from '@chakra-ui/react';
import SideMenu from 'components/SideMenu';

import DashboardPageWrapperHeader from './_partials/DashboardPageWrapperHeader';

const DashboardPageWrapper: React.FC = ({ children }) => {
  return (
    <Box bg="blue.100" width="100%">
      <Flex>
        <SideMenu />
        <Box p="50px" flex="1 1 0%" minH="100vh">
          <DashboardPageWrapperHeader />
          <Box as="main" p="50px 0px">
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardPageWrapper;