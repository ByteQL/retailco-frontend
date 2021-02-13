// react
import React, { useState } from 'react';

// third party components
import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import BaseMenu from 'components/BaseMenu';
import dayjs from 'dayjs';
import IconWrapper from '../IconWarapper';
import { MdPersonOutline } from 'react-icons/md';

const DashboardPageWrapperHeader: React.FC = () => {
  const [store, setStore] = useState('0');

  return (
    <Box>
      <Flex spacing="55px" alignItems="flex-end" justifyContent="space-between">
        <HStack spacing="55px">
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
          <IconWrapper marginLeft="auto">
            <MdPersonOutline size="18px" />
          </IconWrapper>
        </HStack>
      </Flex>
    </Box>
  );
};
export default DashboardPageWrapperHeader;
