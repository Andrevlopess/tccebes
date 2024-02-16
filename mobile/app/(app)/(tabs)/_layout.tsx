import React from "react";
import { Tabs } from "expo-router";
import TabHome from "@/assets/icons/TabHome";
import TabAccount from "@/assets/icons/TabAccount";
import TabLibrary from "@/assets/icons/TabLibrary";
import { Host } from "react-native-portalize";
import { s } from "@/styles/globals";

export default function TabLayout() {
  return (
      <Tabs
        initialRouteName="library"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#7c3aed",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
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
            title: "Library",
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
            title: "Account",
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
