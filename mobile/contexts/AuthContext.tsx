import { IUser } from "@/types/User";
import { createContext, useState, useEffect } from "react";
import { useSegments, useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { AuthError, Session } from "@supabase/supabase-js";

interface IAuthContext {
  session: Session | null;
  signInWithEmail: (data: signInWithEmailType) => Promise<void | AuthError>;
  signUpWithEmail: (data: signInWithEmailType) => Promise<void | AuthError>;
  signOut: () => Promise<void>;
}
interface signInWithEmailType {
  email: string;
  password: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    session && session.user
      ? router.replace("/(app)/(tabs)/home")
      : router.replace("/(auth)/main");

    console.log("signed in", session);
  }, [session]);

  async function signInWithEmail({ email, password }: signInWithEmailType) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) return error;
  }

  async function signUpWithEmail({ email, password }: signInWithEmailType) {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) return error;
    if (!session) alert("Please check your inbox for email verification!");
  }

  async function signOut() {
    supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider
      value={{ session, signInWithEmail, signUpWithEmail, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
