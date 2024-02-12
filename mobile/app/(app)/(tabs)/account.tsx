import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import { s } from "@/styles/globals";
import { LogOut } from "lucide-react-native";

export default function AccountPage() {
  const [isLoading, setIsLoading] = useState<boolean>();

  const { signOut } = useAuth();

  async function handleSignOut() {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <TouchableOpacity
        onPress={handleSignOut}
        style={[
          s.bgViolet600,
          s.radius14,
          s.px24,
          s.py18,
          s.flexRow,
          s.itemsCenter,
          s.gap12,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={"#fff"} />
        ) : (
          <>
            <LogOut color={"white"} />
            <Text style={[s.textGray50, s.semibold]}>Logout</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
