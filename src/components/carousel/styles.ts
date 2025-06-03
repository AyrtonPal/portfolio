import styled from "styled-components";
import { COLORS, FONTSIZE } from "../../constants";

interface PropsMarker {
  select: boolean;
}

interface PropsCarouselWrapper {
  translateX: number;
}

export const MaxCarouselContainer = styled.div`
  display: flex;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 800px;
  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
`;

export const CarouselWrapper = styled.div<PropsCarouselWrapper>`
  display: flex;
  scroll-snap-type: x proximity;
  transition: transform 0.5s ease;
`;

export const CarouselItem = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PrevButton = styled.button`
  all: unset;
  margin-right: 2rem;
  font-size: ${FONTSIZE.large};
  user-select: none;
  cursor: pointer;
  color: ${COLORS.terciary};
`;

export const NextButton = styled.button`
  all: unset;
  margin-left: 2rem;
  font-size: ${FONTSIZE.large};
  user-select: none;
  cursor: pointer;
  color: ${COLORS.terciary};
`;

export const ContainerDataCarousel = styled.div`
  color: ${COLORS.terciary};
`;

export const TitleItem = styled.p`
  font-size: ${FONTSIZE.veryLarge};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ContainerCompanyDate = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.8rem;
  gap: 2rem;
`;

export const CompanyItem = styled.p`
  font-size: ${FONTSIZE.large};
`;

export const DateItem = styled.p`
  font-size: ${FONTSIZE.large};
`;

export const TextItem = styled.p`
  font-size: ${FONTSIZE.medium};
`;

export const ContainerCarouselMarkers = styled.div``;

export const ContainerMarkers = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
`;

export const Marker = styled.div<PropsMarker>`
  width: 10px;
  height: 10px;
  border: 2px solid ${COLORS.secondary};
  border-radius: 50%;
  background-color: ${(val) => (val.select ? COLORS.secondary : COLORS.primary)};
  border-radius: 50%;
`;
