import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "@/styles/globals";
import IconInput from "@/components/ui/IconInput";
import { Search } from "lucide-react-native";
import ExerciseCard from "@/components/ExerciseCard";
import { ViewTabs } from "@/components/ui/ViewTabs";
import { debounce } from "@/utils/debounce";
import { supabase } from "@/lib/supabase";
import { IExercise } from "@/types/exercise";

const LibraryScreen = () => {
  const [search, setSearch] = useState<string>("");
  const [searchedExercises, setSearchedExercises] = useState<IExercise[]>([])

   const handleChange = debounce( async (input: string) => {
    console.log(input);

  
    let { data: result, error } = await supabase
      .from('exercises')
      .select("*")                             
      .ilike('name', `%${search}%`)

      console.log(result, error); 

  }, 1000);

  useEffect(() => handleChange(search), [search]);

  // const badges = teste.map((target, index) => ({
  //   id: index.toString(),
  //   target,
  // }));

  const [activesBadges, setActivesBadges] = useState<string[]>([]);

  return (
    <View style={[s.gap24, s.flex1]}>
      <View style={[s.gap12]}>
        <IconInput
          value={search}
          onChangeText={setSearch}
          placeholder="Busque por um exercício"
          icon={<Search />}
        />

        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[s.gap12]}
          data={badges}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const active = activesBadges.includes(item.id);
            return (
              // <Animated.View style={{ width: badgeWidth }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  active
                    ? setActivesBadges(
                        activesBadges.filter((active) => active !== item.id)
                      )
                    : setActivesBadges((prev) => [...prev, item.id]);
                }}
              >
                <Badge
                  style={[
                    active ? s.bgViolet600 : s.bgWhite,
                    s.flexRow,
                    s.gap4,
                    s.itemsCenter,
                  ]}
                >
                  {active && (
                    <Check
                      color="#fff"
                      size={16}
                    />
                  )}
                  <Text
                    style={[
                      active && s.textWhite,
                      s.regular,
                      { textTransform: "capitalize" },
                    ]}
                  >
                    {item.target}
                  </Text>
                </Badge>
              </TouchableOpacity>
              // </Animated.View>
            );
          }}
        /> */}
      </View>

      <FlatList
        data={[]}
        ItemSeparatorComponent={() => (
          <View style={[s.bgGray300, { height: StyleSheet.hairlineWidth }]} />
        )}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
      />
    </View>
  );
};

const FavoritesScreen = () => {
  return (
    <View style={[s.gap24]}>
      <View style={[s.gap12]}>
        <IconInput
          placeholder="Busque por um exercício"
          icon={<Search />}
        />
      </View>
    </View>
  );
};

export default function LibraryPage() {
  return (
    <View style={[s.container, s.bgSnowWhite, s.gap24]}>
      <Text style={[s.bold, s.textXL]}>Biblioteca</Text>

      <ViewTabs
        screens={[
          { key: "first", title: "Todos" },
          { key: "second", title: "Favoritos" },
        ]}
        sceneMap={{
          first: LibraryScreen,
          second: FavoritesScreen,
        }}
      />
    </View>
  );
}
