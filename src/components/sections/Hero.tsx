import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 130vh;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.85) 20%,

      rgba(0, 0, 0, 1) 100%
    ),
    url("./backdrop.png");
  /*   background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.85) 20%,
      rgba(61, 61, 61, 0.75),
      rgba(0, 0, 0, 0.85) 60%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("./backdrop.png"); */
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;

  @media (max-width: 768px) {
    width: 200vw;
    height: 120vh;
    background-size: fill;
    background-position: left;
    margin-left: -10rem;
  }
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
    width: 90vw;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
  }
`;
const ButtonWrapper = styled.div<{ $primary?: boolean }>`
  border-radius: 2rem;
  width: 9rem;
  height: 2.5rem;
  padding: 0.1rem 0.1rem;

  background-image: ${(props) =>
    props.$primary ? "#000" : "linear-gradient(90deg, #cbaa00, #fff)"};
  transition: all 0.3s;

  @media (max-width: 768px) {
    scale: 0.7;
  }

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
    <Wrapper id="home">
      <Center>
        <Logo src="./logo.png" />
        <ButtonGroup>
          <a href="" className="pointer">
            <ButtonWrapper $primary={true}>
              <Button $primary={true}>Register</Button>
            </ButtonWrapper>
          </a>
          <a href="" className="pointer">
            <ButtonWrapper>
              <Button>Brochure</Button>
            </ButtonWrapper>
          </a>
        </ButtonGroup>
      </Center>
    </Wrapper>
  );
};

export default Hero;
