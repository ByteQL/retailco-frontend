// React
import React from 'react';

// third party components
import { Box, Button, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import DataTable, { Column } from 'components/DataTable';
import Marker from 'components/Marker';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import formatWithCommas from 'utils/formatWithCommas';
import { RiShieldCheckFill } from 'react-icons/ri';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

interface Props {}

const Inventory: React.FC<Props> = ({}) => {
  const columns: Column[] = [
    {
      title: '',
      dataIndex: 'isLowStock',
      width: 'fit-content',
      render: (record) => record && <Marker />,
    },
    {
      title: '',
      dataIndex: 'image',
      render: (record) => (
        <Box
          w="2rem"
          h="2rem"
          bg={`url(${record})`}
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPos="center"
        />
      ),
    },
    {
      title: '',
      dataIndex: 'name',
      render: (record) => <Text as="strong">{record}</Text>,
    },
    {
      title: '',
      dataIndex: 'watch',
      render: (record) =>
        record && <RiShieldCheckFill size="1.8rem" color="#69E4A6" />,
    },
    { title: 'Item unit', dataIndex: 'unit' },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: (record) => (
        <Tag bg="rgba(105, 228, 166, 0.2)" p=".4rem 2rem">
          {formatWithCommas(record)}
        </Tag>
      ),
    },
    {
      title: 'Price per unit',
      dataIndex: 'price',
      render: (record) => formatWithCommas(record),
    },
    { title: '', render: () => <FaPencilAlt /> },
    { title: '', render: () => <AiOutlinePlusCircle /> },
    { title: '', render: () => <AiOutlineMinusCircle /> },
  ];

  const dataSource = [
    {
      isLowStock: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
      name: 'Argentine Croacker',
      watch: false,
      quantity: 500000,
      price: 15000,
      isMultipleUnit: true,
      unit: 'carton',
    },
    {
      isLowStock: false,
      image:
        'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/east_cold/American_shad_DuaneRavenArt.fw.png',
      name: 'Argentine Croacker',
      watch: true,
      unit: 'Piece',
      quantity: 500000,
      price: 15000,
    },
    {
      isLowStock: true,
      image:
        'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/east_cold/American_shad_DuaneRavenArt.fw.png',
      name: 'Argentine Croacker',
      watch: true,
      quantity: 500000,
      unit: 'Box',
      price: 15000,
    },
  ];
  return (
    <Box>
      <Flex alignItems="center">
        <Heading size="lg">Inventory</Heading>
        <Button variant="goldOutline" size="md" leftIcon={<FaPlus />} ml="5rem">
          Add New Item
        </Button>
        <Tag bg="rgba(9, 76, 141, 0.1)" p="1.5rem 2rem" m="0 auto">
          <Text size="sm">Total stock value:</Text>&nbsp;
          <Heading size="sm">
            &#x20A6;&nbsp;{formatWithCommas(999000000000)}
          </Heading>
        </Tag>
      </Flex>
      <DataTable columns={columns} dataSource={dataSource} mt="5rem" />
    </Box>
  );
};
export default Inventory;
