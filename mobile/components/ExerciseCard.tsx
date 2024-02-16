import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { s } from "@/styles/globals";
import { IExercise } from "@/types/exercise";
import { useModalize } from "react-native-modalize";
import ExerciseDetailModal from "./ExerciseDetailModal";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import AppleStyleSwipeableRow from "./ui/AppleSwipeableRow";
import SwipeableCard from "./ui/Swipeable";

interface IRow {
  exercise: IExercise;
  openModal: (dest?: "default" | "top" | undefined) => void;
}

const Row = ({ exercise, openModal }: IRow) => (
  <RectButton
    underlayColor="#fff"
    style={[s.flex1, s.px20, s.py10, s.bgWhite, s.flexRow]}
    onPress={() => openModal()}
  >
    <View style={[s.px12, s.justifyCenter, s.bgWhite]}>
      <Image
        source={{
          uri: exercise.gifUrl,
          width: 50,
          height: 50,
        }}
      />
    </View>

    <View style={[s.p8, s.justifyBetween, { flexShrink: 1 }]}>
      <Text style={[s.semibold, s.flex1, { textTransform: "capitalize" }]}>
        {exercise.name}
      </Text>
      <Text style={[s.medium, s.textSM, s.textGray700, s.mt4, s.textCapitalize]}>
        {exercise.target}
      </Text>
    </View>
  </RectButton>
);

export default function ExerciseCard({ exercise }: { exercise: IExercise }) {
  const { ref, open, close } = useModalize();

  return (
    <>
      <SwipeableCard>
        <Row
          exercise={exercise}
          openModal={open}
        />
      </SwipeableCard>

      <ExerciseDetailModal
        exercise={exercise}
        modalRef={ref}
        close={close}
        open={open}
      />
    </>
  );
}
