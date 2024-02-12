import { View, Text } from "react-native";
import React from "react";
import { s } from "@/styles/globals";

interface IWorkout {
  id: string;
  title: string;
}

export default function WorkoutCard({ id, title }: IWorkout) {
  return (
    <View style={[s.radius12, s.bgNeutral200, s.p50]}>
      <Text style={[s.bold, ]}>{title}</Text>
    </View>
  );
}
