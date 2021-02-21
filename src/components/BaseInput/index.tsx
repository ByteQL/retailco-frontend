import React, { Component } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

interface Props {
  ref?: any;
}

class BaseInputInner extends Component<Props & InputProps, any> {
  render() {
    return <Input {...this.props} ref={this.props.ref} />;
  }
}
const BaseInput = React.forwardRef((props: Props & InputProps, ref) => (
  <BaseInputInner ref={ref} {...props} />
));
BaseInput.defaultProps = {
  height: '5rem',
};

export default BaseInput;
