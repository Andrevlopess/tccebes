import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "@/styles/globals";
import { FlatList } from "react-native";
import { Check } from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface IWorkoutListCard {
  id: string;
  title: string;
  image: string | null;
  alreadyAdded: boolean;
  exercisesLength: number;
  selected: boolean;
  onSelect: (id: string) => void;
}
const WorkoutListCard = ({
  id,
  image,
  title,
  alreadyAdded,
  exercisesLength,
  selected,
  onSelect,
}: IWorkoutListCard) => {
  const translateX = useSharedValue(50);
  const opacity = useSharedValue(0);
  translateX.value = withSpring(selected ? 0 : 50, {
    duration: 500,
    dampingRatio: 0.9,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
  });

  opacity.value = withTiming(selected ? 1 : 0);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onSelect(id)}
      style={[
        s.flex1,
        s.px24,
        s.py12,
        s.flexRow,
        s.gap24,
        s.radius12,
        s.itemsCenter,
      ]}
    >
      <Image
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        }}
        source={{
          uri:
            image ??
            "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0002.gif",
          height: 50,
          width: 50,
        }}
      />
      <View style={[s.flex1]}>
        <Text style={[s.semibold, s.textCapitalize, s.textBase]}>
          {title}
        </Text>
        <Text
          style={[
            s.regular,
            s.textGray300,
            s.textCapitalize,
            s.textSM,
            s.flex1,
          ]}
        >
          {exercisesLength} exercícios
        </Text>
      </View>

      {selected && (
        <Animated.View style={{ opacity, transform: [{ translateX }] }}>
          <Check />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default function DisponibleWorkoutsList() {
  const [selectedWorkouts, setSelectedWorkouts] = useState<string[]>([]);

  const workouts: Omit<IWorkoutListCard, "selected" | "onSelect">[] = [
    {
      id: "1",
      title: "treino a",
      image: null,
      alreadyAdded: false,
      exercisesLength: 2,
    },
    {
      id: "2",
      title: "treino b",
      image: null,
      alreadyAdded: false,
      exercisesLength: 6,
    },
    {
      id: "3",
      title: "treino b",
      image: null,
      alreadyAdded: false,
      exercisesLength: 0,
    },
    {
      id: "4",
      title: "treino c",
      image: null,
      alreadyAdded: false,
      exercisesLength: 2,
    },
  ];

  function handleSelectWorkout(id: string) {
    selectedWorkouts.includes(id)
      ? setSelectedWorkouts(
          selectedWorkouts.filter((workoutId) => workoutId !== id)
        )
      : setSelectedWorkouts([...selectedWorkouts, id]);
  }

  useEffect(() => {
    console.log(selectedWorkouts);
  }, [selectedWorkouts]);

  return (
    <View style={[s.gap12]}>
      <WorkoutListCard
        id="favorite"
        title="Exercícios Favoritos"
        alreadyAdded
        exercisesLength={100}
        image="../../assets/images/LikedImage.png"
        onSelect={handleSelectWorkout}
        selected={true}
      />

      <FlatList
        contentContainerStyle={[s.py12, s.gap4, s.borderGray200, {borderTopWidth: 1 }]}
        data={workouts}
        renderItem={({ item }) => (
          <WorkoutListCard
            {...item}
            onSelect={handleSelectWorkout}
            selected={selectedWorkouts.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
