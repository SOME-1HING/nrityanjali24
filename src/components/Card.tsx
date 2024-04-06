import { IoPeopleSharp } from "react-icons/io5";
import styled from "styled-components";
import AccordionModel from "../model/AccordionModel";

const Wrapper = styled.div`
  width: 475px;
  height: 400px;
  display: flex;
  justify-content: start;
  align-items: end;

  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    height: 400px;
    padding-left: 3rem;
  }
`;

const Container = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: #000;
  border-radius: 20px;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    width: 60vw;
    height: 250px;
    padding-right: 3rem;
  }
`;

const Title = styled.div`
  width: 250px;
  height: 150px;
  color: #c0bfc4;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    width: 200px;
    word-spacing: 180px;
    position: relative;
    top: 0;
  }
`;

const SubTitle = styled.div`
  color: rgba(192, 191, 196, 0.6);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;

  @media (max-width: 768px) {
    width: 180px;
    line-height: 30px;
    word-wrap: break-word;
  }
`;

const Info = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  gap: 1rem;
  align-items: center;
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

const Image = styled.div<{ src: string }>`
  position: absolute;
  top: 100;
  right: -50px;
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    right: 10px;
    width: 250px;
    height: 250px;
  }
`;

const Card: React.FC<{ model: AccordionModel }> = ({ model }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{model.title}</Title>
        <SubTitle>{model.subtitle}</SubTitle>
        <Info>
          <IoPeopleSharp fill="rgba(192, 191, 196, 0.6)" size={30} />
          <InfoText>{model.limit}</InfoText>
        </Info>
      </Container>
      <Image
        src={model.imageUrl}
        style={{ right: model.extraSpace ? "-5px" : "-50px" }}
      />
    </Wrapper>
  );
};

export default Card;
