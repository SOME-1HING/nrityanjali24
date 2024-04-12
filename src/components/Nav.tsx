import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div<{ scrolled: string }>`
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  z-index: 1000;
  background: #9d02fc;
  cursor: pointer;

  display: ${(props) => (props.scrolled === "true" ? "flex" : "none")};

  &:hover {
    background: #dbd5f6;
  }
`;

const Nav = () => {
  const [scrolled, setScrolled] = useState("false");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0 ? "true" : "false");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container
      onClick={scrollToTop}
      scrolled={scrolled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IoMdHome fill={isHovered ? "black" : "white"} size={30} />
    </Container>
  );
};

export default Nav;
