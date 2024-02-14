import { View, Text, ViewProps } from "react-native";
import React from "react";
import { s } from "@/styles/globals";

interface BadgeProps extends ViewProps {
  children: React.ReactNode;
}

export default function Badge({ children, style,...props }: BadgeProps) {
  return (
    <View
      {...props}
      style={[
        s.radiusFull,
        s.border1,
        s.borderGray200,
        s.px12,
        s.py6,
        style,
      ]}
    >
      {children}
    </View>
  );
}
