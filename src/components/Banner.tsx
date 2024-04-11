import React from "react";
import { uid } from "uid";
import styled from "styled-components";

interface BannerProps {
  images: string[];
  direction: "left" | "right";
}

const Inner = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 300px;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
`;

const ImageWrapper = styled.div<{ direction: "left" | "right" }>`
  display: flex;
  animation: ${(props) =>
      props.direction === "left" ? "swipeLeft" : "swipeRight"}
    30s linear infinite backwards;

  @keyframes swipeLeft {
    0% {
      transform: translate(0);
    }

    100% {
      transform: translate(-100%);
    }
  }

  @keyframes swipeRight {
    0% {
      transform: translate(-100%);
    }

    100% {
      transform: translate(0);
    }
  }
`;

const Image = styled.img`
  max-width: 300px;
  height: 300px;
  padding: 0 2px;
  object-fit: cover;

  :last-of-type {
    padding-left: 0;
  }
`;

const Banner: React.FC<BannerProps> = ({ images, direction }) => {
  return (
    <Inner>
      <Wrapper>
        <ImageWrapper direction={direction}>
          {images.map((src) => (
            <div key={uid()}>
              <Image src={src} alt={uid()} />
            </div>
          ))}
        </ImageWrapper>
        <ImageWrapper direction={direction}>
          {images.map((src) => (
            <div key={uid()}>
              <Image src={src} alt={uid()} />
            </div>
          ))}
        </ImageWrapper>
        <ImageWrapper direction={direction}>
          {images.map((src) => (
            <div key={uid()}>
              <Image src={src} alt={uid()} />
            </div>
          ))}
        </ImageWrapper>
      </Wrapper>
    </Inner>
  );
};

export { Banner };
