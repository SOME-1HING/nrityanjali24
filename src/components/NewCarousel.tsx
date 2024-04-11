import { useState } from "react";
import styled from "styled-components";
import { IoPeopleSharp, IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import AccordionModel from "../model/AccordionModel";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(115deg, #dbd5f6 26.24%, #9d02fc 133.84%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  scroll-snap-align: start;
`;

const Container = styled.div`
  width: 400px;
  height: 700px;
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
`;

const Top = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #fff;
`;

const Logo = styled.div`
  margin-left: 25px;
  width: 40px;
  height: 40px;
  background-image: url("./lca.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid #fff;
`;

const TopText = styled.div`
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #9d02fc;
  }
`;

const ImageContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 1px solid #fff;
  transition: background-image 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #fff;
`;

const ButtonLeft = styled.div`
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  > * {
    &:hover {
      color: #9d02fc;
    }
  }
`;

const ButtonRight = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #9d02fc;
  }
`;

const CaptionContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

const CaptionTitle = styled.div`
  color: #fff;
  margin-left: 25px;
  margin-top: 5px;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
`;

const CaptionSubTitle = styled.div`
  margin-left: 25px;
  color: rgba(192, 191, 196, 0.6);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const CaptionInfo = styled.div`
  margin-left: 25px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const CaptionText = styled.div`
  color: #c0bfc4;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;
  text-transform: capitalize;
`;

const Next = styled.div<{ src: string }>`
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Placeholder = styled.div`
  width: 400px;
  height: 400px;
`;

const NewCarousel: React.FC<{ modelArr: AccordionModel[] }> = ({
  modelArr,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modelArr.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === modelArr.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <Wrapper>
      {currentIndex !== 0 ? (
        <Next
          onClick={goToPrevious}
          src={modelArr[currentIndex - 1].imageUrl}
        />
      ) : (
        <Placeholder />
      )}
      <Container>
        <Top>
          <Logo />
          <a href="https://www.instagram.com/kristujayanti_lca" target="_blank">
            <TopText>@kristujayanti_lca</TopText>
          </a>
        </Top>
        <ImageContainer src={modelArr[currentIndex].imageUrl} />
        <ButtonsWrapper>
          <ButtonLeft>
            <FaHeart
              onClick={() => setIsClicked(!isClicked)}
              fill={isClicked ? "red" : "white"}
            />
            <RiChat1Line />
            <IoIosSend />
          </ButtonLeft>
          <ButtonRight>
            <FaBookmark />
          </ButtonRight>
        </ButtonsWrapper>
        <CaptionContainer>
          <CaptionTitle>{modelArr[currentIndex].title}</CaptionTitle>
          <CaptionSubTitle>{modelArr[currentIndex].subtitle}</CaptionSubTitle>
          <CaptionInfo>
            {modelArr[currentIndex].limit === "1" ? (
              <IoPersonSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
            ) : modelArr[currentIndex].limit === "2" ? (
              <IoPeopleSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
            ) : (
              <MdGroups fill="rgba(192, 191, 196, 0.6)" size={30} />
            )}
            <CaptionText>{modelArr[currentIndex].limit}</CaptionText>
          </CaptionInfo>
        </CaptionContainer>
      </Container>
      {currentIndex !== modelArr.length - 1 ? (
        <Next onClick={goToNext} src={modelArr[currentIndex + 1].imageUrl} />
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

export default NewCarousel;
