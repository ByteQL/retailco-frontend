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
  interface ItemUnit {
    value?: string;
    cost_price?: string;
    selling_price?: string;
    quantity?: string;
  }
  const [selectedTab, setSelectedTab] = useState(0);
  const [itemUnits, setItemUnits] = useState<Array<ItemUnit>>([]);

  const handleAddItem = () => {
    console.log(itemUnits);
  };

  const ModalHeader = () => (
    <Box>
      <Flex>
        <FaArrowLeft
          size="1.4rem"
          style={{ height: '2.1rem', marginRight: '1rem' }}
        />
        Add Item
      </Flex>
      <Tabs onChange={setSelectedTab} index={selectedTab}>
        <TabList borderBottom="none">
          <Tab>Add manually</Tab>
          <Tab>Templates</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
  const ModalFooter = () => (
    <Box>
      <Button variant="solid" ml="auto" onClick={handleAddItem}>
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
              itemUnits={itemUnits}
              setItemUnits={setItemUnits}
            />
          </TabPanel>
          <TabPanel>Templates</TabPanel>
        </TabPanels>
      </Tabs>
    </ModalComponent>
  );
};
export default AddItemModal;
