import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AuthProvider from "@/contexts/AuthContext";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useCallback } from "react";
import {
  Platform,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";
import { AppState } from "react-native";
import { supabase } from "@/lib/supabase";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
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

  let [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <StatusBar translucent barStyle={"dark-content"}/>
      <SafeAreaView
        onLayout={onLayoutRootView}
        style={styles.AndroidSafeArea}
      >
        <Host>
         <Slot/>
        </Host>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default gestureHandlerRootHOC(RootLayout)
