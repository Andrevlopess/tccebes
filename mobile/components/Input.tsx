import React from "react";
import {
  TextInputProps
} from "react-native";
import styled, { css } from "styled-components/native";

const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.bgGray};
    padding-horizontal: 12px;
    padding-vertical: 8px;
    border-radius: 8px;
  `}
`;

const Input = styled.TextInput`
  ${({ theme }) => css`
    padding-horizontal: 8px;
    padding-vertical: 4px;
    flex: 1;
    font-weight: 500;
  `}
`;

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

const FloatingOutlinedInput: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <Container>
      {icon && icon}
      <Input {...props} />
    </Container>
  );
};
export default FloatingOutlinedInput;
