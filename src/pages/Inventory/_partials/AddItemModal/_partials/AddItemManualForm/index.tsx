// react
import React, { useState } from 'react';

// third party components
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
  IconButton,
  Button,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { RiShieldCheckFill, RiDeleteBin2Line } from 'react-icons/ri';

// third party libraries
import { useForm } from 'react-hook-form';

// UI components
import UnitItemNameSelect from './_partials/UnitItemNameSelect';
import UnitItemPriceInput from './_partials/UnitItemPriceInput';
import { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import FileUpload from 'components/FileUpload';

import CustomSelect from 'components/CustomSelect';

interface Props {
  itemUnits: any[];
  setItemUnits: (unit: any) => void;
}

const AddItemManualForm: React.FC<Props> = ({ itemUnits, setItemUnits }) => {
  const { register, errors, handleSubmit, reset, control, setValue } =
    useForm();

  const [isMultipleUnitsChecked, setIsMultipleUnitsChecked] = useState(false);

  const [unitOptions, setUnitOptions] = useState([
    { label: 'peice', value: 'peice' },
    { label: 'carton', value: 'carton' },
  ]);

  const defaultItemUnits = [{}];

  useEffect(() => {
    setItemUnits(defaultItemUnits);
  }, []);

  const vStackProps = {
    spacing: '3rem',
    w: 'full',
  };

  const handleDeleteItemUnit = (index: number) => {
    let otherItemUnits = itemUnits.filter((item, i) => i !== index);
    setItemUnits(otherItemUnits);
  };

  const handleAddItemUnitSlot = () => {
    setItemUnits([...itemUnits, {}]);
  };

  const handleIsMultipleUnitsCheckedChange = (e: any) => {
    const { checked } = e.target;

    setIsMultipleUnitsChecked(checked);
    reset();
    if (!checked) {
      setItemUnits(defaultItemUnits);
    }
    return e.target.checked;
  };

  const handleFormSubmit = (values) => {
    console.log(values);

    const itemUnitsCopy = itemUnits;

    // ItemUnits array contains i empty objects

    for (let i = 0; i < itemUnitsCopy.length; i++) {
      // loop through, give each empty object at index i a property with a value from the global form values object
      itemUnitsCopy[i].unit_name = values[`unit_name-${i}`];
      itemUnitsCopy[i].quantity = values[`quantity-${i}`];
      itemUnitsCopy[i].cost_price = values[`cost_price-${i}`];
      itemUnitsCopy[i].selling_price = values[`selling_price-${i}`];
    }
    console.log(itemUnitsCopy);
  };

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return 'Files is required';
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb';
      }
    }
    return true;
  };

  return (
    <Box
      as="form"
      p={{ xl: '5rem 8rem' }}
      id="add-item-form--manual"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Flex>
        <VStack {...vStackProps} alignItems="left">
          <FormControl
            w={{ xl: '80%' }}
            id="itemname"
            isInvalid={errors.itemname}
          >
            <FormLabel>Item Name</FormLabel>
            <Input
              type="text"
              placeholder="Indomie"
              name="itemname"
              size="md"
              ref={register}
              autoFocus
            />
            {errors.itemname && (
              <FormErrorMessage>{errors.itemname.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            w={{ xl: '80%' }}
            id="itemcategory"
            isInvalid={errors.itemcategory}
          >
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
          <FormControl
            w={{ xl: '80%' }}
            id="itemcategory"
            isInvalid={errors.itemcategory}
          >
            <FormLabel>Item Name</FormLabel>

            <CustomSelect
              name="itemcategory"
              placeholder="Select category"
              h="4rem"
              ref={register}
              options={[{ value: 'food', label: 'Food' }]}
              size="sm"
            />

            {errors.itemcategory && (
              <FormErrorMessage>{errors.itemcategory.message}</FormErrorMessage>
            )}
          </FormControl>
        </VStack>
        <VStack {...vStackProps}>
          <Box w="full" m="0 5rem">
            <Heading size="sm">
              Image{' '}
              <Box as="span" fontWeight={400} fontStyle="italic">
                (Optional)
              </Box>
            </Heading>
            <FormControl isInvalid={!!errors.file_} isRequired>
              <FileUpload accept={'image/*'} register={register}>
                <Flex
                  border="1px dashed"
                  borderRadius="5px"
                  w="full"
                  h="100%"
                  p="6rem 0"
                  mt="1rem"
                  alignItems="center"
                  flexDir="column"
                >
                  <FaCamera size="7rem" color="grey" />
                  <Box mt="2rem" textAlign="center">
                    <Box fontSize="1.8rem" fontWeight="600">
                      Drag and drop image
                    </Box>
                    <p>
                      or{' '}
                      <Box as="span" role="button" color="brand.primary">
                        browse
                      </Box>{' '}
                      to select image
                    </p>
                  </Box>
                </Flex>
              </FileUpload>
              <FormErrorMessage>
                {errors.file_ && errors?.file_.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
        </VStack>
      </Flex>

      <VStack spacing="3rem" mt="3rem" w="full">
        <FormControl id="isMultipleUnitsChecked">
          <Checkbox onChange={handleIsMultipleUnitsCheckedChange}>
            <Box ml={{ xl: '1rem' }}>This item has multiple units</Box>
          </Checkbox>
          <FormHelperText fontSize="1.2rem">
            Select this option if this item is sold in multiple units like KG,
            Carton, Dozen
          </FormHelperText>
        </FormControl>
        <Box w="full">
          <VStack {...vStackProps} spacing="3.1rem" alignItems="flex-start">
            {itemUnits.map((item, i) => (
              <Stack
                key={i}
                w="full"
                border={isMultipleUnitsChecked ? '0.1rem solid' : undefined}
                borderColor="grey.200"
                borderRadius=".5rem"
                p={isMultipleUnitsChecked ? '1.6rem 3rem' : undefined}
                direction={['column', 'row']}
                spacing={isMultipleUnitsChecked ? '1rem' : '5rem'}
              >
                <UnitItemNameSelect
                  i={i}
                  unitOptions={unitOptions}
                  isMultipleUnitsChecked={isMultipleUnitsChecked}
                  control={control}
                />
                <UnitItemPriceInput
                  i={i}
                  isMultipleUnitsChecked={isMultipleUnitsChecked}
                  register={register}
                  setValue={setValue}
                />
                {itemUnits.length > 1 && (
                  <IconButton
                    size="sm"
                    variant="unstyled"
                    aria-label="Delete unit"
                    icon={<RiDeleteBin2Line size="2.5rem" />}
                    color="grey"
                    ml="auto"
                    onClick={(_) => handleDeleteItemUnit(i)}
                  />
                )}
              </Stack>
            ))}
          </VStack>
        </Box>

        <Flex justifyContent="space-between" w="full">
          <FormControl id="track">
            <Checkbox>
              <Flex>
                <Box m="0 1rem">Track this item &nbsp;</Box>
                <Box>
                  <RiShieldCheckFill size="2rem" color="#69E4A6" />
                </Box>
              </Flex>
            </Checkbox>
            <FormHelperText fontSize="1.2rem">
              You will be notified when this item becomes low in stock
            </FormHelperText>
          </FormControl>
          {isMultipleUnitsChecked && (
            <Button
              variant="goldOutline"
              size="sm"
              borderRadius="1rem"
              onClick={handleAddItemUnitSlot}
            >
              Add another unit
            </Button>
          )}
        </Flex>
      </VStack>
    </Box>
  );
};
export default AddItemManualForm;
