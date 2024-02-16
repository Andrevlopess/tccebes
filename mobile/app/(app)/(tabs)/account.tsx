import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import { s } from "@/styles/globals";
import { LogOut } from "lucide-react-native";
import { ViewTabs } from "@/components/ui/ViewTabs";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import Modal from "@/components/ui/Modalize";
import { useModalize } from "react-native-modalize";
 
export default function AccountPage() {
  return (
    <View style={[s.container]}>
     <Text>Account page</Text>
    </View>
  );
}
