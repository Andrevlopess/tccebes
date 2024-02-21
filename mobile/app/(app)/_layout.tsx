import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="exercises/[id]"
        options={{
         headerBackTitleVisible: false,
         headerTitle: 'Detalhes'
        }}
      />
    </Stack>
  );
}
