import styled from "styled-components";
import MobilePromo from "../MobilePromo";
import { Suspense } from "react";

const PromoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(115deg, #181b30 26.24%, #9d55d8 133.84%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const PromoBorder = styled.div`
  width: 60vw;
  height: 70vh;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;

const PromoVideo = styled.video``;

const Promo = () => {
  return (
    <>
      <PromoWrapper>
        <PromoBorder>
          <Suspense fallback={<div>Video is loading please wait...</div>}>
            <PromoVideo
              width="100%"
              height="100%"
              controls
              src="./backdrop.mp4"
            />
          </Suspense>
        </PromoBorder>
      </PromoWrapper>
      <MobilePromo />
    </>
  );
};

export default Promo;
