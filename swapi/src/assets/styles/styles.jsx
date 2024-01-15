import styled, { createGlobalStyle } from "styled-components";
import font from "../fonts/BungeeSpice-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family: 'Bungee Spice';
    font-style: normal;
    font-weight: 400;
    src: url(${font});
  }

  body {
    background-image: url('https://f.vividscreen.info/soft/8f30a9b0b16e1823f424dd9a916b18c0/Darth-Vader-Star-Wars-1600x900.jpg');
    background-position: center;
    font-family: 'Bungee Spice', sans-serif;
  }
`;

export const Title = styled.p`
  text-align: center;
`;

export const Character = styled.div`
  border: solid 3px #000000;
  margin-bottom: 12px;
  cursor: pointer;
`;
