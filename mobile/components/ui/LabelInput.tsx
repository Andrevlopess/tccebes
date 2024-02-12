import { s } from "@/styles/globals";
import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";

interface LabelInputProps extends TextInputProps {
  label: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, ...props }) => {
  return (
    <View>
      <Text style={[s.regular]}>{label}</Text>
      <TextInput
        style={[s.regular, s.flex1, s.mt10]}
        {...props}
      />
    </View>
  );
};
export default LabelInput;
