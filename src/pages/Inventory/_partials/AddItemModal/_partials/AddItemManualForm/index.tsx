// react
import React, { useState } from "react";

// third party components
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  SimpleGrid,
  Input,
  Select,
  Textarea,
  VStack,
  Button,
} from "@chakra-ui/react";
import { RiShieldCheckFill } from "react-icons/ri";

// third party libraries
import { useForm } from "react-hook-form";

// UI components
import UnitItemNameSelect from "./_partials/UnitItemNameSelect";
import UnitItemPriceInput from "./_partials/UnitItemPriceInput";

interface Props {
  enteredItems: any[];
  setEnteredItems: (items: any[]) => void;
}

const AddItemManualForm: React.FC<Props> = ({}): JSX.Element => {
  const { register, errors } = useForm();

  interface ItemUnit {
    value?: string;
    costPrice?: string;
    sellingPrice?: string;
    quantity?: string;
  }

  const [isMultipleUnits, setIsMultipleUnits] = useState(false);

  const defaultItemUnits = [{}];
  const [itemUnits, setItemUnits] = useState<Array<ItemUnit>>(defaultItemUnits);

  const vStackProps = {
    spacing: "3rem",
    w: "100%",
  };
  const handleChangeItemUnit = (index: number, prop: any, value: string) => {
    // create a copy of itemUnits
    const itemUnitsCopy = itemUnits;
    // find item by id from itemUnitsCopy array
    let selectedItem = itemUnitsCopy.find((item, i) => i === index);
    // add new dropdown value to selected item
    if (selectedItem) {
      selectedItem[prop] = value;
      itemUnitsCopy[index] = selectedItem;
      setItemUnits(itemUnitsCopy);
    }
  };

  const handleDeleteItemUnit = (index: number) => {
    let otherItemUnits = itemUnits.filter((item, i) => i !== index);
    setItemUnits(otherItemUnits);
  };

  const handleAddItemUnitSlot = () => {
    setItemUnits([...itemUnits, {}]);
  };

  const handleIsMultipleUnitsChange = (e: any) => {
    setIsMultipleUnits(e.target.checked);
  };
  const unitOptions = ["peice", "carton"];

  return (
    <Box as="form" p={{ xl: "5rem 8rem" }} id="add-item-form--manual">
      <Flex>
        <VStack {...vStackProps} alignItems="left">
          <FormControl
            w={{ xl: "80%" }}
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
            w={{ xl: "80%" }}
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
            w={{ xl: "80%" }}
            id="itemcategory"
            isInvalid={errors.itemcategory}
          >
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
        <VStack {...vStackProps}>
          <Box>Drag and drop</Box>
        </VStack>
      </Flex>

      <VStack spacing="3rem" mt="3rem" w="full">
        <FormControl id="isMultipleUnits">
          <Checkbox onChange={handleIsMultipleUnitsChange}>
            <Box ml={{ xl: "1rem" }}>This item has multiple units</Box>
          </Checkbox>
          <FormHelperText fontSize="1.2rem">
            Select this option if this item is sold in multiple units like KG,
            Carton, Dozen
          </FormHelperText>
        </FormControl>
        <Box w="full">
          {isMultipleUnits ? (
            <Flex
              w="full"
              border="0.1rem solid"
              borderColor="grey.200"
              borderRadius=".5rem"
              p="1.6rem 3rem"
            >
              <VStack
                {...vStackProps}
                spacing="3.1rem"
                alignItems="flex-start"
                w={{ base: "full", xl: "35%" }}
              >
                {itemUnits.map((item, i) => (
                  <UnitItemNameSelect
                    key={i}
                    item={item}
                    i={i}
                    handleChangeItemUnit={handleChangeItemUnit}
                    unitOptions={unitOptions}
                  />
                ))}
                <Button
                  variant="goldOutline"
                  size="sm"
                  borderRadius="1rem"
                  onClick={handleAddItemUnitSlot}
                >
                  Add another unit
                </Button>
              </VStack>
              <VStack p="0 3rem" w={{ base: "full", xl: "65%" }}>
                {itemUnits.map((item, i) => (
                  <UnitItemPriceInput
                    key={i}
                    item={item}
                    i={i}
                    handleChangeItemUnit={handleChangeItemUnit}
                    handleDeleteItemUnit={handleDeleteItemUnit}
                  />
                ))}
              </VStack>
            </Flex>
          ) : (
            <Flex w="full">
              <Box w="full">
                <FormControl id={`unit-name`} w="70%">
                  <FormLabel mt="3rem">Item Unit</FormLabel>
                  <Flex>
                    <Select placeholder="e.g Peice" w="70%" h="4rem">
                      {unitOptions.map((unitOption) => (
                        <option value={unitOption} key={unitOption}>
                          {unitOption}
                        </option>
                      ))}
                    </Select>
                  </Flex>
                </FormControl>
              </Box>
              <Box w="full" pl="3rem">
                <SimpleGrid mt="3rem" columns={2} spacing={10}>
                  <FormControl id={`unit-price`}>
                    <FormLabel>Item Price</FormLabel>
                    <Input size="md" placeholder="0.00" />
                  </FormControl>
                  <FormControl id={`unit-quantity`}>
                    <FormLabel>Item Quantity</FormLabel>
                    <Input size="md" placeholder="0" />
                  </FormControl>
                </SimpleGrid>
              </Box>
            </Flex>
          )}
        </Box>
        <FormControl id="track">
          <Checkbox>
            <Flex>
              <Box m="0 1rem">Track this item &nbsp;</Box>
              <Box>
                <RiShieldCheckFill size="2rem" color="#69E4A6" d="inline" />
              </Box>
            </Flex>
          </Checkbox>
          <FormHelperText fontSize="1.2rem">
            You will be notified when this item becomes low in stock
          </FormHelperText>
        </FormControl>
      </VStack>
    </Box>
  );
};
export default AddItemManualForm;
