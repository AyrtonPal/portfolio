import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe, Contact, Experience, Knowledge } from "./features";
import { ContainerApp, GlobalStyle } from "./styles";
import { Navbar } from "./components";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <ContainerApp>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </ContainerApp>
    </Router>
  );
}
