import { Stack, useColorModeValue } from "@chakra-ui/react";

import MobileNavItem from "./mobileNavItem";

 
const MobileNav = ({navitems}) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {navitems.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
export default MobileNav;
