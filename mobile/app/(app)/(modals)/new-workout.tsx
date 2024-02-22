import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { s } from "@/styles/globals";


export default function AddExerciseToModal() {
  return (
    <View style={[s.flex1, s.p12, s.bgWhite, s.gap24, s.itemsStart]}>
      <Text>New workout modal</Text>
    </View>
  );
}
