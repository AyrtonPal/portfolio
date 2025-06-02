import { styled } from "styled-components";
import { COLORS, FONTSIZE } from "../../constants";

interface TextAboutMeProps {
  bold?: boolean;
}

export const ContainerAboutMe = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContainerDataAboutMe = styled.div`
  justify-content: center;
  flex: 1;
  display: flex;
  align-items: center;
  margin: 4rem;
`;

export const ContainerText = styled.div`
  width: 60%;
`;

export const TextAboutMe = styled.span<TextAboutMeProps>`
  font-size: ${FONTSIZE.large};
  color: ${COLORS.terciary};
  font-family: Georgia;
  ${(val) => val.bold && `font-weight: bold`}
`;

export const ContainerImage = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${COLORS.terciary}
`;
