import React from "react";

const ArrowLeftIcon = ({
  width = "1em",
  height = "1em",
  color = "rgb(131, 123, 153)",
}) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={{ color }}
  >
    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
  </svg>
);

export default ArrowLeftIcon;

