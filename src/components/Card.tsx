import styled from "styled-components";
import AccordionModel from "../model/AccordionModel";

const Wrapper = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #2c2544;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  transition: all 0.5s ease-in-out;
  box-shadow: 0px 94.945px 94.945px 0px rgba(13, 11, 17, 0.6);
  &:hover {
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  margin-left: 2rem;

  width: 450px;
  height: 450px;
  background: linear-gradient(180deg, #7964d0 0%, #362482 100%);
  border-radius: 4rem;
`;

const TextContainer = styled.div`
  margin-right: 2rem;

  width: 400px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card: React.FC<{ model: AccordionModel }> = ({ model }) => {
  return (
    <Wrapper>
      <Container>
        <Box></Box>
        <TextContainer>{model.title}</TextContainer>
      </Container>
    </Wrapper>
  );
};

export default Card;
