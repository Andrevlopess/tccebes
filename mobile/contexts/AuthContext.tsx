import { IUser } from "@/types/User";
import { createContext, useState, useEffect } from "react";
import { useSegments, useRouter } from "expo-router";

interface IAuthContext {
  user: IUser | null;
  signIn: (user: IUser) => void;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootSegment = useSegments()[0];
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>({
    token: "asdasfsadfsdfegybwertutywey",
    id: "1",
    name: "andrevlopes",
    email: "andrevlopes@gmail.com",
  });

  console.log("amem");

  useEffect(() => {
    // if (!user) return;

    if (!user && rootSegment !== "(auth)") {
      console.log("should be auth");

      router.replace("/(auth)/login");
    } else if (user && rootSegment !== "(app)") {
      router.replace("/(app)/(tabs)");
    }
  }, [user, rootSegment]);

  function signIn(user: IUser) {
    setUser(user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
