import { IconType } from "@/lib/types";
import React from "react";

export const ListIcon = ({ active, ...rest }: IconType) => {
  const activeColor = active ? "#0D2548" : "#D2D4DA";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      {...rest}
    >
      <g opacity="0.4">
        <path
          d="M8 1H23"
          stroke={activeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 9H23"
          stroke={activeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 17H23"
          stroke={activeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1H3"
          stroke={activeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 9H3"
          stroke={activeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 17H3"
          stroke={activeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
