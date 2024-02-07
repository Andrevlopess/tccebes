import { useAuth } from "@/hooks/useAuth";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

const HomePage = () => {
  const [user, setUser] = useState<string>("default");

  const { signOut } = useAuth();

  return (
    <View style={{padding: 8}}>
      <Text>HomePage</Text>
      <TextInput
        onChangeText={setUser}
        value={user}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
      />

      <Pressable
        onPress={signOut}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderRadius: 8,
          backgroundColor: "#3b82f6",
        }}
      >
        <Text style={{ color: "#fff", textAlign: 'center'}}>Sign OUT</Text>
      </Pressable>
    </View>
  );
};
export default HomePage;
