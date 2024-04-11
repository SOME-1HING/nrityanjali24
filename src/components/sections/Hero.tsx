import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: start;
  background-color: #000;
  background-image: url("./dancer.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  scroll-snap-align: start;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;
const Right = styled.div``;

const Logo = styled.div`
  -webkit-mask-image: url("./logo.png");
  mask-image: url("./logo.png");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;

  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-device-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
  }
`;
const ButtonWrapper = styled.div<{ $primary?: boolean }>`
  border-radius: 2rem;
  width: 9rem;
  height: 2.5rem;
  padding: 0.1rem 0.1rem;
  cursor: pointer;

  background-image: ${(props) =>
    props.$primary ? "#000" : "linear-gradient(90deg, #cbaa00, #fff)"};
  transition: all 0.3s;

  @media (max-device-width: 768px) {
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
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

const Hero = () => {
  return (
    <Wrapper id="home">
      <Left>
        <Logo>
          <video src="./backdrop.mp4" muted loop autoPlay />
        </Logo>
        <ButtonGroup>
          <a
            href="https://portal.kristujayanti.edu.in/register-nrityanjali-2024"
            target="_blank"
          >
            <ButtonWrapper $primary={true}>
              <Button $primary={true}>Register</Button>
            </ButtonWrapper>
          </a>
          <a
            href="./Nrityanjali24_Brochure.pdf"
            download="Nrityanjali24_Brochure.pdf"
            target="_blank"
          >
            <ButtonWrapper>
              <Button>Brochure</Button>
            </ButtonWrapper>
          </a>
        </ButtonGroup>
      </Left>
      <Right />
    </Wrapper>
  );
};

export default Hero;
