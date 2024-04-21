import React from "react";

export const ClockIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      fill="none"
      viewBox="0 0 12 13"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#clip0_1_12815)"
      >
        <path d="M6 11.651a5 5 0 100-10 5 5 0 000 10z"></path>
        <path d="M6 3.651v3l2 1"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_12815">
          <path
            fill={color}
            d="M0 0H12V12H0z"
            transform="translate(0 .651)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
