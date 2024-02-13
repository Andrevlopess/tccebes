import { View, Text, Pressable, Keyboard } from "react-native";
import { s } from "@/styles/globals";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import Logo from "@/assets/icons/Logo";
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
        style={[s.flex1, s.gap46]}
      >
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
