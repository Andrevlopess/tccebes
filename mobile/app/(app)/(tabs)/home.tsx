import WorkoutCard from "@/components/WorkoutCard";
import { useAuth } from "@/hooks/useAuth";
import { s } from "@/styles/globals";
import { useRef } from "react";
import { View, Text, Pressable, FlatList, Animated } from "react-native";

const workouts = [
  { id: "1", title: "Treino A" },
  { id: "2", title: "Treino B" },
  { id: "3", title: "Treino C" },
  { id: "4", title: "Treino D" },
  { id: "5", title: "Treino E" },
];

const HomePage = () => {
  const { signOut, session } = useAuth();


  const scroll = useRef(new Animated.Value(0)).current

  return (
    <View style={{ padding: 8, gap:24 }}>
      <Text>HomePage</Text>
      <Text>
        {session?.user.email}
        <br />
        {session?.user.id}
      </Text>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8
        }}
        renderItem={({ item }) => (
          <WorkoutCard
            id={item.id}
            title={item.title}
          />
        )}
      />
    </View>
  );
};
export default HomePage;
