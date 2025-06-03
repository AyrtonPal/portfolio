import styled, { createGlobalStyle } from "styled-components";
import { COLORS, FONTSIZE } from "./constants";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const ContainerApp = styled.div`
  background-color: ${COLORS.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
