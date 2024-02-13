import React, { useState } from "react";
import {
  View,
  AppState,
  Text,
  Button,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { AuthError } from "@supabase/supabase-js";
import { s } from "@/styles/globals";
import { Link, useRouter } from "expo-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react-native";
import Logo from "@/assets/icons/Logo";
import FlaotingTextInput from "@/components/ui/FloatingLabelInput";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
import LoginForm from "@/components/LoginForm";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function LoginPage() {

  const router = useRouter();




  return (
    <View style={[s.container, s.py24, s.gap60]}>

      <Pressable onPress={router.back}>
        <ArrowLeft color={"#444333"} />
      </Pressable>

      <View style={[s.flex1, s.gap46]}>
        <View style={[s.flexColumn, s.gap16, s.itemsCenter, s.justifyCenter]}>
          <Logo />
          <Text style={[s.semibold]}>
            Entre na sua conta e acesse seus treinos
          </Text>
        </View>

        <LoginForm />
      </View>
    </View>
  );
}
