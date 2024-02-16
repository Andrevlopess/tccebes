import { s } from "@/styles/globals";
import React, { useState } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Modal from "./ui/Modalize";
import { IExercise } from "@/types/exercise";

interface ModalProps {
  close: (dest?: "alwaysOpen" | "default" | undefined) => void;
  open: (dest?: "default" | "top" | undefined) => void;
  modalRef: any;
  exercise: IExercise;
}

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
      snapPoint={550}
      modalTopOffset={25}
      ref={modalRef}
      openAnimationConfig={{
        spring: { friction: 15, tension: 24 },
        timing: { duration: 280 },
      }}
      HeaderComponent={
        <View style={[
          s.mt24,
           s.justifyBetween, 
           s.flexRow,
          s.borderGray200,
          {borderBottomWidth: StyleSheet.hairlineWidth}
        ]}>
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
            style={{maxHeight: 600}}
            source={{
              uri: exercise.gifUrl,
              width: imageSize - 24,
              height: imageSize - 24,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ExerciseDetailModal;
