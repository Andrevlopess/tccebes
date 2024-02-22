import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { s } from "@/styles/globals";
import IconInput from "@/components/ui/IconInput";
import { Check, Search } from "lucide-react-native";
import ExerciseCard from "@/components/ExerciseCard";
import { IExercise, IUserExercise } from "@/types/exercise";
import Badge from "@/components/ui/Badge";
import { supabase } from "@/lib/supabase";
import { isLoading } from "expo-font";
import { useDebounce } from "@/hooks/useDebounceCallback";
import Skeleton from "./ui/Skeleton";

const ITEMS_PER_PAGE = 10;

interface IExerciseListRenderProps {
  renderFunctionName: string;
  params?: { [key: string]: string | undefined };
}

const ExerciseListRender = ({
  renderFunctionName,
  params,
}: IExerciseListRenderProps) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<IUserExercise[]>([]);
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
        .rpc(renderFunctionName, { query: searchQuery, ...params })
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
    ({ item }: { item: IUserExercise }) => <ExerciseCard exercise={item} />,
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

export default ExerciseListRender;
