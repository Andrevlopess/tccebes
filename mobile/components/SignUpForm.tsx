import { View, Text, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";
import FloatingLabelInput from './ui/FloatingLabelInput';
import { s } from '@/styles/globals';
import { AuthError } from '@supabase/supabase-js';
import { useAuth } from '@/hooks/useAuth';

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Insira um nome com mais caracteres')
        .max(70, 'Insira um nome com menos caracteres')
        .required('Insira seu nome'),
    email: Yup.string()
        .email('Email inválido')
        .required('Insira seu email'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Insira sua senha'),
});


export default function SignUpForm() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const { signUpWithEmail } = useAuth();

    async function handleSignUp({ username, email, password } : {
        username: string,
        email: string,
        password: string
    }) {
        
        try {
            console.log(username, email, password);
            
            setLoading(true);

            const res = await signUpWithEmail({ username, email, password });

            if (res) {
                alert(res);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }



    return (

        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={({email, password, username}) => handleSignUp({email, password, username})}
            validationSchema={SignUpSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={[s.gap16, s.mt24]}>


                    <FloatingLabelInput
                        label="Nome"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        autoCapitalize={"none"}
                        error={errors.username}
                    />

                    <FloatingLabelInput
                        label="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        autoCapitalize={"none"}
                        error={errors.email}
                    />


                    <FloatingLabelInput
                        label="Senha"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        autoCapitalize={"none"}
                        error={errors.password}
                        secureTextEntry
                    />

                    <Pressable
                        style={[
                            s.mt12,
                            s.bgViolet700,
                            s.radius12,
                            s.itemsCenter,
                            s.justifyCenter,
                            s.p14,
                        ]}
                        disabled={loading}
                        onPress={() => handleSubmit()}
                    >
                        {loading ? (
                            <ActivityIndicator color={"#fff"} />
                        ) : (
                            <Text style={[s.semibold, s.textNeutral50]}>Cadastrar</Text>
                        )}
                    </Pressable>
                </View>
            )}
        </Formik>

    )
}