import styled from "styled-components";
// import Carousel from "./components/Carousel";
import Hero from "./components/sections/Hero.tsx";
import Solo from "./components/sections/Solo";
import SoloArr from "./model/SoloArr";
import GroupArr from "./model/GroupArr";
import Group from "./components/sections/Group";
import { useEffect, useRef, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import GoToButton from "./components/GoToButton";
import Contact from "./components/sections/Contact.tsx";
import Join from "./components/sections/Join.tsx";
import Memories from "./components/sections/Memories.tsx";
import Footer from "./components/sections/Footer.tsx";
import Info from "./components/sections/Info.tsx";
import NewCarousel from "./components/NewCarousel.tsx";
import Nav from "./components/Nav.tsx";
import About from "./components/sections/About.tsx";
import Promo from "./components/sections/Promo.tsx";
import "./fonts/stylesheet.css";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { goto } = useScrollSnap({ ref: scrollRef, duration: 50 });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      {isDesktop && <GoToButton goto={goto} />}
      <Nav />
      <main ref={isDesktop ? scrollRef : null}>
        <Hero />
        <About />
        <Promo />
        <Solo />
        <NewCarousel modelArr={SoloArr} />
        <Group />
        <NewCarousel modelArr={GroupArr} />
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
