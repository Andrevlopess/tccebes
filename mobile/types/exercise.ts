export interface IExercise {
  id: string;
  bodypart: string;
  equipment: string;
  gifurl: string;
  name: string;
  target: string;
}

export interface IUserExercise extends IExercise {
  liked: boolean;
}
