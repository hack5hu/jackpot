import React from "react";

const ArrowRightIcon = ({
  width = "1em",
  height = "1em",
  color = "rgb(131, 123, 153)",
  rotate = 0, // degrees: 0, 90, 180, etc.
  transition = true, // optional transition effect
}) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={{
      color,
      transform: `rotate(${rotate}deg)`,
      transition: transition ? "transform 0.3s ease" : undefined,
    }}
  >
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
  </svg>
);

export default ArrowRightIcon;
