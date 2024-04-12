import { FaHotel, FaTrophy } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import styled from "styled-components";
import MobileInfo from "../MobileInfo";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(2, 0, 36);
  background: linear-gradient(211deg, #b24afa 47%, rgba(0, 212, 255, 1) 84%);
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BoxGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: #9d02fc;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxIcon = styled.div``;
const BoxTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  margin-top: 1rem;
`;
const BoxContent = styled.div`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1``;

const Line = styled.div`
  width: 2px;
  height: 80%;
  background-color: #fff;
`;

const Header = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px;
  background: rgba(94, 4, 173, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const RowContent = styled.div`
  flex: 1;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;
const Info = () => {
  return (
    <>
      <Wrapper id="info">
        <BoxGroup>
          <Box>
            <BoxTitle style={{ fontSize: "3rem" }}>10 Events</BoxTitle>
          </Box>
          <Box>
            <BoxIcon>
              <FaHotel size={30} />
            </BoxIcon>
            <BoxTitle>Accommodation</BoxTitle>
            <BoxContent>
              Accommodation facility available at an affordable price of Rs.100
              in the college guesthouse/hostel.
            </BoxContent>
          </Box>
          <Box>
            <BoxIcon>
              <FaTrophy size={30} />
            </BoxIcon>
            <BoxTitle>Cash Prize</BoxTitle>
            <BoxContent>
              Attractive cash prizes for each event. More Details below!
            </BoxContent>
          </Box>
          <Box>
            <BoxIcon>
              <GiArchiveRegister size={30} />
            </BoxIcon>
            <BoxTitle>Registration</BoxTitle>
            <BoxContent>
              Couldn't register before the deadline? No problem! Register On
              Spot.
            </BoxContent>
          </Box>
        </BoxGroup>

        <BottomWrapper>
          <Container>
            <Title>Registration Fee</Title>
            <Header>
              <HeaderTitle>Event</HeaderTitle>
              <HeaderTitle>Amount</HeaderTitle>
            </Header>
            <Row>
              <RowContent>Solo</RowContent>
              <RowContent>Rs. 300</RowContent>
            </Row>
            <Row>
              <RowContent>Duet</RowContent>
              <RowContent>Rs. 600</RowContent>
            </Row>
            <Row>
              <RowContent>GROUP EVENTS</RowContent>
              <RowContent>Rs. 1,500</RowContent>
            </Row>
            <Row>
              <RowContent>OVERALL REGISTRATION</RowContent>
              <RowContent>Rs. 6,000</RowContent>
            </Row>
          </Container>
          <Line />
          <Container>
            <Title>CASH PRIZE</Title>
            <Header>
              <HeaderTitle>Event</HeaderTitle>
              <HeaderTitle>1st Prize</HeaderTitle>
              <HeaderTitle>2nd Prize</HeaderTitle>
              <HeaderTitle>3rd Prize</HeaderTitle>
            </Header>
            <Row>
              <RowContent>Solo</RowContent>
              <RowContent>Rs. 3,500</RowContent>
              <RowContent>Rs. 2,000</RowContent>
              <RowContent>Rs. 1,000</RowContent>
            </Row>
            <Row>
              <RowContent>DUET</RowContent>
              <RowContent>Rs. 6,000</RowContent>
              <RowContent>Rs. 4,000</RowContent>
              <RowContent>Rs. 2,000</RowContent>
            </Row>
            <Row>
              <RowContent>GROUP EVENTS</RowContent>
              <RowContent>Rs. 15,000</RowContent>
              <RowContent>Rs. 10,000</RowContent>
              <RowContent>Rs. 7,000</RowContent>
            </Row>
          </Container>
        </BottomWrapper>
      </Wrapper>
      <MobileInfo />
    </>
  );
};

export default Info;
