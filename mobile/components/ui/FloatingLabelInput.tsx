
import { s } from '@/styles/globals';
import { AlertCircle, Eye, EyeOff } from 'lucide-react-native';
import React, { useState, useRef } from 'react';
import {
    Animated,
    Easing,
    Pressable,
    TextInput,
    TextInputProps,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';


interface IFloatingLabelInput extends TextInputProps {
    label: string
    titleActiveScale?: number
    titleInActiveScale?: number
    titleActiveColor?: string
    titleInactiveColor?: string
    error?: string
}

const FloatingLabelInput = ({
    label,
    titleActiveScale = 0.8,
    titleInActiveScale = 1,
    titleActiveColor = '#6d28d9',
    titleInactiveColor = '#444444',
    error,
    value,
    onChangeText,
    ...props
}: IFloatingLabelInput) => {
    const inputRef = useRef<TextInput>(null)
    const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current

    const [isSecure, setIsSecure] = useState<boolean>(props.secureTextEntry ?? false)

    const returnAnimatedTitleStyles = {
        transform: [
            {
                translateY: animatedValue?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 0],
                    extrapolate: 'clamp',
                }),
            },
            {
                translateX: animatedValue?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [8, 4],
                    extrapolate: 'clamp',
                }),
            },
        ],
        fontSize: animatedValue?.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 14],
            extrapolate: 'clamp',
        }),
        // color: animatedValue?.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [titleInactiveColor, titleActiveColor],
        // }),
    };

    const onFocus = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 150,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    };

    const onBlur = () => {
        if (!value) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 150,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        }
    };


    return (
        <TouchableWithoutFeedback
            onPress={() => inputRef.current?.focus()}>
            <View>
                <Animated.View
                    style={[
                        s.border1,
                        s.bgGray50,
                        s.radius12,
                        s.p12,
                        
                        !!error ? s.borderRed400 : s.borderGray300
                    ]}>

                    <Animated.Text style={[
                        returnAnimatedTitleStyles,
                        s.medium,
                        { lineHeight: 24 },
                        !!error && s.textRed500
                    ]}>{label}
                    </Animated.Text>

                    <View style={[s.flexRow, s.itemsCenter, { paddingRight: 12 }]}>
                        <TextInput
                            ref={inputRef}
                            {...props}
                            cursorColor={'#6d28d9'}
                            onChangeText={onChangeText}
                            value={value}
                            secureTextEntry={isSecure}
                            style={[s.flex1, s.px4, s.textBase]}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            placeholder=''
                        />

                        {props.secureTextEntry && value &&
                            <Pressable onPress={() => setIsSecure((prev) => !prev)}>
                                {isSecure
                                    ? <Eye size={20} color="#333" />
                                    : <EyeOff size={20} color="#333" />}
                            </Pressable>
                        }
                    </View>

                </Animated.View>
                {error &&
                    <View style={[s.flexRow, s.gap6, s.itemsCenter, s.px12, s.py6]}>
                        <AlertCircle color={'#ef4444'} size={20}/>
                        <Text style={[s.textSM, s.medium, s.textRed500]}>{error}</Text>
                    </View>

                }

            </View>

        </TouchableWithoutFeedback>

    );
};


export default FloatingLabelInput;