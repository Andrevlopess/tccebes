import { s } from "@/styles/globals";
import { AlertCircle } from "lucide-react-native";
import React, { useState, useRef } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";

interface ILabelInputProps extends TextInputProps {
  label: string;
  error?: string;
}

const LabelInput = ({ label, error, ...props }: ILabelInputProps) => {
  return (
    <View style={[s.gap6]}>
      <Text style={[s.regular, s.medium, error ? s.textRed500 : s.textGray800]}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={[
          s.regular,
          s.bgWhite,
          s.radius8,
          s.py12,
          s.px16,
          error ? [s.border1, s.borderRed500] : null,
        ]}
        cursorColor={"#6d28d9"}
        placeholderTextColor={"#444"}
      />
      {error && (
        <View style={[s.flexRow, s.gap6, s.itemsCenter, s.px12, s.py6]}>
          <AlertCircle
            color={"#ef4444"}
            size={20}
          />
          <Text style={[s.textSM, s.medium, s.textRed500]}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default LabelInput;
