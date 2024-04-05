import { IoMdHome, IoMdMenu } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 130vh;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.85) 20%,
      rgba(61, 61, 61, 0.75),
      rgba(0, 0, 0, 0.85) 60%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("./backdrop.png");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;

  @media (max-width: 768px) {
    width: 100vw;
    height: 120vh;
    background-size: fill;
    background-position: left;
  }
`;

const TopNav = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: start;
  padding: 3rem 6rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLine = styled.div`
  width: 65vw;
  height: 15px;
  background-color: #cbaa00;
  border-radius: 10px;
  border: 1.5px solid #fff;
`;

const Center = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  width: 60vw;
  height: auto;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;
`;
const ButtonWrapper = styled.div<{ $primary?: boolean }>`
  border-radius: 2rem;
  width: 9rem;
  height: 2.5rem;
  padding: 0.1rem 0.1rem;

  background-image: ${(props) =>
    props.$primary ? "#000" : "linear-gradient(90deg, #cbaa00, #fff)"};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.$primary ? "#fff" : " #cbaa00")};
    background-image: none;
  }
`;
const Button = styled.button<{ $primary?: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.$primary ? "#cbaa00" : "#000")};
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  border-radius: 2rem;
  border: none;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <TopNav>
        <IoMdMenu fill="#FFFFFF" size={30} />
        <NavLine />
        <IoMdHome fill="#FFFFFF" size={30} />
      </TopNav>
      <Center>
        <Logo src="./logo.png" />
        <ButtonGroup>
          <ButtonWrapper $primary={true}>
            <Button $primary={true}>Register</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>Brochure</Button>
          </ButtonWrapper>
        </ButtonGroup>
      </Center>
    </Wrapper>
  );
};

export default Hero;
