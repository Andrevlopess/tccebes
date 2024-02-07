import { Slot } from "expo-router";
import AuthProvider from "@/contexts/AuthContext";

export default function RootLaytout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
