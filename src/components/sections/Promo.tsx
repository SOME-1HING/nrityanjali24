import styled from "styled-components";

const PromoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const PromoBorder = styled.div`
  width: 60vw;
  height: 70vh;
  border: 1px solid #cbaa00;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;

const PromoVideo = styled.video``;
const Promo = () => {
  return (
    <PromoWrapper>
      <PromoBorder>
        <PromoVideo width="100%" height="100%" controls src="./backdrop.mp4" />
      </PromoBorder>
    </PromoWrapper>
  );
};

export default Promo;
