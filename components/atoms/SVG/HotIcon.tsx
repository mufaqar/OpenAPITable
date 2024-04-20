import React from "react";

export const HotIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      fill="none"
      viewBox="0 0 12 13"
    >
      <g clipPath="url(#clip0_1_12827)">
        <path
          fill={color}
          d="M6.25 12.651c-.86 0-1.656-.216-2.386-.65a4.72 4.72 0 01-1.73-1.775 4.907 4.907 0 01-.634-2.45c0-.343.05-.654.148-.931.1-.278.221-.526.366-.744a11.5 11.5 0 00.434-.715c.144-.258.266-.598.365-1.02.1-.422.149-.91.149-1.465 0 .078.04.155.12.229.08.074.175.148.285.223.11.074.232.205.365.392.133.188.242.406.326.656.121.383.32.729.593 1.037.274.31.564.463.868.463.396 0 .733-.23 1.01-.691.279-.461.484-1.082.617-1.863.134-.782.2-1.68.2-2.696.114.344.29.703.525 1.078.236.375.486.715.748 1.02.263.305.539.652.828 1.043.29.39.546.771.77 1.143.225.37.412.804.56 1.3.149.496.223 1.01.223 1.541 0 .883-.211 1.7-.634 2.45A4.72 4.72 0 018.636 12c-.73.434-1.526.65-2.386.65zm1.462-7.5c-.389 1.063-.754 1.813-1.097 2.25a2.36 2.36 0 01-.542.504 5.22 5.22 0 01-.594.358c-.179.09-.352.191-.52.304a1.215 1.215 0 00-.393.434 1.352 1.352 0 00-.143.65c0 .477.18.846.542 1.108.362.261.79.392 1.285.392.73 0 1.34-.197 1.827-.591.487-.395.73-.932.73-1.612a6.35 6.35 0 00-.125-1.353c-.084-.38-.179-.66-.285-.844a10.466 10.466 0 01-.366-.703 4.55 4.55 0 01-.32-.897z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_12827">
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
