import React from "react";
import { Tabs } from "expo-router";
import { Home, Settings } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: (({color}) => <Home color={color}/>),

        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: (({color}) => <Settings color={color}/>),
        }}
      />
    </Tabs>
  );
}
