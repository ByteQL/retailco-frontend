// react
import React from 'react';

// third party components
import { Box } from '@chakra-ui/react';

interface Props {
  color?: string;
}

const Marker: React.FC<Props> = ({ color }) => (
  <Box className="rco-marker" bg={color} pos="static">
    !
  </Box>
);

Marker.defaultProps = {
  color: '#e94560',
};

export default Marker;
