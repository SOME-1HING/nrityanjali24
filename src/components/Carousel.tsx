import styled, { keyframes } from "styled-components";
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

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Left = styled.div<{ disabled: boolean }>`
  scale: 0.5;
  transform: rotate(180deg);
  cursor: pointer;
  animation: ${slideRight} 0.5s ease-in-out;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const Right = styled.div<{ disabled: boolean }>`
  scale: 0.5;
  cursor: pointer;
  animation: ${slideLeft} 0.5s ease-in-out;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const CardWrapper = styled.div<{ animationDirection: string }>`
  animation: ${({ animationDirection }) =>
      animationDirection === "left" ? slideLeft : slideRight}
    0.5s ease-in-out forwards;
`;

const Carousel: React.FC<{ modelArr: AccordionModel[] }> = ({ modelArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLeftClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modelArr.length - 1 : prevIndex - 1
    );
    setAnimationDirection("right");
    setTimeout(() => {
      setIsAnimating(false);
      setAnimationDirection("");
    }, 500);
  };

  const handleRightClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === modelArr.length - 1 ? 0 : prevIndex + 1
    );
    setAnimationDirection("left");
    setTimeout(() => {
      setIsAnimating(false);
      setAnimationDirection("");
    }, 500);
  };

  const renderCardWrapper = () => {
    return (
      <CardWrapper animationDirection={animationDirection}>
        <Card model={modelArr[currentIndex % modelArr.length]} />
      </CardWrapper>
    );
  };
  return (
    <Wrapper>
      <Left disabled={isAnimating} onClick={handleLeftClick}>
        <Arrow />
      </Left>
      {renderCardWrapper()}
      <Right disabled={isAnimating} onClick={handleRightClick}>
        <Arrow />
      </Right>
    </Wrapper>
  );
};

export default Carousel;
