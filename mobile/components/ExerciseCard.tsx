import {
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import { s } from "@/styles/globals";
import { IExercise } from "@/types/exercise";
import { useModalize } from "react-native-modalize";
import ExerciseDetailModal from "./ExerciseDetailModal";


export default function ExerciseCard({ exercise }: { exercise: IExercise }) {
  const { ref, open, close } = useModalize();
  
  console.log(exercise);
  

  return (
    <>
      <TouchableOpacity
        onPress={() => open()}
        style={[s.flexRow, s.gap12, s.px20, s.py10, s.bgWhite, s.radius12]}
      >
        <View style={[s.p12, s.justifyCenter, s.bgWhite]}>
          <Image
            source={{
              uri: exercise.gifurl,
              width: 50,
              height: 50,
            }}
          />
        </View>

        <View style={[s.p8, s.justifyBetween, { flexShrink: 1 }]}>
          <Text style={[s.semibold, s.flex1, { textTransform: "capitalize" }]}>
            {exercise.name}
          </Text>
          <Text
            style={[s.medium, s.textSM, s.textGray700, s.mt4, s.textCapitalize]}
          >
            {exercise.target}
          </Text>
        </View>
      </TouchableOpacity>

      <ExerciseDetailModal
        exercise={exercise}
        modalRef={ref}
        close={close}
        open={open}
      />
    </>
  );
}
