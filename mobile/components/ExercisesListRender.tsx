import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { s } from "@/styles/globals";
import IconInput from "@/components/ui/IconInput";
import { Check, Search } from "lucide-react-native";
import ExerciseCard from "@/components/ExerciseCard";
import { IExercise } from "@/types/exercise";
import Badge from "@/components/ui/Badge";
import { supabase } from "@/lib/supabase";
import { isLoading } from "expo-font";

const ITEMS_PER_PAGE = 15;


interface IExerciseListRenderProps {
    renderFunction: () => {}
}

const ExerciseListRender = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<IExercise[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasListFinished, setHasListFinished] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const fetchPage = async () => {
    if (loading || hasListFinished) return;

    setLoading(true);
    setError(null);

    try {
      const { data: results, error } = await supabase
        .rpc("get_exercises_by_name", { query: 'amem' })
        .range(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE - 1);

      if (error) {
        throw new Error(error.message);
      }

      if (!results || results.length === 0) {
        setHasListFinished(true);
      } else {
        setItems((prev) => [...prev, ...results]);
        setPage((page) => page + 1);
      }
    } catch (error) {
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: IExercise }) => <ExerciseCard exercise={item} />,
    []
  );

  const renderLoadingList = () => {
    if (loading) return <ActivityIndicator style={[s.py12]} />;
    if (error) return <Text>Error: {error}</Text>;
    return null;
  };

  const renderEmptyList = () => (
    <Text style={[s.semibold, s.textCenter, s.textBase]}>
      No exercises found
    </Text>
  );

//   useEffect(() => {
//     fetchPage(search);
//   }, [search]);

  const memoizedItemList = useMemo(
    () => (
      <FlatList
        data={items}
        contentContainerStyle={[s.gap12]}
        onEndReached={fetchPage}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderLoadingList}
        ListEmptyComponent={renderEmptyList}
        renderItem={renderItem}
      />
    ),
    [items, loading, hasListFinished, error]
  );

  return (
    <View style={[s.gap24, s.flex1]}>
      <IconInput
        icon={<Search />}
        onChangeText={setSearch}
        value={search}
        placeholder="Busque por um exercício"
      />
      {memoizedItemList}
    </View>
  );
};

export default ExerciseListRender;
