import WorkoutCard from "@/components/WorkoutCard";
import WorkoutsList from "@/components/WorkoutsList";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { s } from "@/styles/globals";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { View, Text, Pressable, FlatList, Animated } from "react-native";

const workouts = [
  { id: "1", title: "Treino A" },
  { id: "2", title: "Treino B" },
  { id: "3", title: "Treino C" },
  { id: "4", title: "Treino D" },
  { id: "5", title: "Treino E" },
];

const HomePage = () => {
  const { session } = useAuth();

  const getfiles = async () => {
    const { data, error } = await supabase.storage
      .from("exercises-demos")
      .list("", { limit: 1500 });

    console.log(data);
  };

  // useEffect(() => {
  //   getfiles();
  // }, []);

  return (
    <View style={[s.container, s.bgSnowWhite, s.gap24]}>
      <Text style={[s.bold, s.textXL]}>
        Olá, {session?.user.user_metadata.username}
      </Text>

      <View style={[s.gap16]}>
        <Text style={[s.semibold, s.textBase]}>Meus treinos</Text>
        <WorkoutsList />
      </View>
    </View>
  );
};
export default HomePage;
