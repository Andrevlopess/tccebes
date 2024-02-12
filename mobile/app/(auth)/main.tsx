import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { s } from "@/styles/globals";
import Logo from "@/assets/icons/Logo";
import { Link } from "expo-router";
import LabelInput from "@/components/ui/LabelInput";

export default function MainAuthPage() {
  return (
    <View style={[ s.justifyBetween, s.container,  s.py24]}>
      {/* <View
        style={[s.flexColumn, s.gap16, s.itemsCenter, s.flex1, s.justifyCenter]}
      >
        <Logo />
        <Text style={[s.semibold]}>Seus treinos a outro nível</Text>
      </View>

      <View style={[s.gap8]}>
        <Link
          asChild
          href="/(auth)/login"
          style={[s.bgViolet600, s.radius14, s.p16, s.itemsCenter]}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[s.semibold, s.p4, s.textWhite]}>
              Acessar minha conta
            </Text>
          </TouchableOpacity>
        </Link>

        <Link
          asChild
          href="/(auth)/signin"
          style={[s.bgWhite, s.radius14, s.p16, s.itemsCenter, s.borderViolet700, s.border1]}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[s.semibold, s.p4, s.textViolet700]}>
              Criar uma conta
            </Text>
          </TouchableOpacity>
        </Link>
      </View> */}

      <LabelInput label="Email" containerStyles={[s.bgNeutral500, s.p14]} style={[s.border1]}/>
    </View>
  );
}
