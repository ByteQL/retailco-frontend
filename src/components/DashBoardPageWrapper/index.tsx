// react
import React, { useEffect } from 'react';

// third party components
import { Box, Flex } from '@chakra-ui/react';
import SideMenu from 'components/SideMenu';

import DashboardPageWrapperHeader from './_partials/DashboardPageWrapperHeader';
import { connect } from 'react-redux';
import { AppState } from 'redux/store';
import { History } from 'history';

interface Props {
  isAuthenticated: any;
  history: History;
}

const DashboardPageWrapper: React.FC<Props> = ({
  isAuthenticated,
  history,
  children,
}) => {
  useEffect(() => {
    // if (!isAuthenticated) history.push('/');
  }, []);
  return (
    <Box className="dashboards-wrapper" bg="blue.100" h="100%">
      <Flex>
        <SideMenu />
        <Box
          p={{ base: '2rem', xl: '5rem' }}
          flex="1 1 0%"
          ml={{ xl: '25.5rem' }}
          minH="100vh"
        >
          <DashboardPageWrapperHeader />
          <Box as="main" p="5rem 0">
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(DashboardPageWrapper);
