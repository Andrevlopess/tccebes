import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { s } from "@/styles/globals";
import { IExercise } from "@/types/exercise";
import Badge from "./ui/Badge";
import ExerciseDetailModal from "./ExerciseDetailModal";

export default function ExerciseCard({
  id,
  bodyPart,
  name,
  equipment,
  gifUrl,
  target,
}: IExercise) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        activeOpacity={0.7}
        style={[
          s.flexRow,
          s.radius12,
          s.bgWhite,
          s.border1,
          s.borderGray200,
          { overflow: "hidden" },
        ]}
      >
        <View style={[s.p12, s.bgWhite]}>
          <Image
            source={{
              uri: gifUrl,
              width: 100,
              height: 100,
            }}
          />
        </View>

        <View style={[s.px8, s.py16, { flexShrink: 1 }]}>
          <Text style={[s.semibold, s.flex1, { textTransform: "capitalize" }]}>
            {name}
          </Text>

          {/* <Badge>
          <Text style={[s.medium, { textTransform: "capitalize" }]}>
            {target}
          </Text>
        </Badge> */}
        </View>
      </TouchableOpacity>

      <ExerciseDetailModal
        setVisible={setIsModalVisible}
        visible={isModalVisible}
      />
    </>
  );
}
