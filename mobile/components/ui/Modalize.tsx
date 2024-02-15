// CustomModal.tsx
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { Portal } from "react-native-portalize";

interface CustomModalProps extends ModalizeProps {
  children?: React.ReactNode;
}

const Modal: ForwardRefRenderFunction<Modalize, CustomModalProps> = (
  { children, ...props },
  ref
) => {
  return (
    <Portal>
      <Modalize
      hei
        ref={ref}
        {...props}
      >
        {children}
      </Modalize>
    </Portal>
  );
};

export default forwardRef(Modal);
