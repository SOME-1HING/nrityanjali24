import styled from "styled-components";
import Form from "./Form";

const ContactContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding-top: 5rem;
  }
`;

const Box = styled.div`
  width: 80vw;
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

const ContactForm = styled.div`
  width: 100%;
  height: 350px;
  scale: 0.9;
`;

const Map = styled.iframe`
  width: 100vw;
  border: 0;
  height: 300px;
`;

const MobileContact = () => {
  return (
    <ContactContainer>
      <Box
        style={{
          background: "#8C6F09",
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
      <Box style={{ background: "#8C6F09" }}>
        <BoxTitle>ADDRESS</BoxTitle>
        P.O Hennur Main Rd, K Narayanpura, Kothnur, Bengaluru, Karnataka 560077
      </Box>
      <ContactForm>
        <Form />
      </ContactForm>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497491.18658782134!2d77.642963!3d13.057943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17578c79da7d%3A0xe96dcd8e2b982f8e!2sKristu%20Jayanti%20College%2C%20Autonomous!5e0!3m2!1sen!2sus!4v1712322172195!5m2!1sen!2sus"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Map>
    </ContactContainer>
  );
};

export default MobileContact;
