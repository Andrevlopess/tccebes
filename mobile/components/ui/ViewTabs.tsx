import { s } from "@/styles/globals";
import { useEffect, useRef, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Easing,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#333" }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#666" }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export const ViewTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);


  const indicatorX = useSharedValue(0);

  console.log(indicatorX);
  
  const inputRange = routes.map((_, i) => i);

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(indicatorX.value, inputRange, [
            0,
            layout.width / routes.length,
          ]),
        },
      ],
    };
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={(i) => {
        setIndex(i);
        indicatorX.value = withSpring(i, { stiffness: 100, damping: 20 });
  console.log(indicatorX);

      }}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => {
        return (
          <View
            style={[s.flexRow, s.bgWhite, s.radius12, { position: "relative" }]}
          >
            <Animated.View
              style={[
                s.bgRed300,
                {
                  height: 2,
                  width: layout.width / routes.length,
                  position: "absolute",
                },
                indicatorStyle,
              ]}
            />

            {props.navigationState.routes.map((route, i) => {
              const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                  inputIndex === i ? 1 : 0.5
                ),
              });

              return (
                <TouchableOpacity
                  key={route.key}
                  style={[s.flex1, s.itemsCenter, s.p16]}
                  onPress={() => setIndex(i)}
                >
                  <Animated.Text style={{ opacity }}>
                    {route.title}
                  </Animated.Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}
    />
  );
};
