import styled, { createGlobalStyle } from "styled-components";
import font from "./assets/fonts/BungeeSpice-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family: 'Bungee Spice';
    font-style: normal;
    font-weight: 400;
    src: url(${font});
  }

  body {
    background-image: url('https://wallpapers.com/images/hd/rick-and-morty-unamused-rick-agpuysmhk3lhdl4p.jpg');
    background-position: center;
    font-family: 'Bungee Spice', sans-serif;
  }
`;

export const Title = styled.p`
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2em;
  border: solid 1px #ffffff;
  cursor: pointer;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
