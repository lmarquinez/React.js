import styled from "styled-components";

export const HighlightParagraph = styled.p`
  background-color: ${({ highlighting }) =>
    highlighting ? "pink" : "transparent"};
`;
