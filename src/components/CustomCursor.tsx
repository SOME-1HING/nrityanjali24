import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface CursorProps {
  size: number;
  display: string;
}

const Cursor = styled.div<CursorProps>`
  position: fixed;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  ${({ display }) => `
    display: ${display};
  `}
`;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -200, y: 0 });
  const [color, setColor] = useState("white");
  const [size, setSize] = useState(50);
  const [display, setDisplay] = useState("block");

  const getNegativeColorAtPosition = (x: number, y: number): string => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const imageData = context!.getImageData(x, y, 1, 1).data;

    return `rgb(${255 - imageData[0]}, ${255 - imageData[1]}, ${
      255 - imageData[2]
    })`;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setColor(getNegativeColorAtPosition(e.clientX, e.clientY));
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const elementsWithPointerClass = document.getElementsByClassName("pointer");
    const elementsWithMapClass = document.getElementsByClassName("map");
    const handleMouseEnter = () => setSize(25);
    const handleMouseLeave = () => setSize(50);

    Array.from(elementsWithPointerClass).forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    Array.from(elementsWithMapClass).forEach((element) => {
      element.addEventListener("mouseenter", () => setDisplay("none"));
      element.addEventListener("mouseleave", () => setDisplay("block"));
    });

    return () => {
      Array.from(elementsWithPointerClass).forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      Array.from(elementsWithPointerClass).forEach((element) => {
        element.removeEventListener("mouseenter", () => setDisplay("none"));
        element.removeEventListener("mouseleave", () => setDisplay("block"));
      });
    };
  }, []);

  return (
    <Cursor
      style={{ left: position.x, top: position.y, backgroundColor: color }}
      size={size}
      display={display}
    />
  );
};

const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || Math.max(window.innerWidth, window.innerHeight) < 768;

const CursorWrapper: React.FC = () => {
  if (isMobileDevice) {
    return null; // don't render the custom cursor on mobile devices
  }

  return <CustomCursor />;
};

export default CursorWrapper;
