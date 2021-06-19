// react libraries
import React, { useEffect, useState } from 'react';

// third party components
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuProps,
  Box,
  Text,
  MenuButtonProps,
  ButtonProps,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

export interface BaseMenuProps {
  options: Array<{ label: string; value: string | number }>;
  defualtValue?: string | number;
  value?: string | number;
  onChange?: (value: any) => any;
  menuProps?: MenuProps;
  menuButtonProps?: MenuButtonProps & ButtonProps;
  placeholder?: string;
}

const BaseMenu: React.FC<BaseMenuProps> = ({
  options,
  defualtValue,
  value,
  onChange,
  placeholder,
  menuProps,
  menuButtonProps,
}) => {
  const [selected, setSelected] = useState<any>(value ? value : defualtValue);
  const handleOptionClick = (e: any) => {
    onChange && onChange(e.target.value);
    if (value) return;
    setSelected(e.target.value);
  };
  const selectedObj = options.find(
    (option) => selected && option.value === selected,
  );

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <Menu autoSelect={false} {...menuProps}>
      <MenuButton
        as={Button}
        size="sm"
        rightIcon={
          <FaChevronDown
            style={{ margin: '0 1rem', width: '1.4rem', color: 'black' }}
          />
        }
        d="flex"
        _focus={{
          boxShadow: 'none',
        }}
        pos="relative"
        {...menuButtonProps}
      >
        <Box>
          {selectedObj ? (
            <Text color="brand.primary" fontWeight="bold">
              {selectedObj.label}
            </Text>
          ) : (
            <Text color="grey.100">{placeholder}</Text>
          )}
        </Box>
      </MenuButton>
      <MenuList>
        {options.map(({ label, value }) => (
          <MenuItem
            key={value}
            value={value}
            as="option"
            role="option"
            onClick={handleOptionClick}
            className={value === selected ? 'selected' : undefined}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BaseMenu;
