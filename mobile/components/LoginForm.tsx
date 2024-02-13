
import React, { useState } from 'react'
import { Formik } from 'formik';
import FloatingLabelInput from './ui/FloatingLabelInput';
import { s } from '@/styles/globals';
import { useAuth } from '@/hooks/useAuth';
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { AuthError } from '@supabase/supabase-js';
import * as Yup from "yup";



const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Insira seu email'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Insira sua senha'),
});

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const { signInWithEmail } = useAuth();

    async function handleLogin({ email, password }: {
        email: string,
        password: string
    }) {
        try {
            setLoading(true);

            const res = await signInWithEmail({ email, password });

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
            initialValues={{ email: 'andre.vitor@anchieta.br', password: 'andrevlopes__' }}
            onSubmit={handleLogin}
            validationSchema={SignInSchema}
        >

            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                <View style={[s.gap16, s.mt24]}>
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

                    <TouchableOpacity
                        activeOpacity={0.7}
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
                            <Text style={[s.semibold, s.textNeutral50]}>Entrar</Text>
                        )}
                    </TouchableOpacity>
                </View>

            )}

        </Formik>
    )
}