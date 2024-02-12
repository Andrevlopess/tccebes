import { s } from "@/styles/globals";
import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, TextInputProps, View, Pressable, Text } from "react-native";

interface PasswordInputProps extends TextInputProps {
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, ...props }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <View>
      <Text style={[s.regular]}>{label}</Text>

      <View style={[s.flexRow, s.itemsCenter]}>
        <TextInput
          secureTextEntry={isHidden}
          style={[s.flex1, s.regular, s.mt10]}
          {...props}
        />

        <Pressable onPress={() => setIsHidden((prev) => !prev)}>
          {isHidden ? <Eye size={20} /> : <EyeOff size={20} />}
        </Pressable>
      </View>
    </View>
  );
};
export default PasswordInput;
