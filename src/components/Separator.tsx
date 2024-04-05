import styled from "styled-components";

const Gradient = styled.div`
  width: 100vw;
  height: 50px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1) 100%);
`;

const Separator = () => {
  return <Gradient />;
};

export default Separator;
