// react
import React, { CSSProperties, ReactNode } from 'react';

// third party components
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

export interface ModalComponentProps extends ModalProps {
  title?: string | ReactNode;
  headerExtra?: string | ReactNode;
  footer?: ReactNode;
  width?: number | string;
  modalHeaderProps?: ModalHeaderProps;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  title,
  footer,
  headerExtra,
  width,
  modalHeaderProps,
  children,
  ...rest
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} {...rest}>
      <ModalOverlay />
      <ModalContent maxWidth={width}>
        <ModalHeader {...modalHeaderProps}>
          <Box fontSize="1.6rem">{title}</Box>
          {headerExtra && <Box>{headerExtra}</Box>}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};
ModalComponent.defaultProps = {
  scrollBehavior: 'inside',
};
export default ModalComponent;
