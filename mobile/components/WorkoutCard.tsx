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
    <View
      style={[
        s.radius6,
        s.border1,
        s.borderGray300,
        s.bgWhite,
        {
          overflow: 'hidden',
          zIndex: 10 - index,
          marginRight: -42,
        }
      ]}>
      <Image
        style={{
          height: 75,
          width: 75
        }}
        source={{
          uri: url,
        }}
      />
    </View>
  )
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
          {workout.exercises.slice(0, 3).map((exercise, index) => {
            return (
              <ExercisePreview
                key={exercise.id}
                url={exercise.gifUrl}
                index={index}
              />
            );
          })}

          <View
            style={[
              {
                height: 75,
                width: 75,
                marginLeft: 24
              },
              s.radius6,
              s.bgGray100,
              s.itemsCenter,
              s.justifyCenter
            ]}>
            <Text style={[s.bold, s.text4XL, s.textGray400]}>{workout.exercises.length - 2}</Text>
          </View>
        </View>
      )}

      <Text style={[s.regular, s.textGray700]}>
        {workout.exercises.length} exercícios
      </Text>
    </View>
  );
}
