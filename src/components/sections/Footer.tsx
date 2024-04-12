import styled from "styled-components";

const Separator = styled.div`
  height: 20vh;
  background: linear-gradient(to bottom, #9d02fc 20%, rgba(0, 0, 0, 1) 100%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Map = styled.iframe`
  width: 100vw;
  border: 0;
  height: 300px;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  justify-content: space-evenly;
  height: 50vh;
  background-color: #000000;
  color: white;
  font-family: Poppins;
  font-style: normal;
  padding-top: 30px;
  position: relative;

  @media (max-device-width: 768px) {
    flex-direction: column;
    height: 100vh;
    padding-top: 0;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-height: 400px) {
    height: 800px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  user-select: none;

  @media (max-device-width: 768px) {
    text-align: center;
  }
`;

const ListItem = styled.li`
  text-transform: capitalize;
  line-height: 30px;
  font-weight: 300;
  color: #ffffff;
  opacity: 0.6;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }

  @media (max-device-width: 768px) {
    text-align: center;
    list-style: none;
  }
`;

const CopyRight = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 27px;
  position: absolute;
  bottom: 0px;

  a {
    text-decoration: none;
    color: #ffffff;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-device-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
`;
const Footer = () => {
  return (
    <>
      <Separator />
      <Map
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497491.18658782134!2d77.642963!3d13.057943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17578c79da7d%3A0xe96dcd8e2b982f8e!2sKristu%20Jayanti%20College%2C%20Autonomous!5e0!3m2!1sen!2sus!4v1712322172195!5m2!1sen!2sus"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Map>
      <Wrapper>
        <Links>
          <Title>Links</Title>
          <ul>
            <a className="pointer" href="#home">
              <ListItem>home</ListItem>
            </a>
            <a className="pointer" href="#about">
              <ListItem>about</ListItem>
            </a>
            <a className="pointer" href="#solo">
              <ListItem>Solo Events</ListItem>
            </a>
            <a className="pointer" href="#group">
              <ListItem>group events</ListItem>
            </a>
            <a className="pointer" href="#info">
              <ListItem>info</ListItem>
            </a>
            <a className="pointer" href="#contact">
              <ListItem>contact</ListItem>
            </a>
            <a
              className="pointer"
              href="https://portal.kristujayanti.edu.in/register-nrityanjali-2024"
              target="_blank"
            >
              <ListItem>register</ListItem>
            </a>
            <a
              className="pointer"
              href="./Nrityanjali24_Brochure.pdf"
              download="Nrityanjali24_Brochure.pdf"
              target="_blank"
            >
              <ListItem>brochure</ListItem>
            </a>
          </ul>
        </Links>

        <div className="footer-about footer-common">
          <Title>About</Title>
          <ul>
            <a
              className="pointer"
              href="https://kristujayanti.edu.in/"
              target="_blank"
            >
              <ListItem>kristu jayanti college</ListItem>
            </a>
            <a
              className="pointer"
              href="https://kristujayanti.edu.in/about/founder.php"
              target="_blank"
            >
              <ListItem>founder</ListItem>
            </a>
            <a
              className="pointer"
              href="https://kristujayanti.edu.in/about/history.php"
              target="_blank"
            >
              <ListItem>history</ListItem>
            </a>
            <a
              className="pointer"
              href="https://kristujayanti.edu.in/about/vision_mission_goals.php"
              target="_blank"
            >
              <ListItem>vision, mission, goals</ListItem>
            </a>
            <a
              className="pointer"
              href="https://kristujayanti.edu.in/studentlife/literary_cultural_academy.php"
              target="_blank"
            >
              <ListItem>Literary and Cultural Association</ListItem>
            </a>
          </ul>
        </div>

        <div className="contact footer-common">
          <Title>Contact</Title>
          <ul>
            <a className="pointer" href="tel:	080-68737777">
              <ListItem>(080) 68737777</ListItem>
            </a>
            <a className="pointer" href="mailto:info@kristujayanti.com">
              <ListItem
                className="e-mail-link"
                style={{ textTransform: "none" }}
              >
                info@kristujayanti.com
              </ListItem>
            </a>
          </ul>
        </div>
        <CopyRight>
          Website made by{" "}
          <a href="https://github.com/SOME-1HING" target="_blank">
            SOME-1HING
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/seen_rishzz/" target="_blank">
            seen_rishzz
          </a>{" "}
          | © 2024 All rights reserved
        </CopyRight>
      </Wrapper>
    </>
  );
};

export default Footer;
