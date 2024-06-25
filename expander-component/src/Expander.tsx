import React, { useState } from "react";

interface ExpanderPropType {
  children: React.ReactNode;
  minWords: number;
  openStart: boolean;
  colorButton: string;
  containerBorder: string;
  containerBackground: string;
}

// const containerStyle = {
//   color: "#000",
//   backgroundColor: "#fff",
// };

export default function Expanders({
  children,
  minWords = 10,
  openStart = false,
  colorButton = "blue",
  containerBorder = "none",
  containerBackground = "#fff",
}: ExpanderPropType) {
  const textArray = children?.toString().split(" ").slice(0, minWords);
  const [isOpen, setIsOpen] = useState<boolean>(openStart);

  const buttonStyle = {
    cursor: "pointer",
    color: colorButton,
  };

  const containerStyle = {
    border: containerBorder,
    background: containerBackground,
  };

  return (
    <div style={containerStyle}>
      {isOpen ? children : textArray?.map((word) => `${word} `)}
      {isOpen ? " " : "... "}
      <span
        role="button"
        style={buttonStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Show less" : "Show more"}
      </span>
    </div>
  );
}
