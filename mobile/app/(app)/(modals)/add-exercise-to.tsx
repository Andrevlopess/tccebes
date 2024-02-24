import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { containerWidth, s } from "@/styles/globals";
import { ScrollView } from "react-native";
import DisponibleWorkoutsList from "@/components/DisponibleWorkoutsList";

export default function AddExerciseToModal() {
  const width = Dimensions.get("screen").width;

  return (
    <View style={[s.flex1, s.p12, s.bgWhite]}>
      <TouchableOpacity
        onPress={() => router.push("/(app)/(modals)/new-workout")}
        style={[s.border2, s.borderViolet600, s.radius12, s.px12, s.py12]}
      >
        <Text style={[s.medium, s.textViolet700, s.textCenter]}>
          Novo treino
        </Text>
      </TouchableOpacity>

      <DisponibleWorkoutsList />

      <View
        style={[
          s.itemsCenter,
          { position: "absolute", zIndex: 99, bottom: 24, width },
        ]}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={[
            s.bgViolet600,
            s.radius6,
            s.px36,
            s.py12,
            s.shadow6,
            { width: width - 36 },
          ]}
        >
          <Text style={[s.medium, s.textWhite, s.textCenter, s.textBase]}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
