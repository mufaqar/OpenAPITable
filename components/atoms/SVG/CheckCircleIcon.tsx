import React from "react";

export const CheckCircleIcon = ({ color }: { color?: string }) => {
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
        clipPath="url(#clip0_1_12831)"
      >
        <path d="M11 6.191v.46a5 5 0 11-2.965-4.57"></path>
        <path d="M11 2.651L6 7.656l-1.5-1.5"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_12831">
          <path
            fill="#fff"
            d="M0 0H12V12H0z"
            transform="translate(0 .651)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
