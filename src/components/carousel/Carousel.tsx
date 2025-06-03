import { useRef, useState } from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselWrapper,
  CompanyItem,
  ContainerCarouselMarkers,
  ContainerCompanyDate,
  ContainerDataCarousel,
  ContainerMarkers,
  DateItem,
  Marker,
  MaxCarouselContainer,
  NextButton,
  PrevButton,
  TextItem,
  TitleItem,
} from "./styles";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.clientWidth;

    const newIndex = Math.round(scrollLeft / width);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(DataCarouselMap.length - 1, currentIndex + 1);
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const DataCarouselMap = [
    {
      workstation: "Desarrollador Mobile",
      date: "Sept. 2022 - Nov. 2023",
      company: "IncluIT",
      description:
        "Participé en el desarrollo de una aplicación desde cero, encargándome del frontend. Construí componentes reutilizables, implementé el enrutamiento de las pantallas y desarrollé las distintas vistas de la aplicación. Además, realicé integraciones con el backend para el consumo de datos.",
    },
    {
      workstation: "Desarrollador Mobile / Web",
      date: "Nov. 2022 - Actualidad",
      company: "Ssysctech",
      description:
        "Continué trabajando en el desarrollo de una aplicación ya existente, enfocándome en el frontend. Realicé mejoras y ampliaciones sobre componentes reutilizables, nuevas pantallas, enrutamiento y conexiones con el backend. Además, desarrollé páginas web paralelas al sistema principal, como un backoffice para la gestión interna de la aplicación.",
    },
  ];

  return (
    <MaxCarouselContainer>
      <PrevButton onClick={handlePrev}>{"<"}</PrevButton>
      <ContainerCarouselMarkers>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <CarouselWrapper translateX={-currentIndex * 100}>
            {DataCarouselMap.map((val, index) => (
              <CarouselItem key={index}>
                <ContainerDataCarousel>
                  <TitleItem>{val.workstation}</TitleItem>
                  <ContainerCompanyDate>
                    <CompanyItem>{val.company}</CompanyItem>
                    <DateItem>{val.date}</DateItem>
                  </ContainerCompanyDate>
                  <TextItem>{val.description}</TextItem>
                </ContainerDataCarousel>
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </CarouselContainer>
        <ContainerMarkers>
          {DataCarouselMap.map((val, index) => (
            <Marker select={index === currentIndex} key={index} />
          ))}
        </ContainerMarkers>
      </ContainerCarouselMarkers>

      <NextButton onClick={handleNext}>{">"}</NextButton>
    </MaxCarouselContainer>
  );
};

export default Carousel;
