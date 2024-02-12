import { s } from "@/styles/globals";
import React, { useRef } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleProp,
  ViewStyle,
  Animated,
} from "react-native";

interface LabelInputProps extends TextInputProps {
  label: string;
  containerStyles?: StyleProp<ViewStyle>;
}


const HEIGHT: number = 100;

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  containerStyles,
  ...props
}) => {
  const labelPos = useRef(new Animated.Value(0)).current;

  function handleFocus() {
    Animated.timing(labelPos, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={[containerStyles, { position: "relative", height: HEIGHT }]}>
      <Animated.Text
        style={[
          s.regular,
          {
            position: "absolute",
            top: "50%",
            // transform: [{ translateY:  }],
          },
        ]}
      >
        {label}
      </Animated.Text>
      <TextInput
        onFocus={handleFocus}
        style={[s.regular, s.flex1, s.mt10]}
        {...props}
      />
    </View>
  );
};
export default LabelInput;
