// theme.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Component style overrides
import Button from './components/button';
import Link from './components/link';
import Heading from './components/heading';

const overrides = {
  ...styles,
  // Other foundational style overrides go here
  components: {
    Button,
    Link,
    Heading,
    // Other components go here
  },
};

export default extendTheme(overrides);
