import styled from "styled-components";
import MobileContact from "../MobileContact";
import Form from "../Form";
import Coordinators from "../Coordinators";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
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

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const ContactSection = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #000000 26.24%, #9d02fc 100%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactTitle = styled.div`
  color: #fff;
  font-family: "Paytone One";
  font-size: 27.094px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.251px;
  text-transform: uppercase;
  overflow: hidden;
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
  width: 100%;
  height: 50%;
`;

const Map = styled.iframe`
  width: 600px;
  border: 0;
  border-radius: 1rem;
  height: 200px;
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

const Contact = () => {
  return (
    <>
      <Wrapper>
        <ContactSection id="contact">
          <ContactTitle>Contact</ContactTitle>
          <ContactContainer>
            <ContactLeft>
              <BoxWrapper>
                <Coordinators />
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
        </ContactSection>
      </Wrapper>
      <MobileContact />
    </>
  );
};

export default Contact;
