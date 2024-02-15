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
  const { open, close, ref } = useModalize();

  return (
    <View style={[s.container]}>
      {/* <TouchableOpacity
        onPress={handleSignOut}
        style={[
          s.bgViolet600,
          s.radius14,
          s.px24,
          s.py18,
          s.flexRow,
          s.itemsCenter,
          s.gap12,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={"#fff"} />
        ) : (
          <>
            <LogOut color={"white"} />
            <Text style={[s.textGray50, s.semibold]}>Logout</Text>
          </>
        )}
      </TouchableOpacity> */}
      {/* <Modal /> */}
      {/* <ViewTabs
        screens={[
          { key: "firsadfst", title: "Fir122asdasst" },
          { key: "sesdfcond", title: "Se11111cond" },
        ]}
        // sceneMap={{ 
        //   first: () => <View style={{ flex: 1, backgroundColor: "#3ff3" }} />,
        //    second: () => <View style={{ flex: 1, backgroundColor: "#3f3" }} />}}
      /> */}
      {/* <ModalizeModal/> */}
      <Pressable onPress={() => open()}>
        <Text>open</Text>
      </Pressable>

      <Modal
        childrenStyle={[s.flex1]}
        modalStyle={[s.flex1]}
        modalTopOffset={100}
        ref={ref}
      >
        <View style={[s.flex1, s.bgAmber100, s.itemsCenter, s.justifyCenter]}>
          <Pressable onPress={() => close()}>
            <Text>vlose</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
