import styled from "styled-components/native";
import { TextInput, View, Text, Button } from "react-native";

export const Box = styled(View)`
  margin: 20px;
`;

export const Row = styled(View)`
  flex-direction: row;
`;

export const MyTextInput = styled(TextInput)`
  padding: 7px;
  border: 2px solid #13797e;
  margin-right: 7px;
  width: 340px;
`;

export const MyButton = styled(Button)`
  padding: 7px;
  border: 2px solid #13797e;
  margin-right: 7px;
`;

export const Task = styled(Text)`
  background-color: #13797e;
  color: white;
  margin-top: 4px;
  padding: 10px;
`;
