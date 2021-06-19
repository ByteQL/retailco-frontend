import React from 'react';
import {
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Select,
  IconButton,
} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';

const UnitItemNameSelect = ({
  item,
  i,
  handleChangeItemUnit,
  unitOptions,
  isMultipleUnitsChecked,
}) => {
  return (
    <FormControl key={`unit-name-${i}`} w={{ xl: '30rem' }}>
      {isMultipleUnitsChecked && (
        <Heading as="h3" size="sm">
          Unit {i + 1}
        </Heading>
      )}
      <FormLabel mt="3rem">Item Unit</FormLabel>
      <Flex>
        <Select
          value={item.value}
          placeholder="e.g Peice"
          onChange={(e) => handleChangeItemUnit(i, 'value', e.target.value)}
          h="4rem"
        >
          {unitOptions.map((unitOption) => (
            <option value={unitOption} key={unitOption}>
              {unitOption}
            </option>
          ))}
        </Select>
      </Flex>
    </FormControl>
  );
};
export default UnitItemNameSelect;
