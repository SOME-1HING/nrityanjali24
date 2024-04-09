import styled from "styled-components";

const Separator = styled.div`
  height: 20vh;
  background: linear-gradient(
    to bottom,
    rgba(91, 71, 5, 0.8),
    rgba(0, 0, 0, 1) 100%
  );
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

  @media (max-device-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
`;
const Footer = () => {
  return (
    <>
      <Separator />
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
            <a className="pointer" href="#schedule">
              <ListItem>schedule</ListItem>
            </a>
            <a className="pointer" href="#group">
              <ListItem>group events</ListItem>
            </a>
            <a className="pointer" href="#contact">
              <ListItem>contact</ListItem>
            </a>
            <a className="pointer" href="" target="_blank">
              <ListItem>register</ListItem>
            </a>
            <a className="pointer" href="" target="_blank">
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
            <a className="pointer" href="tel:	080-28465611">
              <ListItem>080-28465611</ListItem>
            </a>
            <a className="pointer" href="mailto:_____@kristujayanti.com">
              <ListItem className="e-mail-link">
                ____@kristujayanti.com
              </ListItem>
            </a>
          </ul>
        </div>
        <CopyRight>Copyright © 2024 All rights reserved</CopyRight>
      </Wrapper>
    </>
  );
};

export default Footer;
