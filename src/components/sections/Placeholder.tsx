import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 5rem;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 1) 20%
    ),
    linear-gradient(90deg, rgba(91, 71, 5, 1) 10%, rgba(137, 126, 7, 1) 80%);

  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const PlaceHolder = () => {
  return <Wrapper></Wrapper>;
};

export default PlaceHolder;
