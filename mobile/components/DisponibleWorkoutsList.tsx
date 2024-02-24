import { View, Text, TouchableOpacity } from "react-native";
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
import { Image } from 'expo-image';

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

  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onSelect(id)}
      style={[
        s.flex1,
        s.p12,
        s.flexRow,
        s.gap24,
        s.radius12,
        s.itemsCenter,
        {paddingRight: 24}
      ]}
    >
      <Image
        style={[s.shadow4, {height: 50, width: 50}]}
        source={image}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
      />

      <View style={[s.flex1]}>
        <Text style={[s.semibold, s.textCapitalize, s.textBase]}>
          {title}
        </Text>
        <Text
          style={[
            s.regular,
            s.textGray500,
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
      id: "10",
      title: "Exercíos favoritos",
      image: null,
      alreadyAdded: false,
      exercisesLength: 2,
    },
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
      id: "32",
      title: "treino b",
      image: null,
      alreadyAdded: false,
      exercisesLength: 0,
    },
    {
      id: "321",
      title: "treino b",
      image: null,
      alreadyAdded: false,
      exercisesLength: 0,
    },
    {
      id: "33",
      title: "treino b",
      image: null,
      alreadyAdded: false,
      exercisesLength: 0,
    },
    {
      id: "3123",
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
    <View style={[s.gap12, s.mt24, {marginBottom: 42}]}>
      
      {/* <TouchableOpacity
          style={[
            s.bgViolet600,
            s.radius6,
            s.px36,
            s.py12,
            s.shadow6,
          ]}
        >
          <Text style={[s.medium, s.textWhite, s.textCenter, s.textBase]}>
            
          </Text>
        </TouchableOpacity> */}


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
