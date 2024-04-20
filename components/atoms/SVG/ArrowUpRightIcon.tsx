import React from "react";

export const ArrowUpRightIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      fill="none"
      viewBox="0 0 12 13"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 10.151l7-7M2.5 3.151h7v7"
      ></path>
    </svg>
  );
};
