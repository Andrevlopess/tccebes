import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

// todo get id from session

export default async function handleLikeExercise(exercise_id: string) {
//   const { session } = useAuth();

  const { data, error } = await supabase.from("liked_exercises").insert([
    {
      exercise_id: exercise_id,
      liked_by: "84f13dde-923f-4aa7-a706-4d2810f12c3c",
    },
  ]);
}
