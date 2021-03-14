import React from 'react';
import BaseMenu, { BaseMenuProps } from 'components/MenuComponent';
import { FaChevronDown } from 'react-icons/fa';

const BaseSelect: React.FC<BaseMenuProps> = ({ ...rest }) => (
  <BaseMenu
    {...rest}
    menuButtonProps={{
      variant: 'menuButton',
      rightIcon: <FaChevronDown color="#D1DAE0" />,
    }}
  />
);

export default BaseSelect;
