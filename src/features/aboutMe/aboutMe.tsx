import {
  ContainerAboutMe,
  ContainerDataAboutMe,
  ContainerImage,
  ContainerText,
  TextAboutMe,
} from "./styles";
import profileImage from "../../assets/ProfileImage.png";

export const AboutMe = () => {
  return (
    <ContainerAboutMe>
      <ContainerDataAboutMe>
        <ContainerText>
          <TextAboutMe>
            ¡HOLA! Soy Ayrton Palacios, desarrollador
            <TextAboutMe bold> Front-End</TextAboutMe>. <br />
            Empecé a estudiar programación en el año 2020 en la carrera de
            Ingenieria en Sistemas, despues seguí estudiando por mi cuenta con
            cursos de YouTube o de paginas como freeCodeCamp. <br />
            Ahora mismo estoy mas familiarizado con el Desarrollo
            <TextAboutMe bold> Mobile</TextAboutMe> pero tambien he trabajado en
            proyectos de Desarrollo
            <TextAboutMe bold> Web</TextAboutMe>. <br />
            Soy una persona que se desenvuelve muy bien en equipo, aprendo
            rapido y sobre todas las cosas me gusta aprender de los demas.
          </TextAboutMe>
        </ContainerText>
        <ContainerImage>
          <img src={profileImage} alt="Profile" />
        </ContainerImage>
      </ContainerDataAboutMe>
    </ContainerAboutMe>
  );
};
