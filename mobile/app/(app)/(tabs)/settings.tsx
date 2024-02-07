import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text>settings for user - {user?.id} </Text>
    </View>
  );
}
