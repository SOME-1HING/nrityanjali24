import styled from "styled-components";
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  z-index: 1;
  @media (max-device-width: 768px) {
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
  gap: 2rem;

  @media (max-device-width: 768px) {
    width: 90vw;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-device-width: 768px) {
    text-align: center;
    width: 100vw;
  }
`;

const TitleAbout = styled.div`
  color: #f586ff;
  font-family: Samarkan;
  font-size: 75.865px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.793px;
  text-transform: uppercase;

  @media (max-device-width: 768px) {
    font-size: 48px;
    -webkit-text-stroke-width: 1px;
    letter-spacing: 12.897px;
    text-align: center;
  }
`;

const TitleUs = styled.div`
  color: #fff;
  font-family: Scheherazade;
  font-size: 75.865px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.793px;
  text-transform: uppercase;

  @media (max-device-width: 768px) {
    font-size: 48px;
    letter-spacing: 12.897px;
    text-align: center;
  }
`;

const TitleLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const TitleLine = styled.div`
  width: 50vw;
  height: 2px;
  background-color: #fff;
  border-radius: 10px;

  @media (max-device-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
`;

const ContentLine = styled.div`
  height: 40vh;
  width: 10px;
  background-color: #f586ff;
  border-radius: 10px;
  border: 1.5px solid #fff;

  @media (max-device-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
  font-size: 27.972px;
  line-height: normal;

  @media (max-device-width: 768px) {
    font-size: 16px;
  }
`;

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Header>
          <Title>
            <TitleAbout>About</TitleAbout>
            <TitleUs>Us</TitleUs>
          </Title>
          <TitleLineWrapper>
            <TitleLine />
            <TitleLine />
            <TitleLine />
          </TitleLineWrapper>
        </Header>
        <ContentWrapper>
          <ContentLine />
          <Content>
            Nrityanjali is a celebration and ode to the enthralling art form of
            dance. Annually, this intercollegiate dance festival at the national
            level attracts enthusiastic and passionate participation from
            institutions in Bangalore and neighboring states. A day-long program
            showcasing various forms and styles of dance is held during every
            academic year. We return to the world of dance with more interesting
            avenues after a series of triumphant shows over the last few years.
            Kristu Jayanti College presents to you, a rhythmic culmination of
            Traditional, Classical, Western, Folk Dance, and more at NRITYANJALI
            2024 - A Salutation to Dance.
          </Content>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;
