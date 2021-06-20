import React from 'react';

// third-party libraries
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  SimpleGrid,
} from '@chakra-ui/react';

const UnitItemPriceInput = ({ i, isMultipleUnitsChecked, register }) => {
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
          <FormLabel>Cost price</FormLabel>
          <NumberInput size="md">
            <NumberInputField
              placeholder="0.00"
              ref={register}
              name={`cost_price-${i}`}
            />
          </NumberInput>
        </FormControl>
        <FormControl id={`selling_price-${i}`}>
          <FormLabel>Selling price</FormLabel>
          <NumberInput size="md">
            <NumberInputField
              placeholder="0.00"
              ref={register}
              name={`selling_price-${i}`}
            />
          </NumberInput>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};
export default UnitItemPriceInput;
