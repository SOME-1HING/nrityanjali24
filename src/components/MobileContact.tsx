import styled from "styled-components";
import Coordinators from "./Coordinators";
import Form from "./Form";

const Wrapper = styled.section`
  height: 100%;
  width: 100vw;
  display: none;
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
    display: flex;
  }
`;

const ContactSection = styled.div`
  width: 100vw;
  height: 100%;
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
  flex-direction: column;
  gap: 4rem;
  padding-top: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 50%;
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
  padding-bottom: 1rem;
`;

const MobileContact = () => {
  return (
    <Wrapper>
      <ContactSection id="contact">
        <ContactTitle>Contact</ContactTitle>
        <ContactContainer>
          <BoxWrapper>
            <Coordinators />
          </BoxWrapper>
          <ContactForm>
            <Form />
          </ContactForm>
          <Address>
            <AddressTitle>ADDRESS</AddressTitle>
            <AddressContent>
              p.O Hennur Main Rd, K Narayanpura, Kothnur, Bengaluru, Karnataka
              560077
            </AddressContent>
          </Address>
        </ContactContainer>
      </ContactSection>
    </Wrapper>
  );
};

export default MobileContact;
