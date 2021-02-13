import React, { Component, Ref, RefObject } from 'react';
import { Select, SelectProps } from '@chakra-ui/react';

interface Props {
  innerRef?: any;
}

class BaseSelectInner extends Component<Props & SelectProps, any> {
  render() {
    return (
      <Select {...this.props} ref={this.props.innerRef}>
        {this.props.children}
      </Select>
    );
  }
}

const BaseSelect = React.forwardRef((props: Props & SelectProps, ref) => (
  <BaseSelectInner innerRef={ref} {...props} />
));
BaseSelect.defaultProps = {
  height: '55px',
};

export default BaseSelect;
