import { View, Text, ViewProps } from "react-native";
import React, { useEffect } from "react";
import { s } from "@/styles/globals";
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnJS,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface BadgeProps extends ViewProps {
  children: React.ReactNode;
}

export default function Badge({ children, style, ...props }: BadgeProps) {

  const width = useSharedValue(0);

  const animatedWidth = useAnimatedStyle(() => {
    const interpolated = interpolate(width.value, [0, 1], [100, 100])
    
    return {
      width: `${interpolated}%`
    }
  })

  function handleLayout(eventWidth: number) {
    width.value = withSpring(eventWidth);
  }


  return (
    <Animated.View
      onLayout={({ nativeEvent }) => {
        handleLayout(nativeEvent.layout.width);
      }}
      {...props}
      style={[s.radiusFull, s.border1, s.borderGray200, s.px12, s.py6, style, animatedWidth ]}
    >
      {children}
    </Animated.View>
  );
}
