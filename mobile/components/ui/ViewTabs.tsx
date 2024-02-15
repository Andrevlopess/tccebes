import { containerWidth, s } from "@/styles/globals";
import { useEffect, useRef, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";


const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#3ff3" }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#666" }} />;

interface ViewTabsProps {
  screens: {
    key: string;
    title: string;
  }[],
  sceneMap?: {
    [key: string]: React.ComponentType
  }
}

export const ViewTabs = ({ screens, sceneMap }: ViewTabsProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState(screens);
  // console.log(routes, screens);
  

  const translateX = useSharedValue(0);
  const handleChangeTab = () => {
    translateX.value = withTiming((containerWidth / routes.length) * index);
  };
  useEffect(handleChangeTab, [index]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
      onIndexChange={setIndex}
      style={[s.gap12]}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => {
        return (
          <View
            style={[
              { position: "relative" },
              s.flexRow,
              s.bgSnowWhite,
              s.radius6,
            ]}
          >
            <Animated.View
              style={[
                {
                  height: "100%",
                  width: containerWidth / routes.length,
                  position: "absolute",
                  transform: [{ translateX }],
                },
                s.bgViolet600,
                s.radius6,
              ]}
            />

            {props.navigationState.routes.map((route, i) => {

              console.log(route);
              
              return (
                <TouchableOpacity
                  key={route.key}
                  style={[s.flex1, s.itemsCenter, s.px12, s.py8]}
                  onPress={() => setIndex(i)}
                >
                  <Animated.Text
                    style={[
                      s.medium,
                      i === index ? s.textWhite : s.textGray800,
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
