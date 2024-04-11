import { IoIosSend } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const NameEmailContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputBox = styled.input`
  background: none;
  border: none;
  border-bottom-width: medium;
  border-bottom-style: none;
  border-bottom-color: currentcolor;
  border-bottom: 2px solid #fff;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 1rem;
  margin-top: 10px;

  ::placeholder {
    color: #f5f5f5;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #f5f5f5;
  }
`;

const TextArea = styled.textarea`
  border-color: #fff;
  background: transparent;
  color: #fff;
  resize: none;
  width: 100%;
  font-size: 15px;
  height: 120px;
  margin-top: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  font-family: Poppins;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 20px;
`;

const Button = styled.button`
  width: 7rem;
  height: 2.5rem;
  background-color: #cbaa00;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  border-radius: 2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const Form = () => {
  return (
    <Wrapper>
      <form name="contact" method="POST" action="">
        <NameEmailContainer>
          <InputBox
            type="text"
            className="pointer"
            placeholder="Name"
            required={true}
            name="Name"
          />
          <InputBox
            type="email"
            className="pointer"
            placeholder="Email"
            required={true}
            name="email"
          />
        </NameEmailContainer>
        <InputBox
          id="subject"
          type="text"
          className="pointer"
          required={true}
          placeholder="Subject"
        />
        <TextArea
          className="pointer"
          placeholder="Have a message for us ?"
          required={true}
          data-lt-tmp-id="lt-945523"
          spellCheck={false}
          data-gramm={false}
        ></TextArea>
        <ButtonWrapper>
          <Button id="submit" type="submit" value="" className="pointer">
            Send <IoIosSend />
          </Button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};

export default Form;
