import * as React from 'react';

// third party libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// third party components
import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';

// styles
import './App.scss';

// components
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';

// theme
import theme from 'theme';
import routePaths from 'utils/routePaths';
import DashboardPageWrapper from 'components/DashBoardPageWrapper';

// UI components
import Dashboard from 'pages/Dashboard';
import Inventory from 'pages/Inventory';

// redux
import store from 'redux/store';
import { setLoggedInUser } from 'redux/actions/auth';

const dashboardPages = [
  { Component: Dashboard, path: routePaths.dashBoard },
  { Component: Inventory, path: routePaths.inventory },
];

let userAuthDetails: any = localStorage.getItem('userAuthDetails');
userAuthDetails = JSON.parse(userAuthDetails);
store.dispatch(setLoggedInUser(userAuthDetails));

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        <Box w="100vw" h={{ base: undefined, xl: '100vh' }}>
          <Box>
            <Router>
              <Switch>
                <Route exact path={routePaths.signUp} component={Signup} />
                <Route
                  exact
                  path={routePaths.forgotPassword}
                  component={ForgotPassword}
                />
                {dashboardPages.map(({ path, Component }, i) => (
                  <Route
                    key={i}
                    exact
                    path={path}
                    render={(props) => (
                      <DashboardPageWrapper {...props}>
                        <Component />
                      </DashboardPageWrapper>
                    )}
                  />
                ))}
                <Route
                  path={routePaths.login}
                  render={(props) => <Login {...props} />}
                />
              </Switch>
            </Router>
          </Box>
        </Box>
      </Provider>
    </ChakraProvider>
  );
};
