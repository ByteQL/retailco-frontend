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
} from '@chakra-ui/react';
import { FaChevronDown, FaStore } from 'react-icons/fa';

interface Props {
  options: Array<{ label: string; value: string | number }>;
  defualtValue?: string | number;
  value?: string | number;
  onChange?: (value) => any;
  menuProps?: MenuProps;
  menuButtonProps?: MenuButtonProps;
  placeholder?: string;
}

const BaseMenu: React.FC<Props> = ({
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
    <Menu variant="unstyled" autoSelect={false} {...menuProps}>
      <MenuButton
        as={Button}
        size="md"
        leftIcon={
          <FaStore
            style={{ color: '#011624', width: '1.8rem', marginRight: '1rem' }}
          />
        }
        rightIcon={
          <FaChevronDown
            style={{ margin: '0 1rem', width: '1.4rem', color: '#011624' }}
          />
        }
        variant="unstyled"
        d="flex"
        outline="none"
        _focus={{
          boxShadow: 'none',
        }}
        pos="relative"
        {...menuButtonProps}
      >
        <Box minW="10rem">
          {selectedObj ? (
            <Text color="brand.primary" fontWeight="bold" d="contents">
              {selectedObj.label}
            </Text>
          ) : (
            <Text>{placeholder}</Text>
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
