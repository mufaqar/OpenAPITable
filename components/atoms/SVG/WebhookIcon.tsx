import { IconType } from "@/lib/types";
import React from "react";

export const WebhookIcon = ({ color, ...props }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={color}
        d="M30 30a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM20 13.75a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM10 30a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 23.75a6.25 6.25 0 1011.25 3.75H30"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.728 8.75a6.25 6.25 0 10-9.01 7.823L10 27.5"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M30 33.75a6.25 6.25 0 10-3.281-11.573L20 11.25"
      ></path>
    </svg>
  );
};
