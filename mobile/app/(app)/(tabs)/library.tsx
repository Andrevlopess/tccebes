import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { s } from "@/styles/globals";
import IconInput from "@/components/ui/IconInput";
import { Check, CheckCircle2, Search } from "lucide-react-native";
import Badge from "@/components/ui/Badge";
import ExerciseCard from "@/components/ExerciseCard";
import { ScrollView } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function LibraryPage() {
  // async function handleMassiveInsert() {
  //   exercises.forEach((exercise) => handleInsertExercise(exercise));
  // }

  // async function handleInsertExercise({
  //   name,
  //   bodyPart,
  //   equipment,
  //   target,
  //   gifUrl,
  // }: IExercises) {
  //   console.log("ex=.", {
  //     name,
  //     bodyPart,
  //     equipment,
  //     target,
  //     gifUrl,
  //   });
  //   // return
  //   const { data, error } = await supabase.rpc("handle_insert_exercise", {
  //     name_param: name,
  //     body_part_param: bodyPart,
  //     equipment_param: equipment,
  //     target_muscle_param: target,
  //     gif_url_param: gifUrl,
  //   });

  //   console.log(data, error);
  // }

  const results = [
    {
      id: "0013",
      bodyPart: "core",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0013.gif",
      name: "elevação de perna deitada assistida com lançamento",
      target: "abdômen",
    },
    {
      id: "0014",
      bodyPart: "core",
      equipment: "bola",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0014.gif",
      name: "torção russa assistida",
      target: "abdômen",
    },
    {
      id: "0015",
      bodyPart: "costas",
      equipment: "graviton",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0015.gif",
      name: "puxada paralela assistida de perto",
      target: "dorsal",
    },
    {
      id: "0016",
      bodyPart: "quadriceps/posterior",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0016.gif",
      name: "extensão de perna deitada assistida",
      target: "isquiotibiais",
    },
    {
      id: "1713",
      bodyPart: "quadriceps/posterior",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1713.gif",
      name: "alongamento de quadríceps deitado assistido",
      target: "quadríceps",
    },
    {
      id: "1714",
      bodyPart: "core",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1714.gif",
      name: "alongamento do reto femoral deitado assistido",
      target: "abdômen",
    },
    {
      id: "0017",
      bodyPart: "costas",
      equipment: "graviton",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0017.gif",
      name: "puxada assistida",
      target: "dorsal",
    },
    {
      id: "1716",
      bodyPart: "peito",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1716.gif",
      name: "alongamento do peitoral maior sentado assistido com bola de estabilidade",
      target: "peitoral",
    },
    {
      id: "1712",
      bodyPart: "quadriceps/posterior",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1712.gif",
      name: "alongamento do adutor deitado de lado assistido",
      target: "adutores",
    },
    {
      id: "1758",
      bodyPart: "core",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1758.gif",
      name: "abdominais assistidos",
      target: "abdômen",
    },
    {
      id: "1431",
      bodyPart: "costas",
      equipment: "graviton",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1431.gif",
      name: "puxada de pé assistida em pé",
      target: "dorsal",
    },
    {
      id: "1432",
      bodyPart: "costas",
      equipment: "graviton",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1432.gif",
      name: "puxada assistida em pé",
      target: "dorsal",
    },
    {
      id: "0018",
      bodyPart: "biceps/triceps",
      equipment: "com ajuda",
      gifUrl:
        "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0018.gif",
      name: "extensão de tríceps em pé assistida (com toalha)",
      target: "tríceps",
    },
  ];

  const teste = [
    "abdutores",
    "abdômen",
    "adutores",
    "bíceps",
    "panturrilha",
    "deltóides",
    "antebraços",
    "glúteos",
    "isquiotibiais",
    "dorsal",
    "peitoral",
    "quadríceps",
    "serrátil",
    "coluna",
    "trapézio",
    "tríceps",
    "superioriores",
    "latíssimo",
    "cardio",
    "escapula",
  ];

  const badges = teste.map((target, index) => ({
    id: index.toString(),
    target,
  }));

  const [activesBadges, setActivesBadges] = useState<string[]>([]);

  useEffect(() => {
    console.log(activesBadges);
  }, [activesBadges]);

  // const badgeWidth = useSharedValue(0);

  // useEffect(() => {
  //   badgeWidth.value = withSpring(badgeWidth.value + 1);
  // }, [activesBadges]);

  return (
    <View style={[s.container, s.bgSnowWhite, s.gap24]}>
      <Text style={[s.bold, s.textXL]}>Biblioteca</Text>

      <IconInput
        placeholder="Busque por um exercício"
        icon={<Search />}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[s.gap12]}
        style={{ flexGrow: 0 }}
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
      />

      <View style={[s.flex1, s.gap8]}>
        {/* <Text style={[s.medium, s.textLG]}>
          Resultados para
          <Text style={[{ fontStyle: "italic" }]}> "Costas"</Text>
        </Text> */}

        <FlatList
          contentContainerStyle={[s.gap12]}
          data={results}
          renderItem={({ item }) => <ExerciseCard {...item} />}
        />
      </View>
    </View>
  );
}
