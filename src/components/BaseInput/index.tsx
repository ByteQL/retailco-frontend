import React, { Component } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

interface Props {
  innerRef?: any;
}

class BaseInputInner extends Component<Props & InputProps, any> {
  render() {
    return <Input {...this.props} ref={this.props.innerRef} />;
  }
}
const BaseInput = React.forwardRef((props: Props & InputProps, ref) => (
  <BaseInputInner innerRef={ref} {...props} />
));
BaseInput.defaultProps = {
  height: '55px',
};

export default BaseInput;
