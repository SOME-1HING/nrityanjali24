import styled from "styled-components";
import MobileContact from "../MobileContact";
import Form from "../Form";

const Wrapper = styled.section`
  width: 100vw;
  height: 200vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 1) 20%
    ),
    linear-gradient(90deg, rgba(91, 71, 5, 1) 10%, rgba(137, 126, 7, 1) 80%);
  justify-content: center;
  align-items: center;
  gap: 10rem;

  @media (max-device-width: 768px) {
    height: 320vh;
  }

  @media (max-device-height: 768px) {
    height: 350vh;
  }

  @media screen and (max-height: 500px) {
    min-height: 747vh;
    overflow-y: hidden;
  }
`;

const Container = styled.div`
  margin-top: 15rem;
  width: 100vw;
  height: 120vh;
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 1) 120%),
    url("./hand.png");
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-device-width: 768px) {
    margin-top: 20rem;
    height: 100vh;
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 1) 90%),
      url("./hand.png");
    background-position: center;
  }

  @media screen and (max-height: 400px) {
    min-height: 100vh;
  }
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

  @media (max-device-width: 768px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 1rem;
  }

  @media (max-device-width: 400px) {
    font-size: 100px;
  }

  @media screen and (max-height: 400px) {
    font-size: 50px;
  }
`;

const ContactSection = styled.div`
  width: 100vw;
  height: 120vh;
  margin-top: -15rem;
  background: linear-gradient(
    to bottom,
    #000000,
    rgba(91, 71, 5, 1) 80%,
    rgba(91, 71, 5, 0.8) 100%
  );
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-device-width: 768px) {
    height: 200vh;
  }

  @media (max-device-height: 768px) {
    height: 250vh;
  }
  @media screen and (max-height: 400px) {
    margin-top: -10rem;
    min-height: 550vh;
  }
`;

const Contact = styled.div`
  color: #fff;
  font-family: "Paytone One";
  font-size: 27.094px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.251px;
  text-transform: uppercase;
  overflow: hidden;

  @media (max-device-width: 768px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-height: 400px) {
    min-height: 30px;
  }
`;
const ContactContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 4rem;
  padding-top: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-device-width: 768px) {
    display: none;
  }
`;

const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  gap: 2rem;
  width: 100%;
  height: 100%;
`;
const BoxWrapper = styled.div`
  display: flex;

  gap: 2rem;

  @media (max-device-width: 768px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 14.525px;
  padding: 1rem;
  padding-top: 5rem;
  display: flex;
  text-align: center;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  gap: 1rem;

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 13.547px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: small-caps;
  letter-spacing: 1.626px;
`;

const BoxTitle = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 16.01px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-variant: small-caps;
  letter-spacing: 1.921px;
`;

const Map = styled.iframe`
  width: 500px;
  border: 0;
  border-radius: 1rem;
  height: 200px;
  @media (max-device-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ContactRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: start;
`;

const ContactForm = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const AddressTitle = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 27.094px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.251px;
  text-transform: capitalize;
`;

const AddressContent = styled.div`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 22.168px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.66px;
  text-transform: capitalize;
`;

const Join = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <JoinUs>Join Us</JoinUs>
        </Container>
        <ContactSection id="contact">
          <Contact>Contact</Contact>
          <ContactContainer>
            <ContactLeft>
              <BoxWrapper>
                <Box
                  style={{
                    background:
                      "linear-gradient(180deg, #C2A337 0%, #A1851F 100%)",
                  }}
                >
                  <BoxTitle>STUDENT COORDINATOR</BoxTitle>
                  Mr. Achsah Varghese: <br />
                  ++454654654
                  <br />
                  Mr. Ajay Krishna S: <br /> +915448644
                </Box>
                <Box style={{ background: "#8C6F09" }}>
                  <BoxTitle>FACULTY COORDINATOR</BoxTitle>
                  Ms. Shilpa Rao
                  <br />
                  Mr. Don Caeiro
                </Box>
              </BoxWrapper>

              <Map
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497491.18658782134!2d77.642963!3d13.057943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17578c79da7d%3A0xe96dcd8e2b982f8e!2sKristu%20Jayanti%20College%2C%20Autonomous!5e0!3m2!1sen!2sus!4v1712322172195!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Map>
            </ContactLeft>
            <ContactRight>
              <ContactForm>
                <Form />
              </ContactForm>
              <Address>
                <AddressTitle>ADDRESS</AddressTitle>
                <AddressContent>
                  p.O Hennur Main Rd, K Narayanpura, Kothnur, Bengaluru,
                  Karnataka 560077
                </AddressContent>
              </Address>
            </ContactRight>
          </ContactContainer>
          <MobileContact />
        </ContactSection>
      </Wrapper>
    </>
  );
};

export default Join;
