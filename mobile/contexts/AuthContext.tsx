import { createContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { AuthError, Session } from "@supabase/supabase-js";

interface IAuthContext {
  userId: string | undefined;
  session: Session | null;
  signInWithEmail: (data: signInWithEmailType) => Promise<void | AuthError>;
  signUpWithEmail: (data: signUpWithEmailType) => Promise<void | AuthError>;
  signOut: () => Promise<void>;
}
interface signInWithEmailType {
  email: string;
  password: string;
}

interface signUpWithEmailType {
  username: string;
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
  const [userId, setUserId] = useState<string | undefined>("84f13dde-923f-4aa7-a706-4d2810f12c3c");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    // session && session.user
    //   ? router.replace("/(app)/(tabs)/home")
    //   : router.replace("/(auth)/");

    router.replace("/(app)/(tabs)/library");
    setUserId(session?.user.id  ?? '84f13dde-923f-4aa7-a706-4d2810f12c3c');
  }, [session]);

  async function signInWithEmail({ email, password }: signInWithEmailType) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) return error;
  }

  async function signUpWithEmail({
    username,
    email,
    password,
  }: signUpWithEmailType) {
    console.log(username);

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
      },
    });

    if (error) return error;
    if (!session) alert("Please check your inbox for email verification!");
  }

  async function signOut() {
    supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider
      value={{ userId, session, signInWithEmail, signUpWithEmail, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
