// react
import React, { useState } from 'react';

// third party components
import {
  Box,
  Button,
  Flex,
  ModalContentProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UseModalProps,
} from '@chakra-ui/react';
import ModalComponent from 'components/ModalComponent';
import { FaArrowLeft } from 'react-icons/fa';
import AddItemManualForm from './_partials/AddItemManualForm';

const AddItemModal: React.FC<ModalContentProps & UseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [enteredItems, setEnteredItems] = useState<Array<any>>([]);
  const ModalHeader = () => (
    <Box>
      <Flex>
        <FaArrowLeft
          size="1.4rem"
          style={{ height: '2.1rem', marginRight: '1rem' }}
        />
        Add Item
      </Flex>
      <Tabs>
        <TabList borderBottom="none">
          <Tab onClick={(_) => setSelectedTab(0)}>Add manually</Tab>
          <Tab onClick={(_) => setSelectedTab(1)}>Templates</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
  const ModalFooter = () => (
    <Box>
      <Button variant="solid" ml="auto">
        Add item
      </Button>
    </Box>
  );
  return (
    <ModalComponent
      title={<ModalHeader />}
      modalHeaderProps={{ pb: 0 }}
      isOpen={isOpen}
      onClose={onClose}
      width="110rem"
      footer={<ModalFooter />}
    >
      <Tabs index={selectedTab}>
        <TabPanels>
          <TabPanel>
            <AddItemManualForm
              enteredItems={enteredItems}
              setEnteredItems={setEnteredItems}
            />
          </TabPanel>
          <TabPanel>Templates</TabPanel>
        </TabPanels>
      </Tabs>
    </ModalComponent>
  );
};
export default AddItemModal;
