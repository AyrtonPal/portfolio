import { useNavigate } from "react-router-dom";
import {
  ContainerTopBar,
  MaxContainerButtons,
  ButtonBar,
  TextButton,
  MaxContainerInitials,
  ContainerInitials,
  Initials,
} from "./styles";

const Navbar = () => {
  const ButtonMap = [
    { text: "Sobre Mi", nav: "/" },
    { text: "Experiencia", nav: "/experiencia" },
    { text: "Conocimientos", nav: "/knowledge" },
    { text: "Contacto", nav: "/contacto" },
  ];

  const navigate = useNavigate();

  return (
    <ContainerTopBar>
      <MaxContainerButtons>
        {ButtonMap.map((val, index) => (
          <ButtonBar
            onClick={() => {
              navigate(val.nav);
            }}
            key={index}
          >
            <TextButton>{val.text}</TextButton>
          </ButtonBar>
        ))}
      </MaxContainerButtons>
      <MaxContainerInitials>
        <ContainerInitials
          onClick={() => {
            navigate("/");
          }}
        >
          <Initials>AP</Initials>
        </ContainerInitials>
      </MaxContainerInitials>
    </ContainerTopBar>
  );
};

export default Navbar;
