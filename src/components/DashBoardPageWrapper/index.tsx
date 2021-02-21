// react
import React from 'react';

// third party components
import { Box, Flex } from '@chakra-ui/react';
import SideMenu from 'components/SideMenu';

import DashboardPageWrapperHeader from './_partials/DashboardPageWrapperHeader';

const DashboardPageWrapper: React.FC = ({ children }) => {
  return (
    <Box bg="blue.100" w="full">
      <Flex>
        <SideMenu />
        <Box p="5rem" w="80%" flex="1 1 0%" h="100%">
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
