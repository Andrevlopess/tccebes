import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";

export default function RootLayout() {
  const isModalPresented = router.canGoBack();

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
          headerTitle: "Detalhes",
        }}
      />
      <Stack.Screen
        name="(modals)/add-exercise-to"
        options={{
          headerLeft: () => isModalPresented && <Link href={".."}>Cancelar</Link>,
          title: "Adicionar a um treino",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="(modals)/new-workout"
        options={{
          headerLeft: () => isModalPresented && <Link href={".."}>Cancelar</Link>,
          title: "Novo treino",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
