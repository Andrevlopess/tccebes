import React, { useState } from "react";
import {
  View,
  AppState,
  Text,
  Pressable,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { AuthError } from "@supabase/supabase-js";
import { s } from "@/styles/globals";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import Logo from "@/assets/icons/Logo";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
import SignUpForm from "@/components/SignUpForm";


export default function Auth() {
  const router = useRouter();

  return (
    <View style={[s.container, s.py36, s.gap60]}>

      <Pressable onPress={router.back}>
        <ArrowLeft color={"#444333"} />
      </Pressable>

      <KeyboardAvoidingView
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
       style={[s.flex1]}
      >
        <View style={[s.flex1, s.gap46]}>
          <View style={[s.flexColumn, s.gap16, s.itemsCenter, s.justifyCenter]}>
            <Logo />
            <Text style={[s.semibold]}>
              Entre na sua conta e acesse seus treinos
            </Text>
          </View>


          <SignUpForm />

        </View>
      </KeyboardAvoidingView>

    </View>
  );
}
