import styled from "styled-components";
import MobileHero from "../MobileHero";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(67, 2, 118, 0.79);
  position: relative;
  scroll-snap-align: start;
  z-index: 1;

  @media screen and (max-width: 1320px) {
    display: none;
  }
`;

const Blob1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 450.249px;
  height: 587.072px;
  transform: rotate(76.66deg);
  flex-shrink: 0;
  border-radius: 587.072px;
  background: linear-gradient(180deg, #03fb75 0%, #06fff0 100%);
  filter: blur(176.73252868652344px);
  z-index: -1;
`;
const Blob2 = styled.div`
  position: absolute;
  top: 20;
  left: 0;
  width: 346.55px;
  height: 346.55px;
  transform: rotate(-22.538deg);
  flex-shrink: 0;
  border-radius: 346.55px;
  background: linear-gradient(180deg, #2603fb 0%, #dc06ff 100%);
  filter: blur(176.73252868652344px);
  z-index: -1;
`;
const Blob3 = styled.div`
  position: absolute;
  top: 30;
  left: 10;
  width: 433.788px;
  height: 636.579px;
  transform: rotate(76.66deg);
  flex-shrink: 0;
  border-radius: 636.579px;
  background: linear-gradient(180deg, #fb03f5 0%, #aa9cff 100%);
  filter: blur(94.70753479003906px);
  z-index: -1;
`;
const Blob4 = styled.div`
  position: absolute;
  top: 20;
  left: 0;
  width: 697.406px;
  height: 818.518px;
  transform: rotate(54.351deg);
  flex-shrink: 0;
  border-radius: 818.518px;
  background: linear-gradient(262deg, #7000ff 4.87%, #06fff0 87.02%);
  filter: blur(133.97015380859375px);
  z-index: -1;
`;

const Container = styled.div`
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Left = styled.div`
  flex: 0.918;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(66, 0, 117, 0.01);
  background: rgba(66, 0, 117, 0.56);
  backdrop-filter: blur(12.600000381469727px);
  z-index: 3;
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: rgba(250, 249, 249, 0.3);
  backdrop-filter: blur(12.600000381469727px);
  z-index: 3;
`;

const Middle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  z-index: 4;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const Title1 = styled.h1`
  color: #fff;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  font-family: Samarkan;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.075px;
  height: 8rem;
`;

const Title2 = styled.h1`
  height: 8rem;

  color: #440d70;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  font-family: Samarkan;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.075px;
`;

const Dancer = styled.img`
  position: absolute;
  height: 25rem;
  bottom: 2rem;
  object-fit: contain;
  object-position: center;
  z-index: 3;

  @media screen and (min-width: 1320px) {
    height: 35rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 100%;
  flex-direction: column;
  position: absolute;
  right: 4rem;
  bottom: 4rem;

  z-index: 8;
`;

const TopButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-top: 8rem;
  z-index: 8;
`;

const Register = styled.div`
  width: 20rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 116px;
  background: #4f1f7f;
  color: #fff;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 7.68px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  &:hover {
    cursor: pointer;
    background: #fff;
    color: #4f1f7f;
  }
`;

const Brochure = styled.div`
  width: 20rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 59px;
  background: #fff;
  color: #4f1f7f;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 6.4px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  &:hover {
    cursor: pointer;
    background: #4f1f7f;
    color: #fff;
  }
`;

const UploadWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  width: 24rem;
  height: 6rem;
  border-radius: 59px;
  color: #000;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 40.881px;
  letter-spacing: -0.227px;
  gap: 1rem;
  z-index: 9;

  &:hover {
    cursor: pointer;
    background: #4f1f7f;
    color: #fff;
  }
`;
const UploadImage = styled.img`
  margin-left: 1rem;
  width: 80px;
  height: 80px;
`;

const Hero = () => {
  return (
    <>
      <Wrapper id="home">
        <Blob1 />
        <Blob2 />
        <Blob3 />
        <Blob4 />
        <Container>
          <Left />
          <Right></Right>
          <Middle>
            <TitleWrapper>
              <Title1>Nritya</Title1>
              <Title2>njali ’24</Title2>
            </TitleWrapper>
            <Dancer src="./dancer.png" />
          </Middle>
        </Container>
        <ButtonsWrapper>
          <TopButtonWrapper>
            <a
              href="https://portal.kristujayanti.edu.in/register-nrityanjali-2024"
              target="_blank"
            >
              <Register>Register</Register>
            </a>
            <a
              href="https://drive.google.com/file/d/14tBLeurYXz_2q0PfSWDYbAIoqMQtQ6oi/view?usp=sharing"
              target="_blank"
            >
              <Brochure>Brochure</Brochure>
            </a>
          </TopButtonWrapper>
          <a
            href="https://portal.kristujayanti.edu.in/register-nrityanjali-2024"
            target="_blank"
          >
            <UploadWrapper>
              <UploadImage src="./upload.png" />
              Submit Audio
            </UploadWrapper>
          </a>
        </ButtonsWrapper>
      </Wrapper>
      <MobileHero />
    </>
  );
};

export default Hero;
