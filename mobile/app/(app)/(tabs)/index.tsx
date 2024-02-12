import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { s } from "@/styles/globals";
import { useEffect, useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const { signOut, session } = useAuth();

  // async function getProfile() {
  //   try {
  //     setLoading(true);
  //     if (!session?.user) throw new Error("No user on the session!");

  //     const { data, error, status } = await supabase
  //       .from("profiles")
  //       .select(`username, website, avatar_url`)
  //       .eq("id", session?.user.id)
  //       .single();

  //     if (error && status !== 406) {
  //       console.log('deu ruim');

  //       throw error;
  //     }

  //     console.log("data=>", data);

  //     if (data) {
  //       setUsername(data.username);
  //       setWebsite(data.website);
  //       setAvatarUrl(data.avatar_url);
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       Alert.alert(error.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getProfile();

  //   console.log(username);

  //   console.log(website);
  //   console.log(avatarUrl);
  // }, []);

  return (
    <View style={{ padding: 8 }}>
      <Text>HomePage</Text>
      <Text>
        {session?.user.email}
        <br/>
        {session?.user.id}
      </Text>

      <Pressable
        style={[
          s.mt18,
          s.bgViolet800,
          s.radius12,
          s.itemsCenter,
          s.justifyCenter,
          s.p14,
        ]}
        disabled={loading}
        onPress={() => signOut()}
      >
        <Text style={[s.regular, s.textNeutral50, s.semibold]}>Sair</Text>
      </Pressable>
    </View>
  );
};
export default HomePage;
