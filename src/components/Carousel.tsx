import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import Arrow from "./Arrow";
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

const Left = styled.div`
  scale: 0.5;
  transform: rotate(180deg);
  cursor: pointer;
`;

const Right = styled.div`
  scale: 0.5;
  cursor: pointer;
`;

const CardWrapper = styled.div``;

const Carousel: React.FC<{ modelArr: AccordionModel[] }> = ({ modelArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modelArr.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === modelArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderCardWrapper = () => {
    return (
      <CardWrapper>
        <Card model={modelArr[currentIndex % modelArr.length]} />
      </CardWrapper>
    );
  };
  return (
    <Wrapper>
      <Left onClick={handleLeftClick}>
        <Arrow />
      </Left>
      {renderCardWrapper()}
      <Right onClick={handleRightClick}>
        <Arrow />
      </Right>
    </Wrapper>
  );
};

export default Carousel;
