import React, { Component, Ref, RefObject } from 'react';
import { Select, SelectProps } from '@chakra-ui/react';

interface Props {
  ref?: any;
}

class BaseSelectInner extends Component<Props & SelectProps, any> {
  render() {
    return (
      <Select {...this.props} ref={this.props.ref}>
        {this.props.children}
      </Select>
    );
  }
}

const BaseSelect = React.forwardRef((props: Props & SelectProps, ref) => (
  <BaseSelectInner ref={ref} {...props} />
));
BaseSelect.defaultProps = {
  height: '5rem',
};

export default BaseSelect;
