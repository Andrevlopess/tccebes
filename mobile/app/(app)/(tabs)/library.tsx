import { View, Text } from "react-native";
import React from "react";
import { s } from "@/styles/globals";

export default function LibraryPage() {
  return (
    <View style={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Text style={[s.bold]}>library</Text>
    </View>
  );
}
