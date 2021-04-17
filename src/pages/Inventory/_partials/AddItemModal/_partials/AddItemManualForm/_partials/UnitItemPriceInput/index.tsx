import React from 'react';

// third-party libraries
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';

const UnitItemPriceInput = ({ item, i, handleChangeItemUnit }) => (
  <Box
    key={i}
    p="1.5rem 0"
    borderTop="1px solid"
    borderTopColor="grey.200"
    mt="0 !important"
  >
    <Heading as="h3" size="sm">
      Unit {i + 1}&nbsp;&nbsp;
      <Box as="span" fontWeight={400}>
        Set price, quantity and discount for this unit
      </Box>
    </Heading>
    <SimpleGrid mt="3rem" columns={2} spacing={10}>
      <FormControl id={`unit-price-${i}`}>
        <FormLabel>Item Price</FormLabel>
        <Input
          size="md"
          placeholder="0.00"
          value={item.price}
          onChange={(e) => handleChangeItemUnit(i, 'price', e.target.value)}
        />
      </FormControl>
      <FormControl id={`unit-quantity-${i}`}>
        <FormLabel>Item Quantity</FormLabel>
        <Input
          size="md"
          placeholder="0"
          value={item.quantity}
          onChange={(e) => handleChangeItemUnit(i, 'quantity', e.target.value)}
        />
      </FormControl>
    </SimpleGrid>
  </Box>
);
export default UnitItemPriceInput;
