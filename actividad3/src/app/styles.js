import styled from "styled-components/native";
import { View, TextInput, Text } from "react-native";

export const Container = styled(View)`
  padding: 20px;
`;

export const Title = styled(Text)`
  margin-top: 45px;
  align-self: center;
  font-size: 24px;
  font-weight: bold;
  color: #13797e;
`;

export const StyledTextInput = styled(TextInput)`
  height: 40px;
  border: 2px solid #13797e;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Task = styled(Text)`
  background-color: #13797e;
  color: white;
  margin-top: 4px;
  padding: 10px;
`;
