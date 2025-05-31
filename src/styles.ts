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
`;

// ---------------------------------------------------------


export const ContainerTopBar = styled.div`
  background-color: ${COLORS.terciary};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  gap: 2rem;
`;

export const MaxContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
`;

export const ButtonBar = styled.button`
  all: unset;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const TextButton = styled.p`
  font-size: ${FONTSIZE.large};
  color: ${COLORS.primary};
  font-family: "Courier New";
`;

export const MaxContainerInitials = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerInitials = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Initials = styled.p`
  color: ${COLORS.primary};
  font-size: ${FONTSIZE.veryLarge};
  font-weight: bold;
  font-family: cursive;
`;
