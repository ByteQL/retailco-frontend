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
import AddProductManualForm from './_partials/AddProductManualForm';

const AddProductModal: React.FC<ModalContentProps & UseModalProps> = ({
  isOpen,
  onClose,
}) => {
  interface ProductUnit {
    value?: string;
    cost_price?: string;
    selling_price?: string;
    quantity?: string;
  }
  const [selectedTab, setSelectedTab] = useState(0);
  const [productUnits, setProductUnits] = useState<Array<ProductUnit>>([]);

  const ModalHeader = () => (
    <Box>
      <Flex fontSize="1.8rem">
        <FaArrowLeft
          size="1.4rem"
          style={{ height: '2.7rem', marginRight: '2rem' }}
        />
        Add Product
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
      <Button
        variant="solid"
        ml="auto"
        type="submit"
        form="add-product-form--manual"
      >
        Add product
      </Button>
    </Box>
  );
  return (
    <ModalComponent
      title={<ModalHeader />}
      modalHeaderProps={{ pb: 0 }}
      isOpen={isOpen}
      onClose={onClose}
      width="112.6rem"
      footer={<ModalFooter />}
    >
      <Tabs index={selectedTab}>
        <TabPanels>
          <TabPanel>
            <AddProductManualForm
              productUnits={productUnits}
              setProductUnits={setProductUnits}
            />
          </TabPanel>
          <TabPanel>Templates</TabPanel>
        </TabPanels>
      </Tabs>
    </ModalComponent>
  );
};
export default AddProductModal;
