// react
import React from 'react';

// third party components
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface Props {
  enteredItems: any[];
  setEnteredItems: (items: any[]) => void;
}

const AddItemManualForm: React.FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    setValue,
  } = useForm();

  const vStackProps = {
    spacing: '2rem',
    w: { base: '100%', xl: '50%' },
    p: { xl: '5rem 10rem' },
  };
  return (
    <form>
      <Flex>
        <VStack {...vStackProps}>
          <FormControl id="itemname" isInvalid={errors.itemname}>
            <FormLabel>Item Name</FormLabel>
            <Input
              type="text"
              placeholder="Indomie"
              name="itemname"
              size="md"
              ref={register}
            />
            {errors.itemname && (
              <FormErrorMessage>{errors.itemname.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="itemcategory" isInvalid={errors.itemcategory}>
            <FormLabel>Item Category</FormLabel>
            <Textarea
              placeholder="Item colour, size, material"
              name="itemcategory"
              ref={register}
            />
            {errors.itemcategory && (
              <FormErrorMessage>{errors.itemcategory.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="itemcategory" isInvalid={errors.itemcategory}>
            <FormLabel>Item Name</FormLabel>
            <Select
              name="itemcategory"
              h="4rem"
              ref={register}
              placeholder="Select category"
            >
              <option value="food">Food</option>
            </Select>

            {errors.itemcategory && (
              <FormErrorMessage>{errors.itemcategory.message}</FormErrorMessage>
            )}
          </FormControl>
        </VStack>
        <VStack {...vStackProps}></VStack>
      </Flex>
    </form>
  );
};
export default AddItemManualForm;
