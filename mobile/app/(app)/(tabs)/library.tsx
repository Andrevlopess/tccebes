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
import { useAuth } from "@/hooks/useAuth";

const badges = [
  {
    id: "1 changing files",
    title: "basssdge1",
  },
];

const LibraryScreen = () => {
  return <ExerciseListRender renderFunctionName="get_exercises_by_name" />;
};

const FavoritesScreen = () => {
  const { session } = useAuth();

  // todo replace session user_id
  return (
    <ExerciseListRender
      renderFunctionName="get_liked_exercises_by_user"
      params={{ user_id: "84f13dde-923f-4aa7-a706-4d2810f12c3c" }}
    />
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
