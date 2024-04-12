import styled from "styled-components";
import AccordionModel from "../model/AccordionModel";
import Arrow from "./Arrow";
import { IoPeopleSharp, IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(115deg, #dbd5f6 26.24%, #9d02fc 133.84%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  scroll-snap-align: start;

  display: none;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Image = styled.div<{ src: string; currentIndex: number }>`
  position: absolute;
  width: 80vw;
  height: 300px;
  z-index: 99;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4rem;
  max-width: 400px;

  transition: all 0.5s ease-in-out;

  @keyframes slideUp {
    0% {
      transform: translateY(0);
    }
    100% {
      scale: 0.8;
      transform: translateY(-200px);
    }
  }
`;

const Container = styled.div`
  position: absolute;

  width: 80vw;
  height: 300px;
  background-color: #2c2544;
  border-radius: 4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 15px 15px 0px rgba(13, 11, 17, 0.6);
  color: white;
  max-width: 400px;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 60%;
  padding: 6rem;
  scale: 0.5;
  gap: 6rem;
`;

const Left = styled.div`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 100px;
  height: 100px;
`;
const Right = styled.div`
  width: 100px;
  height: 100px;
`;

const Placeholder = styled.div`
  width: 100px;
  height: 100px;
`;
const Content = styled.div`
  z-index: 3;
  padding: 8rem;
  color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;
const Title = styled.div`
  color: #fff;
  margin-top: 5px;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  width: 100%;
`;
const SubTitle = styled.div`
  color: rgba(192, 191, 196, 0.6);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
const Info = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
`;

const InfoText = styled.div`
  color: #c0bfc4;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;
  text-transform: capitalize;
`;

const MobileInsta: React.FC<{ modelArr: AccordionModel[] }> = ({
  modelArr,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const imageElement = document.getElementById(modelArr[currentIndex].id);
    if (imageElement) {
      imageElement.style.animation = "none";
      setTimeout(() => {
        imageElement.style.animation = "slideUp 1s ease-in-out forwards";
      }, 0);
    }
  }, [currentIndex, modelArr]);
  return (
    <Wrapper>
      <Image
        id={modelArr[currentIndex].id}
        src={modelArr[currentIndex].imageUrl}
        currentIndex={currentIndex}
      />
      <Container>
        <Content>
          <Title>{modelArr[currentIndex].title}</Title>
          <SubTitle>{modelArr[currentIndex].subtitle}</SubTitle>
          <Info>
            {modelArr[currentIndex].limit === "1" ? (
              <IoPersonSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
            ) : modelArr[currentIndex].limit === "2" ? (
              <IoPeopleSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
            ) : (
              <MdGroups fill="rgba(192, 191, 196, 0.6)" size={30} />
            )}
            <InfoText>{modelArr[currentIndex].limit}</InfoText>
          </Info>
        </Content>
      </Container>
      <ArrowWrapper>
        {currentIndex !== 0 ? (
          <Left onClick={() => setCurrentIndex(currentIndex - 1)}>
            <Arrow />
          </Left>
        ) : (
          <Placeholder />
        )}
        {currentIndex !== modelArr.length - 1 ? (
          <Right onClick={() => setCurrentIndex(currentIndex + 1)}>
            <Arrow />
          </Right>
        ) : (
          <Placeholder />
        )}
      </ArrowWrapper>
    </Wrapper>
  );
};

export default MobileInsta;
