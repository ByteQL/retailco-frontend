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
  handleDeleteItemUnit,
  unitOptions,
}) => {
  return (
    <FormControl key={`unit-name-${i}`}>
      <Heading as="h3" size="sm">
        Unit {i + 1}
      </Heading>
      <FormLabel mt="3rem">Item Unit</FormLabel>
      <Flex>
        <Select
          value={item.value}
          placeholder="e.g Peice"
          onChange={(e) => handleChangeItemUnit(i, 'value', e.target.value)}
          w="70%"
          h="4rem"
        >
          {unitOptions.map((unitOption) => (
            <option value={unitOption} key={unitOption}>
              {unitOption}
            </option>
          ))}
        </Select>
        <IconButton
          size="sm"
          variant="unstyled"
          aria-label="Delete unit"
          icon={<RiDeleteBinLine size="2.5rem" />}
          color="grey"
          ml="auto"
          onClick={(_) => handleDeleteItemUnit(i)}
        />
      </Flex>
    </FormControl>
  );
};
export default UnitItemNameSelect;
