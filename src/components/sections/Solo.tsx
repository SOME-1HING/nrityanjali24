import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  position: relative;

  video,
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  video {
    object-fit: contain;
  }

  h1 {
    font-size: 20vw;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 100vh;
    text-transform: uppercase;
    text-align: center;
    background: #ffffff;
    mix-blend-mode: screen;
  }
`;

const Solo = () => {
  return (
    <Wrapper id="solo">
      <video
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop
        muted
        src="./soloBG.mp4"
      />
      <h1>Solo</h1>
    </Wrapper>
  );
};

export default Solo;
