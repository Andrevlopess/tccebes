import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { containerWidth, s } from "@/styles/globals";
import { ScrollView } from "react-native";
import DisponibleWorkoutsList from "@/components/DisponibleWorkoutsList";

export default function AddExerciseToModal() {
  return (
    <View style={[s.flex1, s.p12, s.bgWhite, s.gap24]}>

      <TouchableOpacity
        onPress={() => router.back()}
        style={[s.bgViolet600, s.radius12, s.px12, s.py12]}
      >
        <Text style={[s.medium, s.textWhite, s.textCenter]}>Salvar</Text>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[s.flex1, s.gap24]}
      >
        <TouchableOpacity
          onPress={() => router.push("/(app)/(modals)/new-workout")}
          style={[s.border2, s.borderViolet600, s.radius12, s.px12, s.py12]}
        >
          <Text style={[s.medium, s.textViolet700, s.textCenter]}>Novo treino</Text>
        </TouchableOpacity>

        <DisponibleWorkoutsList />
        <DisponibleWorkoutsList />
        <DisponibleWorkoutsList />
        <DisponibleWorkoutsList />
        <DisponibleWorkoutsList />
      </ScrollView>
    </View>
  );
}
