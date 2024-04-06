  import styled from "styled-components";
import Card from "./Card";
import AccordionModel from "../model/AccordionModel";

const Wrapper = styled.ul`
  width: 1080px;
  display: flex;
  list-style-type: none;
  overflow: hidden;
  height: 100%;
  font-size: 0;
  flex-grow: initial;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }
`;

const Tabs = styled.li`
  display: flex;
  background-color: #cbaa00;
  width: 60px;
  height: 500px;
  overflow: hidden;
  position: relative;
  margin: 0;
  font-size: 16px;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.7s ease-in-out;

  @media (max-width: 768px) {
    width: 80vw;

    background-color: transparent;
  }
  .content {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  h1 {
    color: #000;
    font-family: Oswald;
    font-size: 51.854px;
    font-style: normal;
    font-weight: 700;

    text-transform: capitalize;
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
    transform: rotate(180deg);

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover {
    width: 450px;
    background-color: transparent;

    @media (max-width: 768px) {
      background-color: transparent;
    }

    h1 {
      display: none;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .paragraph {
    position: relative;
    width: 360px;
    margin-left: 80px;
    padding: 50px 0 0 10px;
    height: 200px;
    background: #fff;

    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.88em;
      line-height: 1.5em;
      padding-right: 30px;
    }
  }
`;

const Accordion: React.FC<{ arr: Array<AccordionModel> }> = ({ arr }) => {
  return (
    <Wrapper className="accordion">
      {arr.map((item: AccordionModel) => (
        <Tabs className="tabs">
          <h1>{item.title}</h1>
          <div className="content">
            <Card model={item} />
          </div>
        </Tabs>
      ))}
    </Wrapper>
  );
};

export default Accordion;
