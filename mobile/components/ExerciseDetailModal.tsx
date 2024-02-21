import { s } from "@/styles/globals";
import React, { useState } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "./ui/Modalize";
import { IExercise } from "@/types/exercise";

interface ModalProps {
  close: (dest?: "alwaysOpen" | "default" | undefined) => void;
  open: (dest?: "default" | "top" | undefined) => void;
  modalRef: any;
  exercise: IExercise;
}

const similarExercises = [
  {
    id: "0002",
    bodypart: "core",
    equipment: "peso do corpo",
    gifurl:
      "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0002.gif",
    name: "inclinação lateral a 45°",
    target: "abdômen",
  },
  {
    id: "0003",
    bodypart: "core",
    equipment: "peso do corpo",
    gifurl:
      "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0003.gif",
    name: "bicicleta no ar",
    target: "abdômen",
  },
  {
    id: "1512",
    bodypart: "quadriceps/posterior",
    equipment: "peso do corpo",
    gifurl:
      "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1512.gif",
    name: "alongamento de agachamento em quatro apoios",
    target: "quadríceps",
  },
  {
    id: "0006",
    bodypart: "core",
    equipment: "peso do corpo",
    gifurl:
      "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0006.gif",
    name: "toques alternados nos calcanhares",
    target: "abdômen",
  },
];

const exerciseSpecificationLine = (placeholder: string, value: string) => {
  return (
    <View
      style={[
        s.flexRow,
        s.justifyBetween,
        s.p24,
        s.borderGray200,
        s.itemsCenter,
        {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderStyle: "dashed",
        },
      ]}
    >
      <Text style={[s.medium]}>{placeholder}</Text>
      <Text style={[s.semibold, s.textLG, s.textCapitalize]}>{value}</Text>
    </View>
  );
};

const ExercisePreview = ({ url, index }: { url: string; index: number }) => {
  return (
    <View
      style={[
        s.radius6,
        s.border1,
        s.borderGray300,
        s.bgWhite,
        {
          overflow: "hidden",
          zIndex: 10 - index,
          marginRight: -42,
        },
      ]}
    >
      <Image
        style={{
          height: 100,
          width: 100,
        }}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

const ExerciseDetailModal = ({
  modalRef,
  close,
  open,
  exercise,
}: ModalProps) => {
  const [imageSize, setImageSize] = useState<number>(0);

  return (
    <Modal
      modalStyle={[s.flex1, s.radius12]}
      handlePosition="inside"
      // snapPoint={550}
      modalTopOffset={0}
      ref={modalRef}
      openAnimationConfig={{
        spring: { friction: 10, tension: 24 },
        timing: { duration: 280 },
      }}
      HeaderComponent={
        <View
          style={[
            s.mt24,
            s.justifyBetween,
            s.flexRow,
            s.borderGray200,
            { borderBottomWidth: StyleSheet.hairlineWidth },
          ]}
        >
          <Text style={[s.bold, s.p12, s.textLG, s.textCapitalize]}>
            {exercise.name}
          </Text>
        </View>
      }
    >
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

        {exerciseSpecificationLine("Músculo alvo:", exercise.target)}
        {exerciseSpecificationLine("Grupo muscular:", exercise.bodypart)}
        {exerciseSpecificationLine("Equipamento:", exercise.equipment)}

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
            {similarExercises.map((exercise, index) => {
              return (
                <ExercisePreview
                  key={exercise.id}
                  url={exercise.gifurl}
                  index={index}
                />
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExerciseDetailModal;
