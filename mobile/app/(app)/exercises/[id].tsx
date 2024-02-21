import { s } from "@/styles/globals";
import { useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { IExercise } from "@/types/exercise";
import Skeleton from "@/components/ui/Skeleton";

const SkeletonPage = () => {
  return (
    <View style={[s.container, s.gap12]}>
      <Skeleton height={500} />

      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </View>
  );
};

interface IDetailedExercise extends IExercise {}

export default function ExeciseDetailPage() {
  const { id } = useLocalSearchParams();
  const [imageSize, setImageSize] = useState(0);
  const [exercise, setExercise] = useState<IExercise>(
    {
      "id": "65683a57-b5bd-4ce5-bbfd-f7cecd1649db",
      "name": "puxada paralela assistida de perto",
      "gifurl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0015.gif",
      "bodypart": "costas",
      "equipment": "graviton",
      "target": "dorsal"
  }
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getExerciseDatas(id: string | string[]) {
    setIsLoading(true);
    try {
      const { data: result, error } = await supabase.rpc(
        "get_exercise_details",
        {
          exercise_id: id,
        }
      );

      console.log("finaly", result);
      setExercise(result[0]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect(() => {
  //   getExerciseDatas(id);
  // }, []);

  if (isLoading) return <SkeletonPage />;

  return (
    <View style={[s.container]}>
      <View
        style={[s.flex1]}
        onLayout={({ nativeEvent }) => {
          setImageSize(nativeEvent.layout.width);
        }}
      >
        <View style={[s.p12, s.bgWhite, s.border1, s.borderGray200, s.radius12]}>
          <Image
            style={{ maxHeight: 600 }}
            source={{
              uri: exercise.gifurl,
              width: imageSize - 24,
              height: imageSize - 24,
            }}
          />
        </View>

        {/* {exerciseSpecificationLine("Músculo alvo:", exercise.target)}
        {exerciseSpecificationLine("Grupo muscular:", exercise.bodypart)}
        {exerciseSpecificationLine("Equipamento:", exercise.equipment)} */}

        <View style={[s.py24, s.px12]}>
          <View style={[s.justifyBetween, s.flexRow, s.itemsCenter]}>
            <Text style={[s.semibold, s.textLG, s.textCapitalize]}>{exercise.name}</Text>
           
          </View>

          <View style={[s.flexRow, s.itemsCenter, s.mt6]}>
            {/* {similarExercises.map((exercise, index) => {
              return (
                <ExercisePreview
                  key={exercise.id}
                  url={exercise.gifurl}
                  index={index}
                />
              );
            })} */}
          </View>
        </View>
      </View>
    </View>
  );
}
