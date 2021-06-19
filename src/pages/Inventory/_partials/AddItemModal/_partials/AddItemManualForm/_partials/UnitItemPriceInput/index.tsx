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

const UnitItemPriceInput = ({
  item,
  i,
  handleChangeItemUnit,
  isMultipleUnitsChecked,
}) => {
  console.log(item);

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
          <Input
            size="md"
            placeholder="0.00"
            value={item.quantity}
            onChange={(e) =>
              handleChangeItemUnit(i, 'quantity', e.target.value)
            }
          />
        </FormControl>
        <FormControl id={`cost_price-${i}`}>
          <FormLabel>Cost price</FormLabel>
          <Input
            size="md"
            placeholder="0"
            value={item.cost_price}
            onChange={(e) =>
              handleChangeItemUnit(i, 'cost_price', e.target.value)
            }
          />
        </FormControl>
        <FormControl id={`selling_price-${i}`}>
          <FormLabel>Selling price</FormLabel>
          <Input
            size="md"
            placeholder="0"
            value={item.selling_price}
            onChange={(e) =>
              handleChangeItemUnit(i, 'selling_price', e.target.value)
            }
          />
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};
export default UnitItemPriceInput;
