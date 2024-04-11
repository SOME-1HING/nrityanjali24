import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  gap: 2rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1``;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const SubContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: #fff;
`;

const Coordinators = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Faculty Coordinators</Title>
        <Content>
          <SubContent>
            <p>Ms. Ranjini S: 8971107766</p>
            <p>Dr. Nishitha: 9686917088</p>
          </SubContent>
          <Line />
          <SubContent>
            <p>Ms. Sreedevi VK: 8867671766</p>
            <p>Ms. Devi S: 8281932452</p>
          </SubContent>
        </Content>
      </Container>
      <Container>
        <Title>Student Coordinators</Title>
        <Content>
          <SubContent>
            <p>Mr. Ajay Krishna: 9353173583</p>
            <p>Ms. Achsah Varghese: 8431539784</p>
          </SubContent>
          <Line />
          <SubContent>
            <p>Mr. Nathanael S: 9482020776</p>
            <p>Ms. Navya Varrier: 7306326882</p>
          </SubContent>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Coordinators;
