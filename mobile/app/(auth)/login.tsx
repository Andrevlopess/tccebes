import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { IUser } from "@/types/User";

export default function LoginPage() {
  const { signIn } = useAuth();

  const user: IUser = {
    token: "asdasfsadfsdfegybwertutywey",
    id: "1",
    name: "andrevlopes",
    email: "andrevlopes@gmail.com",
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text>Login page</Text>
      <Pressable
        onPress={() => signIn(user)}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderRadius: 8,
          backgroundColor: "#3b82f6",
        }}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </Pressable>
    </View>
  );
}
