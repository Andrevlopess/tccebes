import React from "react";
import {
Button,
ButtonProps
} from "react-native";
import styled, { css } from "styled-components/native";

const UIButton = styled.View<{$secondary?: boolean}>`
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


const FloatingOutlinedInput: React.FC<ButtonProps> = ({ ...props }) => {
  return (
   <UIButton {...props}/>
  );
};
export default FloatingOutlinedInput;
