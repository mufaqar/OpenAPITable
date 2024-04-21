

import React from "react";

export const PaginationRightArrow = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        stroke={color}
        d="M1 10.151a9.5 9.5 0 019.5-9.5H39v28.5a9.5 9.5 0 01-9.5 9.5H1v-28.5z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="square"
        strokeWidth="1.5"
        d="M17.5 14.651l5 5-5 5"
      ></path>
    </svg>
  );
};
