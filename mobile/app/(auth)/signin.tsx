import React, { useState } from "react";
import {
  View,
  AppState,
  Text,
  Pressable,
  ActivityIndicator,
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

export default function Auth() {
  const [name, setName] = useState("andrevlopes");
  const [email, setEmail] = useState("andre.vitor@anchieta.br");
  const [password, setPassword] = useState("andrevlopes__");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const { signUpWithEmail } = useAuth();

  const router = useRouter();

  async function handleSignUp() {
    try {
      setLoading(true);
      const res = await signUpWithEmail({ email, password });

      if (res) {
        alert(res);
        setError(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[s.container, s.py36, s.gap60]}>

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

        <SignUpForm />
      </View>
    </View>
  );
}
