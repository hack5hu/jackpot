import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="8"
    fill="none"
    viewBox="0 0 10 8"
    {...props}
  >
    <path
      fill="#fff"
      d="M3.969 7.365.438 3.832 1.77 2.5l2.198 2.198L8.239.427 9.574 1.76z"
    />
    <path
      stroke="#3d3752"
      strokeWidth="0.1"
      d="m3.969 6.48 4.719-4.72m-4.72 4.72v-.897m0 .896L1.324 3.833m2.646 3.532L.438 3.832 1.77 2.5l2.198 2.198L8.239.427 9.574 1.76z"
    />
  </svg>
);

export default CheckIcon;
