import React from "react";
import { Tabs } from "expo-router";
import TabHome from "@/assets/icons/TabHome";
import TabAccount from "@/assets/icons/TabAccount";
import TabLibrary from "@/assets/icons/TabLibrary";

export default function TabLayout() {
  return (
    <Tabs  initialRouteName="home" sceneContainerStyle={{}}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#7c3aed",
          tabBarIcon: ({ color, focused }) => (
            <TabHome
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          headerShown: false,
          title: "Library",
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#7c3aed",
          tabBarIcon: ({ color, focused }) => (
            <TabLibrary
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarActiveTintColor: "#7c3aed",
          headerShown: false,
          title: "Account",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabAccount
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
