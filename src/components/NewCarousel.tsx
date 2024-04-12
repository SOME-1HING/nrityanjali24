import { useState } from "react";
import styled from "styled-components";
import AccordionModel from "../model/AccordionModel";
import MobileInsta from "./MobileInsta";
import InstaCard from "./InstaCard";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(115deg, #dbd5f6 26.24%, #9d02fc 133.84%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Placeholder = styled.div`
  width: 400px;
  height: 400px;
`;

const Container = styled.div`
  scale: 0.8;
  opacity: 0.5;
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
    <>
      <Wrapper>
        {currentIndex !== 0 ? (
          <Container onClick={goToPrevious}>
            <InstaCard
              model={modelArr[currentIndex - 1]}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          </Container>
        ) : (
          <Placeholder />
        )}
        <InstaCard
          model={modelArr[currentIndex]}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        {currentIndex !== modelArr.length - 1 ? (
          <Container onClick={goToNext}>
            <InstaCard
              model={modelArr[currentIndex + 1]}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          </Container>
        ) : (
          <Placeholder />
        )}
      </Wrapper>
      <MobileInsta modelArr={modelArr} />
    </>
  );
};

export default NewCarousel;
