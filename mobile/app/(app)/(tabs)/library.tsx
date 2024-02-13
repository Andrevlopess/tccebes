import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "@/styles/globals";
import { supabase } from "@/lib/supabase";

export default function LibraryPage() {
  async function insertTargets() {
    const { data, error } = await supabase
      .from("body_parts")
      .insert([
        { name: "costas" },
        { name: "cardio" },
        { name: "peito" },
        { name: "antebraço" },
        { name: "panturrilha" },
        { name: "pescoço" },
        { name: "ombro" },
        { name: "biceps/triceps" },
        { name: "quadriceps/posterior" },
        { name: "core" },
      ])
      .select();

    console.log(data, error);
  }

  return (
    <View style={[s.container, s.bgSnowWhite, s.gap24]}>
      <Text style={[s.bold, s.textXL]}>Biblioteca</Text>

      <TouchableOpacity onPress={() => insertTargets()}>
        <Text>Insert</Text>
      </TouchableOpacity>
    </View>
  );
}
