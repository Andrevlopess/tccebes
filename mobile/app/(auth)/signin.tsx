import React, { useState } from "react";
import {
  View,
  AppState,
  Text,
  Button,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { AuthError } from "@supabase/supabase-js";
import PasswordInput from "@/components/ui/PasswordInput";
import LabelInput from "@/components/ui/LabelInput";
import { s } from "@/styles/globals";
import { Link, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import Logo from "@/assets/icons/Logo";

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
        <ArrowLeft />
      </Pressable>

      <View style={[s.flex1, s.gap46]}>
        <View style={[s.flexColumn, s.gap16, s.itemsCenter, s.justifyCenter]}>
          <Logo />
          <Text style={[s.semibold]}>
            Entre na sua conta e acesse seus treinos
          </Text>
        </View>

        <View style={[s.gap16, s.mt24]}>

          <View style={[s.p18, s.radius6, s.bgGray100]}>
            <LabelInput
              label="Nome"
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="name"
              autoCapitalize={"none"}
            />
          </View>

          <View style={[s.p18, s.radius6, s.bgGray100]}>
            <LabelInput
              label="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email"
              autoCapitalize={"none"}
            />
          </View>

          <View style={[s.p18, s.radius6, s.bgGray100]}>
            <PasswordInput
              label="Senha"
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Insira sua senha"
              autoCapitalize={"none"}
            />
          </View>

          <Pressable
            style={[
              s.mt12,
              s.bgViolet700,
              s.radius12,
              s.itemsCenter,
              s.justifyCenter,
              s.p14,
            ]}
            disabled={loading}
            onPress={() => handleSignUp()}
          >
            {loading ? (
              <ActivityIndicator color={"#fff"} />
            ) : (
              <Text style={[s.regular, s.textNeutral50]}>Entrar</Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
