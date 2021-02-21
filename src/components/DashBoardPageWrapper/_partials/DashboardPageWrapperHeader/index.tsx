// react
import React, { useState } from 'react';

// third party libraries
import dayjs from 'dayjs';
import { Link as RouterLink } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { logoutUser } from 'redux/actions/auth';

// third party components
import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react';
import IconWrapper from '../IconWarapper';
import { MdPersonOutline } from 'react-icons/md';
import BaseMenu from 'components/BaseMenu';

interface Props {
  logoutUser: () => any;
}
const DashboardPageWrapperHeader: React.FC<Props> = ({ logoutUser }) => {
  const [store, setStore] = useState('0');

  return (
    <Box>
      <Flex spacing="5rem" alignItems="flex-end" justifyContent="space-between">
        <HStack spacing="5rem">
          <Box>
            <Box>{dayjs().format('DD MMMM, YYYY')}</Box>
            <BaseMenu
              value={store}
              onChange={setStore}
              placeholder="Select store"
              options={[
                { label: 'Ibafo Store', value: '0' },
                { label: 'Lekki Store', value: '1' },
              ]}
            />
          </Box>

          <Button size="sm" variant="black">
            Add Store
          </Button>
        </HStack>
        <HStack>
          <Link as={RouterLink} to="/" onClick={(_) => logoutUser()}>
            <IconWrapper marginLeft="auto">
              <MdPersonOutline size="1.8rem" />
            </IconWrapper>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default connect(null, { logoutUser })(DashboardPageWrapperHeader);
