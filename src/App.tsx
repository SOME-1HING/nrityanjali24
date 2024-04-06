import About from "./components/sections/About";
import Group from "./components/sections/Group";
import Hero from "./components/sections/Hero";
import Contact from "./components/sections/Contact";
import PlaceHolder from "./components/sections/Placeholder";
import Solo from "./components/sections/Solo";
import Footer from "./components/sections/Footer";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import CustomCursor from "./components/CustomCursor";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Wrapper>
      <CustomCursor />
      <NavBar />
      <Hero />
      <About />
      <Solo />
      <PlaceHolder />
      <Group />
      <Contact />
      <Footer />
    </Wrapper>
  );
}

export default App;
