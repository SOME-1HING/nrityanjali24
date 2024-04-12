import styled from "styled-components";
import { IoPeopleSharp, IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import AccordionModel from "../model/AccordionModel";

const Container = styled.div`
  width: 360px;
  height: 650px;
  border-radius: 2.5rem;
  background: #2c2544;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border: 5px solid #3e3462;
  min-width: 360px;
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
  width: 45px;
  height: 43px;
  background-image: url("./instaIcon.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TopText = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 10px;
`;

const TopTitle = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.54px;
  line-height: 20px;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2px;
  width: 100%;
  a {
    color: #fff;

    text-decoration: none;
    &:hover {
      color: #9d02fc;
      cursor: pointer;
    }
  }
`;

const TopSubTitle = styled.div`
  color: rgba(255, 255, 255, 0.89);
  font-family: Poppins;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 178.839%; /* 25.038px */
  letter-spacing: 0.28px;
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
const InstaCard: React.FC<{
  model: AccordionModel;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ model, isClicked, setIsClicked }) => {
  return (
    <Container>
      <Top>
        <Logo />
        <TopText>
          <TopTitle>
            <a
              href="https://www.instagram.com/kristujayanti_lca"
              target="_blank"
            >
              kristujayanti_lca
            </a>
            and
            <a
              href="https://www.instagram.com/kristujayantidanceacademy"
              target="_blank"
            >
              kristujayantidanceacademy
            </a>
          </TopTitle>
          <TopSubTitle>Kristu Jayanti College Autonomous</TopSubTitle>
        </TopText>
      </Top>
      <ImageContainer src={model.imageUrl} />
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
        <CaptionTitle>{model.title}</CaptionTitle>
        <CaptionSubTitle>{model.subtitle}</CaptionSubTitle>
        <CaptionInfo>
          {model.limit === "1" ? (
            <IoPersonSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
          ) : model.limit === "2" ? (
            <IoPeopleSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
          ) : (
            <MdGroups fill="rgba(192, 191, 196, 0.6)" size={30} />
          )}
          <CaptionText>{model.limit}</CaptionText>
        </CaptionInfo>
      </CaptionContainer>
    </Container>
  );
};

export default InstaCard;
