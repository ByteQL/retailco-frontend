import React from 'react';

// third-party libraries
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';
import Marker from 'components/Marker';
import { useState } from 'react';
import formatWithCommas from 'utils/formatWithCommas';

interface Props {
  i: number;
  isMultipleUnitsChecked: boolean;
  register: any;
  setValue: any;
}

const UnitItemPriceInput: React.FC<Props> = ({
  i,
  isMultipleUnitsChecked,
  register,
  setValue,
}) => {
  const [costPriceValue, setCostPriceValue] = useState('');
  const [sellingPriceValue, setSellingPriceValue] = useState('');

  const handleCostPriceChange = (e) => {
    const formatted = formatWithCommas(e.target.value);
    setValue(`cost_price-${i}`, formatted);
    setCostPriceValue(formatted);
  };
  const handleSellingPriceChange = (e) => {
    const formatted = formatWithCommas(e.target.value);
    setValue(`selling_price-${i}`, formatted);
    setSellingPriceValue(formatted);
  };

  return (
    <Box key={i} w={{ xl: '65rem' }}>
      {isMultipleUnitsChecked && (
        <Heading as="h3" size="sm">
          <Box as="span" fontWeight={400} fontStyle="italic" fontSize="1.2rem">
            Set price, quantity and discount for this unit
          </Box>
        </Heading>
      )}
      <SimpleGrid mt="3rem" columns={3} spacing={10}>
        <FormControl id={`quantity-${i}`}>
          <FormLabel>Product Quantity</FormLabel>
          <NumberInput size="md">
            <NumberInputField
              placeholder="0"
              ref={register}
              name={`quantity-${i}`}
            />
          </NumberInput>
        </FormControl>
        <FormControl id={`cost_price-${i}`}>
          <FormLabel>
            <Flex justifyContent="space-between">
              <Box>Cost price</Box>
              <Tooltip placement="top" label="How much did you buy this item?">
                <Box variant="ghost">
                  <Marker color="brand.primary">i</Marker>
                </Box>
              </Tooltip>
            </Flex>
          </FormLabel>
          <NumberInput size="md" value={costPriceValue} type="text">
            <NumberInputField
              ref={register}
              name={`cost_price-${i}`}
              placeholder="0.00"
              onChange={handleCostPriceChange}
            />
          </NumberInput>
        </FormControl>
        <FormControl id={`selling_price-${i}`}>
          <FormLabel>
            <Flex justifyContent="space-between">
              <Box>Selling price</Box>
              <Tooltip
                placement="top"
                label="How much are you selling this item?"
              >
                <Box variant="ghost">
                  <Marker color="brand.primary">i</Marker>
                </Box>
              </Tooltip>
            </Flex>
          </FormLabel>
          <NumberInput size="md" value={sellingPriceValue} type="text">
            <NumberInputField
              ref={register}
              name={`selling_price-${i}`}
              placeholder="0.00"
              onChange={handleSellingPriceChange}
            />
          </NumberInput>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};
export default UnitItemPriceInput;
