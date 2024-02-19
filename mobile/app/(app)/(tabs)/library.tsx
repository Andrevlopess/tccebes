import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { s } from "@/styles/globals";
import IconInput from "@/components/ui/IconInput";
import { Check, Search } from "lucide-react-native";
import ExerciseCard from "@/components/ExerciseCard";
import { ViewTabs } from "@/components/ui/ViewTabs";
import debounce from "@/utils/debounce";
import { supabase } from "@/lib/supabase";
import { IExercise } from "@/types/exercise";
import Badge from "@/components/ui/Badge";
import ExerciseListRender from "@/components/ExercisesListRender";

const badges = [
  {
    id: "1",
    title: "basssdge1",
  },
];

const LibraryScreen = () => {
  return <ExerciseListRender />;
};

const FavoritesScreen = () => {
  return (
    <View style={[s.gap24]}>
      <View style={[s.gap12]}>
        <IconInput
          placeholder="Busque por um exercício"
          icon={<Search />}
        />
      </View>
    </View>
  );
};

export default function LibraryPage() {
  return (
    <View style={[s.container, s.bgSnowWhite, s.gap24]}>
      <Text style={[s.bold, s.textXL]}>Biblioteca</Text>

      <ViewTabs
        screens={[
          { key: "first", title: "Todos" },
          { key: "second", title: "Favoritos" },
        ]}
        sceneMap={{
          first: LibraryScreen,
          second: FavoritesScreen,
        }}
      />
    </View>
  );
}
