// react libraries
import React from 'react';
import {
  Box,
  List,
  ListItem,
  Link,
  ListIcon,
  Divider,
  Center,
} from '@chakra-ui/react';
import LogoWithName from 'components/LogoWithName';
import { NavLink } from 'react-router-dom';
import routePaths from 'utils/routePaths';

// icons
import { RiBarChart2Line } from 'react-icons/ri';

interface Props {}
const SideMenu: React.FC<Props> = ({}) => {
  const listOne = [
    { title: 'Dashboard', path: routePaths.dashBoard, icon: RiBarChart2Line },
    { title: 'Inventory', path: routePaths.inventory, icon: RiBarChart2Line },
    { title: 'Purchase', path: routePaths.purchase, icon: RiBarChart2Line },
    { title: 'Transfer', path: routePaths.transfer, icon: RiBarChart2Line },
  ];
  const renderList = (menuList: any[]) => (
    <List>
      {menuList.map((item, key: number) => (
        <ListItem key={key}>
          <Link
            as={NavLink}
            to={item.path}
            className="menu-item"
            activeClassName="menu-item--active"
            variant="sideMenuItem"
          >
            <ListIcon className="menu-item__icon" as={item.icon} />
            {item.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
  return (
    <Box
      width="255px"
      minH="100vh"
      boxShadow="0px 3px 6px #00000029"
      borderRadius="0px 20px 20px 0px"
      bg="white"
    >
      <Center pt="35px" pb="50px" justifyItems="center">
        <LogoWithName />
      </Center>
      {renderList(listOne)}

      <Divider />
    </Box>
  );
};
export default SideMenu;