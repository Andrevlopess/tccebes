import { View, Text, Dimensions, FlatList, Image } from "react-native";
import React from "react";
import { s } from "@/styles/globals";

interface IWorkout {
  id: string;
  title: string;
  exercises: IExercises[];
}

const WIDTH = Dimensions.get("screen").width / 1.5;

const ExercisePreview = ({ url, index }: { url: string; index: number }) => {
  return (
    <Image
      style={[
        {
          height: 50 - index,
          width: 50 - index * 2,
          marginRight: -16,
          zIndex: 10 - index,
          opacity: 1 - index / 10,
        },
        s.border1,
        s.borderGray200,
        s.radius6,
      ]}
      source={{
        uri: url,
      }}
    />
  );
};

export default function WorkoutCard({ workout }: { workout: IWorkout }) {
  return (
    <View
      style={[
        s.radius12,
        s.bgNeutral100,
        s.p24,
        s.gap12,
        s.bgWhite,
        s.border1,
        s.borderGray300,
        { width: WIDTH },
      ]}
    >
      <Text style={[s.bold, s.textBase]}>{workout.title}</Text>

      {workout.exercises && (
        <View style={[s.flexRow, s.itemsCenter, s.mt6]}>
          {workout.exercises.map((exercise, index) => {
            return (
              <ExercisePreview
                key={exercise.id}
                url={exercise.gifUrl}
                index={index}
              />
            );
          })}
        </View>
      )}

      <Text style={[s.regular, s.textGray700]}>
        {workout.exercises.length} exercícios
      </Text>
    </View>
  );
}
