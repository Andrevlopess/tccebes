import WorkoutsList from "@/components/WorkoutsList";
import Skeleton from "@/components/ui/Skeleton";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { s } from "@/styles/globals";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const workouts = [
  { id: "1", title: "Treino A" },
  { id: "2", title: "Treino B" },
  { id: "3", title: "Treino C" },
  { id: "4", title: "Treino D" },
  { id: "5", title: "Treino E" },
];

const HomePage = () => {
  const { session } = useAuth();

  // useEffect(() => {
  //   getfiles();
  // }, []);

  return (
    <View style={[s.container, s.bgSnowWhite, s.gap24]}>
      <Text style={[s.bold, s.textXL]}>
        Olá, {session?.user.user_metadata.username}
      </Text>

      <View style={[s.gap16]}>
        <Text style={[s.semibold, s.textBase, s.px4]}>Meus treinos</Text>
        <WorkoutsList />
      </View>

      
    </View>
  );
};
export default HomePage;
