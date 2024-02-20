import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { s } from "@/styles/globals";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface Props {
  height?: number;
  circle?: boolean;
}

export default function Skeleton({ height = 100, circle }: Props) {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(opacity.value, [0, 0.5, 1], [1, 0.6, 1]),
    };
  });

  opacity.value = withRepeat(
    withTiming(1 - opacity.value, { duration: 1000 }),
    0
  );

  return (
    <Animated.View
      style={[
        s.bgGray200,
        animatedStyle,
        { height, width: circle ? height : "100%" },
        circle ? s.radiusFull : s.radius12,
      ]}
    />
  );
}
