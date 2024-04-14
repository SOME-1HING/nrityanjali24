import { Suspense } from "react";
import styled from "styled-components";

const PromoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;
  position: relative;
  background: linear-gradient(115deg, #181b30 26.24%, #9d55d8 133.84%);

  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobilePromo = () => {
  return (
    <PromoWrapper>
      <Suspense fallback={<div>Video is loading please wait...</div>}>
        <video
          width="100%"
          height="100%"
          autoPlay
          controls
          src="./backdrop.mp4"
        />
      </Suspense>
    </PromoWrapper>
  );
};

export default MobilePromo;
