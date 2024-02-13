import React, { useState } from "react";
import {
  View,
  AppState,
  Text,
  Button,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  Keyboard,
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
import { TouchableWithoutFeedback } from "react-native";

export default function LoginPage() {

  const router = useRouter();

  return (
    <View style={[s.container, s.py24, s.gap60]}>

      <Pressable onPress={router.back}>
        <ArrowLeft color={"#444333"} />
      </Pressable>

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={[s.flex1, s.gap46]}>
        <>
          <View style={[s.flexColumn, s.gap16, s.itemsCenter, s.justifyCenter]}>
            <Logo />
            <Text style={[s.semibold]}>
              Entre na sua conta e acesse seus treinos
            </Text>
          </View>

          <LoginForm />
        </>
      </TouchableWithoutFeedback>
    </View>
  );
}
