import React from 'react';
import { FormControl, FormLabel, Flex, Heading } from '@chakra-ui/react';
import CustomSelect from 'components/CustomSelect';

import { Controller } from 'react-hook-form';

interface Props {
  i: number;
  unitOptions: any[];
  isMultipleUnitsChecked: boolean;
  control: any;
  errors: any;
}

const UnitproductnameSelect: React.FC<Props> = ({
  i,
  unitOptions,
  isMultipleUnitsChecked,
  control,
  errors,
}) => {
  return (
    <FormControl
      key={`unit_name-${i}`}
      w={{ xl: '30rem' }}
      className="control"
      isInvalid={!!errors[`unit_name-${i}`]}
    >
      {isMultipleUnitsChecked && (
        <Heading as="h3" size="sm">
          Unit {i + 1}
        </Heading>
      )}
      <FormLabel mt="3rem">Product Unit</FormLabel>
      <Flex w="full">
        <Controller
          control={control}
          defaultValue={unitOptions.map((c) => c.value)}
          name={`unit_name-${i}`}
          render={({ onChange, value, ref }) => (
            <CustomSelect
              placeholder="e.g Peice"
              value={unitOptions.find((c) => c.value === value)}
              onChange={(val) => onChange(val?.value)}
              options={unitOptions}
              chakraProps={{
                h: '4rem',
                ref,
                size: 'sm',
              }}
              name="productcategory"
            />
          )}
        />
      </Flex>
    </FormControl>
  );
};

export default UnitproductnameSelect;
