import styled from "styled-components";
import Carousel from "./components/Carousel";
import Hero from "./components/sections/Hero.tsx";
import Solo from "./components/sections/Solo";
import SoloArr from "./model/SoloArr";
import GroupArr from "./model/GroupArr";
import Group from "./components/sections/Group";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import GoToButton from "./components/GoToButton";
import Contact from "./components/sections/Contact.tsx";
import Join from "./components/sections/Join.tsx";
import Memories from "./components/sections/Memories.tsx";
import Footer from "./components/sections/Footer.tsx";
import Info from "./components/sections/Info.tsx";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

function App() {
  const scrollRef = useRef(null);

  const { goto } = useScrollSnap({ ref: scrollRef, duration: 50 });
  return (
    <Wrapper>
      <GoToButton goto={goto} />
      <main ref={scrollRef}>
        <Hero />
        <Solo />
        <Carousel modelArr={SoloArr} />
        <Group />
        <Carousel modelArr={GroupArr} />
        <Info />
        <Memories />
        <Join />
        <Contact />
        <Footer />
      </main>
    </Wrapper>
  );
}

export default App;
