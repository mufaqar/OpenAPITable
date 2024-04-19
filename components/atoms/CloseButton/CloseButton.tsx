import React from "react";
import { TimesIcon } from "../SVG";

interface ICloseButtonProps {
  onClick?: () => void;
}

export const CloseButton = ({ onClick }: ICloseButtonProps) => {
  return (
    <button
      className="size-10 bg-core-lightBlue rounded-tl-lg rounded-br-lg flex items-center justify-center"
      onClick={onClick}
    >
      <TimesIcon />
    </button>
  );
};
