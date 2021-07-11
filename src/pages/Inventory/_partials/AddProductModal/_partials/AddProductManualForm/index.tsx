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
import UnitProductNameSelect from './_partials/UnitProductNameSelect';
import UnitProductPriceInput from './_partials/UnitProductPriceInput';
import { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import FileUpload from 'components/FileUpload';

import CustomSelect from 'components/CustomSelect';

interface Props {
  productUnits: any[];
  setProductUnits: (unit: any) => void;
}

const AddProductManualForm: React.FC<Props> = ({
  productUnits,
  setProductUnits,
}) => {
  const { register, errors, handleSubmit, reset, control, setValue } =
    useForm();

  const [isMultipleUnitsChecked, setIsMultipleUnitsChecked] = useState(false);

  const [unitOptions, setUnitOptions] = useState([
    { label: 'peice', value: 'peice' },
    { label: 'carton', value: 'carton' },
  ]);

  const defaultProductUnits = [{}];

  useEffect(() => {
    setProductUnits(defaultProductUnits);
  }, []);

  const vStackProps = {
    spacing: '3rem',
    w: 'full',
  };

  const handleDeleteProductUnit = (index: number) => {
    let otherProductUnits = productUnits.filter((product, i) => i !== index);
    setProductUnits(otherProductUnits);
  };

  const handleAddProductUnitSlot = () => {
    setProductUnits([...productUnits, {}]);
  };

  const handleIsMultipleUnitsCheckedChange = (e: any) => {
    const { checked } = e.target;

    setIsMultipleUnitsChecked(checked);
    reset();
    if (!checked) {
      setProductUnits(defaultProductUnits);
    }
    return e.target.checked;
  };

  const handleFormSubmit = (values) => {
    console.log(values);

    const productUnitsCopy = productUnits;

    // ProductUnits array contains i empty objects

    for (let i = 0; i < productUnitsCopy.length; i++) {
      // loop through, give each empty object at index i a property with a value from the global form values object
      productUnitsCopy[i].unit_name = values[`unit_name-${i}`];
      productUnitsCopy[i].quantity = values[`quantity-${i}`];
      productUnitsCopy[i].cost_price = values[`cost_price-${i}`];
      productUnitsCopy[i].selling_price = values[`selling_price-${i}`];
    }
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
      id="add-product-form--manual"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Flex>
        <VStack {...vStackProps} alignItems="left">
          <FormControl
            w={{ xl: '80%' }}
            id="productname"
            isInvalid={errors.productname}
          >
            <FormLabel>Product Name</FormLabel>
            <Input
              type="text"
              placeholder="Indomie"
              name="productname"
              size="md"
              ref={register}
              autoFocus
            />
            {errors.productname && (
              <FormErrorMessage>{errors.productname.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            w={{ xl: '80%' }}
            id="productcategory"
            isInvalid={errors.productdescription}
          >
            <FormLabel>Product Description</FormLabel>
            <Textarea
              placeholder="Product colour, size, material"
              name="productdescription"
              ref={register}
            />
            {errors.productdescription && (
              <FormErrorMessage>
                {errors.productdescription.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            w={{ xl: '80%' }}
            id="productcategory"
            isInvalid={errors.productcategory}
          >
            <FormLabel>Product Name</FormLabel>

            <CustomSelect
              name="productcategory"
              placeholder="Select category"
              h="4rem"
              ref={register}
              options={[{ value: 'food', label: 'Food' }]}
              size="sm"
            />

            {errors.productcategory && (
              <FormErrorMessage>
                {errors.productcategory.message}
              </FormErrorMessage>
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
            <Box ml={{ xl: '1rem' }}>This product has multiple units</Box>
          </Checkbox>
          <FormHelperText fontSize="1.2rem">
            Select this option if this product is sold in multiple units like
            KG, Carton, Dozen
          </FormHelperText>
        </FormControl>
        <Box w="full">
          <VStack {...vStackProps} spacing="3.1rem" alignItems="flex-start">
            {productUnits.map((product, i) => (
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
                <UnitProductNameSelect
                  i={i}
                  unitOptions={unitOptions}
                  isMultipleUnitsChecked={isMultipleUnitsChecked}
                  control={control}
                />
                <UnitProductPriceInput
                  i={i}
                  isMultipleUnitsChecked={isMultipleUnitsChecked}
                  register={register}
                  setValue={setValue}
                />
                {productUnits.length > 1 && (
                  <IconButton
                    size="sm"
                    variant="unstyled"
                    aria-label="Delete unit"
                    icon={<RiDeleteBin2Line size="2.5rem" />}
                    color="grey"
                    ml="auto"
                    onClick={(_) => handleDeleteProductUnit(i)}
                  />
                )}
              </Stack>
            ))}
          </VStack>
        </Box>

        <Flex justifyContent="space-between" w="full">
          <FormControl id="track">
            <Checkbox name="track" ref={register}>
              <Flex>
                <Box m="0 1rem">Track this product &nbsp;</Box>
                <Box>
                  <RiShieldCheckFill size="2rem" color="#69E4A6" />
                </Box>
              </Flex>
            </Checkbox>
            <FormHelperText fontSize="1.2rem">
              You will be notified when this product becomes low in stock
            </FormHelperText>
          </FormControl>
          {isMultipleUnitsChecked && (
            <Button
              variant="goldOutline"
              size="sm"
              borderRadius="1rem"
              onClick={handleAddProductUnitSlot}
            >
              Add another unit
            </Button>
          )}
        </Flex>
      </VStack>
    </Box>
  );
};
export default AddProductManualForm;
