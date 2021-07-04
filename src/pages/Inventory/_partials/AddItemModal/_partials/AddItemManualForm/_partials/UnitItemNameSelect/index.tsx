import React from 'react';
import {
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Select,
} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import CustomSelect from 'components/CustomSelect';

import { Controller } from 'react-hook-form';

interface Props {
  i: number;
  unitOptions: any[];
  isMultipleUnitsChecked: boolean;
  control: any;
}

const UnitItemNameSelect: React.FC<Props> = ({
  i,
  unitOptions,
  isMultipleUnitsChecked,
  control,
}) => {
  return (
    <FormControl key={`unit_name-${i}`} w={{ xl: '30rem' }} className="control">
      {isMultipleUnitsChecked && (
        <Heading as="h3" size="sm">
          Unit {i + 1}
        </Heading>
      )}
      <FormLabel mt="3rem">Item Unit</FormLabel>
      <Flex w="full">
        <Controller
          control={control}
          defaultValue={unitOptions.map((c) => c.value)}
          name={`unit_name-${i}`}
          render={({ onChange, value, ref }) => (
            <CustomSelect
              placeholder="e.g Peice"
              value={unitOptions.find((c) => c.value === value)}
              onChange={(val) => onChange(val.value)}
              options={unitOptions}
              ref={ref}
            />
          )}
        />
      </Flex>
    </FormControl>
  );
};

export default UnitItemNameSelect;
