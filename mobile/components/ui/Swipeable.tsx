import React, { useRef } from "react";
import { Animated, I18nManager, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { s } from "@/styles/globals";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Heart } from "lucide-react-native";

interface Props {
  children: React.ReactNode;
}

const SwipeableCard: React.FC<Props> = ({ children }) => {
  const swipeableRow = useRef<Swipeable>(null);

  const renderLeftActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
      extrapolate: "clamp",
    });

    return (
      <RectButton style={[s.justifyCenter, s.bgGreen500, s.flex1]} onPress={close}>
        <Animated.Text
          style={[
            s.regular,
            s.px24,
            s.textWhite,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  const renderRightAction = (
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      close();
      window.alert(text);
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Heart color={'#fff'}/>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => (
    <View style={{ width: 192, flexDirection: I18nManager.isRTL ? "row-reverse" : "row" }}>
      {renderRightAction("", "#ef4444", 192, progress)}
    </View>
  );


  const close = () => {
    swipeableRow.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRow}
      friction={2}
      enableTrackpadTwoFingerGesture
      leftThreshold={35}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableOpen={(direction) => {
        console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={(direction) => {
        console.log(`Closing swipeable to the ${direction}`);
      }}
    >
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default SwipeableCard;
