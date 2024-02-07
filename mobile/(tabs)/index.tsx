import Input from "@/components/Input";
import { Link } from "expo-router";
import { Search } from "lucide-react-native";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styled, { css } from "styled-components/native";

const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: 4px;
  `}
`;

type Props = {};

const HomePage = (props: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <Container>
      <Text>andre v lopes</Text>
      <Link
    href='/'
        asChild
      >
        <Text style={{ fontFamily: "Inter_900Black", fontSize: 30 }}>
          Inter Black
        </Text>
      </Link>
      <Text style={{ fontFamily: "Inter_200ExtraLight", fontSize: 30 }}>
        Inter Black
      </Text>
      <Input
        icon={<Search  color={'#fb923c'}/>}
        placeholder="Selecione o nome do macaco"
        id="nameInput"
        onChangeText={setName}
      />
      
    </Container>
  );
};

export default HomePage;
