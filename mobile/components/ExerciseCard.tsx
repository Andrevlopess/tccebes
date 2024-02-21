import { View, Text, Image, Pressable, Animated } from "react-native";
import React, { useState, useRef, LegacyRef, useEffect } from "react";
import { s } from "@/styles/globals";
import { IExercise } from "@/types/exercise";
import { useModalize } from "react-native-modalize";
import ExerciseDetailModal from "./ExerciseDetailModal";
import { Directions, Swipeable } from "react-native-gesture-handler";
import { Heart } from "lucide-react-native";
import handleLikeExercise from "@/supabase/like-exercise";
import { router } from "expo-router";

export default function ExerciseCard({ exercise }: { exercise: IExercise }) {
  const { ref, open, close } = useModalize();

  let swipeable: Swipeable;

  const updateRef = (ref: Swipeable) => {
    swipeable = ref;
  };

  const [liked, setLiked] = useState(false);

  const renderRightAction = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[
          s.itemsCenter,
          s.justifyCenter,
          { marginHorizontal: 24, transform: [{ scale }] },
        ]}
      >
        <Pressable style={[s.radiusFull, s.bgRed100, s.p12]}>
          <Heart color={"#dc2626"} />
        </Pressable>
      </Animated.View>
    );
  };


  const renderLeftAction = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      // extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[
          s.itemsCenter,
          s.justifyCenter,
          { marginHorizontal: 24, transform: [{ scale }] },
        ]}
      >
        <Pressable style={[s.radiusFull, s.bgRed100, s.p12]}>
          <Heart
            color={"#dc2626"}
            fill={liked ? "#dc2626" : "transparent"}
          />
        </Pressable>
      </Animated.View>
    );
  };

  const handleSwipeableOpen = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        console.log("like exercise");
        handleLikeExercise(exercise.id);
        swipeable?.close();
        break;
      case "right":
        console.log("add to workout");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Swipeable
        ref={updateRef}
        renderLeftActions={renderLeftAction}
        // renderRightActions={renderRightAction}
        onSwipeableOpen={handleSwipeableOpen}
        overshootFriction={30}
        // onSwipeableWillOpen={handleSwipeableOpen}
        // onSwipeableWillClose={(direction) => {console.log('closing to', direction)}}
        // overshootLeft={false}
        overshootRight={false}
      >
        <Pressable
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
            <Text
              style={[s.semibold, s.flex1, { textTransform: "capitalize" }]}
            >
              {exercise.name}
            </Text>
            <Text
              style={[
                s.medium,
                s.textSM,
                s.textGray700,
                s.mt4,
                s.textCapitalize,
              ]}
            >
              {exercise.target}
            </Text>
          </View>
        </Pressable>
      </Swipeable>

      <ExerciseDetailModal
        exercise={exercise}
        modalRef={ref}
        close={close}
        open={open}
      />
    </>
  );
}
