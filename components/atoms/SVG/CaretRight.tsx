import { IconType } from "@/lib/types";
import React from "react";

export const CaretRight = ({ ...props }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#clip0_1_39787)">
        <path
          stroke="#0D2548"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 3l5 5-5 5"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_39787">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
