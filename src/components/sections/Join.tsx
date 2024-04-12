import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 5rem;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 1) 120%),
    url("./hand.png");
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const JoinUs = styled.div`
  color: #fff;
  font-family: Oswald;
  font-size: 148.649px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 17.838px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    font-size: 6rem;
    position: absolute;
    top: 25%;
    left: 25%;
    text-align: center;
  }
`;

const Join = () => {
  return (
    <Wrapper>
      <Container>
        <JoinUs>Join Us</JoinUs>
      </Container>
    </Wrapper>
  );
};

export default Join;
