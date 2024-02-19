import { containerWidth, s } from "@/styles/globals";
import { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { View, useWindowDimensions, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

interface ViewTabsProps {
  screens: {
    key: string;
    title: string;
  }[];
  sceneMap: {
    [key: string]: React.ComponentType;
  };
}


const PADDING = 14;

export const ViewTabs = ({ screens, sceneMap }: ViewTabsProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(screens);

  const translateX = useSharedValue(0);

  const handleChangeTab = () => {
    translateX.value = withSpring(
      (containerWidth / routes.length) * index + PADDING / 2,
      {
      duration: 250,
      dampingRatio: 3,
      stiffness: 500,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    });
  };
  useEffect(handleChangeTab, [index]);

  console.log();
  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(sceneMap)}
      swipeEnabled={false}
      onIndexChange={setIndex}
      style={[s.gap12]}
      initialLayout={{ width: layout.width}}
      renderTabBar={(props) => {
        return (
          <View
            style={[
              { position: "relative" },
              s.flexRow,
              s.bgWhite, 
              s.radius6,
            ]}
          >
            <Animated.View
              style={[
                {
                  height: "80%",
                  top: PADDING / 3,
                  width: (containerWidth / routes.length) - PADDING,
                  position: "absolute",
                  transform: [{ translateX }],
                },
                s.bgViolet200,
                s.radius6,
              ]}
            />

            {props.navigationState.routes.map((route, i) => {
              return (
                <TouchableOpacity
                  key={route.key}
                  activeOpacity={0.8}
                  style={[s.flex1, s.itemsCenter, {padding: PADDING}]}
                  onPress={() => setIndex(i)}
                >
                  <Animated.Text
                    style={[
                      s.bold,
                      i === index ? s.textViolet700 : s.textGray800,
                    ]}
                  >
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
