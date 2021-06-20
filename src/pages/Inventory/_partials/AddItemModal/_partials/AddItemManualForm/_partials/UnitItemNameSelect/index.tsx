import React from 'react';
import {
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Select,
} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';

const UnitItemNameSelect = ({
  i,
  unitOptions,
  isMultipleUnitsChecked,
  register,
}) => {
  return (
    <FormControl key={`unit_name-${i}`} w={{ xl: '30rem' }}>
      {isMultipleUnitsChecked && (
        <Heading as="h3" size="sm">
          Unit {i + 1}
        </Heading>
      )}
      <FormLabel mt="3rem">Item Unit</FormLabel>
      <Flex>
        <Select
          placeholder="e.g Peice"
          h="4rem"
          ref={register}
          name={`unit_name-${i}`}
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
