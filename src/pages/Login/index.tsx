// react
import React from 'react';

// third party components
import { Box, Flex } from '@chakra-ui/react';
import { History } from 'history';

// components
import LoginForm from './_partials/LoginForm';
import LoginBanner from './_partials/LoginBanner';
import Footer from 'components/Footer';

interface Props {
  history: History;
}
const Login: React.FC<Props> = ({ history }) => {
  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex minH={{ base: '100vh', xl: '95vh' }}>
        <LoginForm history={history} />
        <LoginBanner />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Login;
