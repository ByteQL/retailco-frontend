// react
import React from 'react';

// third party components
import { Box, HStack, Link } from '@chakra-ui/react';
import { History } from 'history';

// components
import LoginForm from './_partials/LoginForm';
import LoginBanner from './_partials/LoginBanner';

interface Props {
  history: History;
}
const Login: React.FC<Props> = ({ history }) => {
  return (
    <Box p="100px">
      <HStack>
        <LoginForm history={history} />
        <LoginBanner />
      </HStack>
      <Box as="footer" mt="70px" textAlign="center">
        <Link>Terms of use</Link>. <Link>Privacy policy</Link>
      </Box>
    </Box>
  );
};

export default Login;
