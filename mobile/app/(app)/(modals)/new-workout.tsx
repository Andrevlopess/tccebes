import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { s } from "@/styles/globals";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
import NewWorkoutForm from "@/components/NewWorkoutForm";


export default function AddExerciseToModal() {


  return (
    <View style={[s.flex1, s.bgWhite, s.justifyCenter]}>
      <NewWorkoutForm/>
    </View>
  );
}
