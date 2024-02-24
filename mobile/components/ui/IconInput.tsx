import { s } from "@/styles/globals";
import React, { useState, useRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface IIconInputProps extends TextInputProps {
  icon: React.ReactNode;
  iconPosition?: "left" | "right";
}

const IconInput = ({
  icon,
  iconPosition = "left",
  ...props
}: IIconInputProps) => {
  return (
    <View
      style={[
        s.radius8,
        s.bgWhite,
        s.p12,
        s.gap4,
        s.justifyBetween,
        s.itemsCenter,
        s.flexRow,
      ]}
    >
      {iconPosition === "left" && icon}
      <TextInput
        {...props}
        style={[s.p4, s.px6, s.flex1, s.regular]}
        cursorColor={"#6d28d9"}
        placeholderTextColor={"#444"}
      />
      {iconPosition === "right" && icon}
    </View>
  );
};

export default IconInput;
