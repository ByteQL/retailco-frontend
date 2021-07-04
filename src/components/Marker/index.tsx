// react
import React from 'react';

// third party components
import { Box } from '@chakra-ui/react';

interface Props {
  color?: string;
}

const Marker: React.FC<Props> = React.forwardRef(({ color, children }, ref) => (
  <Box className="rco-marker" bg={color} pos="static">
    {children || <>!</>}
  </Box>
));

Marker.defaultProps = {
  color: '#e94560',
};

export default Marker;
