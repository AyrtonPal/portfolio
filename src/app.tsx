import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AboutMe, Contact, Experience } from "./features";
import { ContainerApp, GlobalStyle } from "./styles";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <ContainerApp>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </ContainerApp>
    </Router>
  );
}
