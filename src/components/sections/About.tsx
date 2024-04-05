import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;

  background-color: #000;
  gap: 10rem;
  margin-top: -8rem;

  @media (max-width: 768px) {
    margin-top: -16rem;
    margin-bottom: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
  gap: 2rem;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TitleAbout = styled.div`
  -webkit-text-stroke-width: 2.2px;
  -webkit-text-stroke-color: #cbaa00;
  font-family: "Oswald";
  font-size: 75.865px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 12.897px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 48px;
    -webkit-text-stroke-width: 1px;
    letter-spacing: 12.897px;
    text-align: center;
  }
`;

const TitleUs = styled.div`
  color: #cbaa00;
  font-family: "Oswald";
  font-size: 75.865px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 12.897px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 48px;
    letter-spacing: 12.897px;
    text-align: center;
  }
`;

const TitleLine = styled.div`
  width: 40vw;
  height: 2px;
  background-color: #fff;
  border-radius: 10px;
  @media (max-width: 768px) {
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
  background-color: #cbaa00;
  border-radius: 10px;
  border: 1.5px solid #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  color: #fff;
  font-family: "Imprima", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
  font-size: 27.972px;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PromoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Monitor = styled.img``;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>
            <TitleAbout>About</TitleAbout>
            <TitleUs>Us</TitleUs>
          </Title>
          <TitleLine />
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

      <PromoWrapper>
        <Monitor src="./monitor.png" />
      </PromoWrapper>
    </Wrapper>
  );
};

export default About;
