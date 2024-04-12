import styled from "styled-components";
import MemoriesArr from "../../model/MemoriesArr";
import { Banner } from "../Banner";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ReelWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const MobileWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  scroll-snap-align: start;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Memories = () => {
  return (
    <>
      <Wrapper>
        <Title>Past Events</Title>
        <ReelWrapper>
          <Banner images={MemoriesArr} direction="left" />
          <Banner images={MemoriesArr} direction="right" />
        </ReelWrapper>
      </Wrapper>
      <MobileWrapper>
        <ReelWrapper>
          <Banner images={MemoriesArr} direction="left" />
          <Title>Last Year</Title>
          <Banner images={MemoriesArr} direction="right" />
        </ReelWrapper>
      </MobileWrapper>
    </>
  );
};

export default Memories;
