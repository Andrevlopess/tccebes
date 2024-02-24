import { KeyboardAvoidingView, ActivityIndicator, TouchableOpacity, Text, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { s } from "@/styles/globals";
import LabelInput from "./ui/LabelInput";
import Avatar from "./ui/Avatar";
import { Formik } from "formik";
import * as Yup from "yup";

const newWorkoutSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Insira um nome de até 100 caracteres!")
    .required("Insira o nome"),
  description: Yup.string().max(
    500,
    "Insira uma descrição de até 500 caracteres!"
  ),
});

interface INewWorkout {
  name: string;
  description: string;
}

export default function NewWorkoutForm() {
  const [image, setImage] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleCreateNewWorkout(values: INewWorkout) {
    console.log("fetch");
    setIsLoading(true);
    try {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
    
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={[s.container, s.gap36]}>
      <Avatar
        size={200}
        url={image}
        onUpload={() => console.log("iage uploaded")}
      />

      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={(values) => handleCreateNewWorkout(values)}
        validationSchema={newWorkoutSchema}
        style={[s.gap16, s.flex1]}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <LabelInput
              label="Nome"
              value={values.name}
              onChangeText={handleChange("name")}
              error={errors.name}
              onBlur={handleBlur('name')}
            />
            <LabelInput
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur('description')}
              error={errors.description}
              label="Descrição"
              multiline={true}
              numberOfLines={10}
              style={{height: 200}}
            />

            <TouchableOpacity
              onPress={() => handleSubmit()}
              activeOpacity={0.7}
              style={[s.radius6, s.itemsCenter, s.bgViolet700, s.py12]}
            >
              {isLoading ? (
                <ActivityIndicator color={"#fff"} size={16} />
              ) : (
                <Text style={[s.medium, s.textWhite]}>Criar</Text>
              )}
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
