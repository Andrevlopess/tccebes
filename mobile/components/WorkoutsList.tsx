import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import { s } from "@/styles/globals";

const workouts = [
  {
    id: "1",
    title: "Treino A",
    exercises: [
      {
        id: "2363",
        bodyPart: "peito",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2363.gif",
        name: "mergulho de peito com pegada larga em barras paralelas altas",
        target: "peitoral",
      },
      {
        id: "0858",
        bodyPart: "core",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0858.gif",
        name: "sprints de vento",
        target: "abdômen",
      },
      {
        id: "1604",
        bodyPart: "quadriceps/posterior",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1604.gif",
        name: "alongamento do maior do mundo",
        target: "isquiotibiais",
      },
      {
        id: "1428",
        bodyPart: "antebraço",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        name: "círculos de pulso",
        target: "antebraços",
      },
      {
        id: "0859",
        bodyPart: "antebraço",
        equipment: "anilha",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0859.gif",
        name: "rolo de pulso",
        target: "antebraços",
      },
    ],
  },
  {
    id: "2",
    title: "Treino B",
    exercises: [
      
      {
        id: "0858",
        bodyPart: "core",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0858.gif",
        name: "sprints de vento",
        target: "abdômen",
      },
      {
        id: "1604",
        bodyPart: "quadriceps/posterior",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1604.gif",
        name: "alongamento do maior do mundo",
        target: "isquiotibiais",
      },
      {
        id: "1428",
        bodyPart: "antebraço",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        name: "círculos de pulso",
        target: "antebraços",
      },
      {
        id: "0859",
        bodyPart: "antebraço",
        equipment: "anilha",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0859.gif",
        name: "rolo de pulso",
        target: "antebraços",
      },
    ],
  },
  {
    id: "3",
    title: "Treino C",
    exercises: [
      {
        id: "2363",
        bodyPart: "peito",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2363.gif",
        name: "mergulho de peito com pegada larga em barras paralelas altas",
        target: "peitoral",
      },
      {
        id: "0858",
        bodyPart: "core",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0858.gif",
        name: "sprints de vento",
        target: "abdômen",
      },
     
      {
        id: "1428",
        bodyPart: "antebraço",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        name: "círculos de pulso",
        target: "antebraços",
      },
      {
        id: "0859",
        bodyPart: "antebraço",
        equipment: "anilha",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0859.gif",
        name: "rolo de pulso",
        target: "antebraços",
      },
    ],
  },
  {
    id: "4",
    title: "Treino D",
    exercises: [
      {
        id: "2363",
        bodyPart: "peito",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2363.gif",
        name: "mergulho de peito com pegada larga em barras paralelas altas",
        target: "peitoral",
      },
      {
        id: "0858",
        bodyPart: "core",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0858.gif",
        name: "sprints de vento",
        target: "abdômen",
      },
      {
        id: "1604",
        bodyPart: "quadriceps/posterior",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1604.gif",
        name: "alongamento do maior do mundo",
        target: "isquiotibiais",
      },
      {
        id: "1428",
        bodyPart: "antebraço",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        name: "círculos de pulso",
        target: "antebraços",
      },
      {
        id: "1428",
        bodyPart: "antebraço",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        name: "círculos de pulso",
        target: "antebraços",
      },
      {
        id: "1428",
        bodyPart: "antebraço",
        equipment: "peso do corpo",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        name: "círculos de pulso",
        target: "antebraços",
      },
      {
        id: "0859",
        bodyPart: "antebraço",
        equipment: "anilha",
        gifUrl:
          "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0859.gif",
        name: "rolo de pulso",
        target: "antebraços",
      },
    ],
  },
];

const CARD_WIDTH = Dimensions.get("screen").width / 1.5

export default function WorkoutsList() {
  return (
    <FlatList
      horizontal
      contentContainerStyle={[s.gap6]}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH - 12}
      data={workouts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <WorkoutCard workout={item} />}
    />
  );
}
