import { s } from "@/styles/globals";
import { useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

export default function ExeciseDetailPage() {
  const { id } = useLocalSearchParams();
  const [imageSize, setImageSize] = useState<number>(0);

  const exercise = {
    id: "0002",
    bodypart: "core",
    equipment: "peso do corpo",
    gifurl:
      "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0002.gif",
    name: "inclinação lateral a 45°",
    target: "abdômen",
  };

  return (
    <View style={[s.container]}>
      <View
        style={[s.flex1]}
        onLayout={({ nativeEvent }) => {
          setImageSize(nativeEvent.layout.width);
        }}
      >
        <View style={[s.p12, s.bgWhite]}>
          <Image
            style={{ maxHeight: 600 }}
            source={{
              uri: exercise.gifurl,
              width: imageSize - 24,
              height: imageSize - 24,
            }}
          />
        </View>

        <View style={[s.py24, s.px12]}>
          <View style={[s.justifyBetween, s.flexRow, s.itemsCenter]}>
            <Text style={[s.semibold, s.textLG]}>Exercícios semelhantes</Text>
            <TouchableOpacity
              style={[s.bgViolet100, s.radius12, s.px24, s.py12]}
            >
              <Text style={[s.textViolet600, s.semibold]}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={[s.flexRow, s.itemsCenter, s.mt6]}>
            {/* {similarExercises.map((exercise, index) => {
              return (
                <ExercisePreview
                  key={exercise.id}
                  url={exercise.gifurl}
                  index={index}
                />
              );
            })} */}
          </View>
        </View>
      </View>
    </View>
  );
}
