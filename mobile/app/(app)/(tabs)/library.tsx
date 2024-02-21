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
import { ViewTabs } from "@/components/ui/ViewTabs";
import debounce from "@/utils/debounce";
import { supabase } from "@/lib/supabase";
import { IExercise } from "@/types/exercise";
import Badge from "@/components/ui/Badge";
import ExerciseListRender from "@/components/ExercisesListRender";
import { useAuth } from "@/hooks/useAuth";
import { useDebounce } from "@/hooks/useDebounceCallback";
import Skeleton from "@/components/ui/Skeleton";

const badges = [
  {
    id: "1 changing files",
    title: "basssdge1",
  },
];

const LibraryScreen = () => {
  const ITEMS_PER_PAGE = 10;
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<IExercise[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasListFinished, setHasListFinished] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const debouncedSearchTerm = useDebounce(search, 500);

  const fetchPage = async (
    searchQuery: string,
    resetItems: boolean = false
  ) => {

    
    resetItems && setItems([]);

    if (loading || hasListFinished) return;

    setLoading(true);
    setError(null);

    try {
      const { data: results, error } = await supabase
        .rpc('get_exercises_by_name', { query: searchQuery })
        .range(
          resetItems ? 0 : page * ITEMS_PER_PAGE,
          (page + 1) * ITEMS_PER_PAGE - 1
        );

      if (error) {
        throw new Error(error.message);
      }

      console.log(results, hasListFinished);

      if (!results || results.length === 0) {
        setHasListFinished(true);
      } else {
        setItems((prevItems) =>
          resetItems ? [...results] : [...prevItems, ...results]
        );
        setPage((prevPage) => (resetItems ? 1 : prevPage + 1));
      }
    } catch (error) {
      // setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(debouncedSearchTerm);
    // When debouncedSearchTerm changes, fetch new data with search query
    setHasListFinished(false);
    fetchPage(debouncedSearchTerm, true);
  }, [debouncedSearchTerm]);

  const handleLoadMore = () => {
    // Fetch next page of data when reaching the end of the list
    fetchPage(debouncedSearchTerm);
  };

  const renderItem = useCallback(
    ({ item }: { item: IExercise }) => <ExerciseCard exercise={item} />,
    []
  );

  const renderLoadingFooter = () => {
    if (loading) return <ActivityIndicator />;
    return null;
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchPage(debouncedSearchTerm, true);
    setRefreshing(false);

  }

  const renderEmptyList = () => (
    <Text style={[s.semibold, s.textCenter, s.textBase]}>
      No exercises found
    </Text>
  );

  const memoizedList = useMemo(
    () => (
      <FlatList
        data={items}
        contentContainerStyle={[s.gap12]}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        ListFooterComponent={renderLoadingFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
    ),
    [items, hasListFinished, loading, error]
  );

  return (
    <View style={[s.gap24, s.flex1]}>
      <IconInput
        icon={<Search />}
        onChangeText={(text) => {
          setSearch(text);
        }}
        value={search}
        placeholder="Busque por um exercício"
      />
      {loading && !items.length && (
        <View style={[s.gap12]}>
          {Array.from({ length: 15 }).map((_, index) => (
            <Skeleton
              height={90}
              key={index}
            />
          ))}
        </View>
      )}
      {items.length ? memoizedList : renderEmptyList()}
    </View>
  );
};

const FavoritesScreen = () => {
  const { session } = useAuth();

  // todo replace session user_id
  return (
    <ExerciseListRender
      renderFunctionName="get_liked_exercises_by_user"
      params={{ user_id: "84f13dde-923f-4aa7-a706-4d2810f12c3c" }}
    />
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
