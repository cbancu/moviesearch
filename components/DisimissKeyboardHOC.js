import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};

export default {DismissKeyboardHOC}