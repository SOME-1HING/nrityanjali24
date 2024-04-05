import styled from "styled-components";
import Accordion from "../Accordion";
import SoloArr from "../../model/SoloArr";

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 80%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    linear-gradient(90deg, rgba(91, 71, 5, 1) 10%, rgba(137, 126, 7, 1) 80%);
  gap: 10rem;
`;

const Vector = styled.div`
  position: relative;
  top: -2px;

  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  .shape-fill {
    fill: #000;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
  justify-content: start;

  gap: 4rem;
`;

const Diamond = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;
const AccordionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Solo = () => {
  return (
    <Wrapper>
      <Vector>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Vector>
      <Container>
        <Diamond src="./diamond.png" />
        <AccordionWrapper>
          <Accordion arr={SoloArr} />
        </AccordionWrapper>
      </Container>
    </Wrapper>
  );
};

export default Solo;
