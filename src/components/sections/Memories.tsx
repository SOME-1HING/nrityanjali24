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
`;

const ReelWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const Memories = () => {
  return (
    <Wrapper>
      <Title>Last Year</Title>
      <ReelWrapper>
        <Banner images={MemoriesArr} direction="left" />
        <Banner images={MemoriesArr} direction="right" />
      </ReelWrapper>
    </Wrapper>
  );
};

export default Memories;
