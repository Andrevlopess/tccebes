import { Tabs } from "expo-router";
import { Home, Compass } from "lucide-react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

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
import { ThemeProvider } from "styled-components/native";
import themeConfig from "@/styles/theme";

export default function TabsLayout() {
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
    <ThemeProvider theme={themeConfig.light}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            title: "Home",
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "settings",
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => <Compass color={color} />,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
