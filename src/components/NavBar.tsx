import { IoMdHome, IoMdMenu } from "react-icons/io";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Wrapper = styled.div<{ scrolled: boolean }>`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  background: ${(props) =>
    props.scrolled
      ? "linear-gradient(to bottom, rgba(203, 170, 0, 1) 0%, rgba(203, 169, 0, 0.4) 100%)"
      : "transparent"};
  transition: all 0.5s;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopNav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLine = styled.div<{ scrolled: boolean }>`
  width: 65vw;
  height: 15px;
  background-color: #cbaa00;
  border-radius: 10px;
  border: 1.5px solid #fff;
  display: ${(props) => (!props.scrolled ? "block" : "none")};
`;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scrolled={scrolled}>
      <TopNav>
        <IoMdMenu fill={scrolled ? "#000" : "#FFFFFF"} size={30} />
        <NavLine scrolled={scrolled} />
        <a href="#home" className="pointer">
          <IoMdHome fill={scrolled ? "#000" : "#FFFFFF"} size={30} />
        </a>
      </TopNav>
    </Wrapper>
  );
};

export default NavBar;
