import React from "react";
import { twMerge } from "tailwind-merge";

interface IBadgeProps {
  icon?: React.ReactNode;
  text: string;
  subText?: string;
  block?: boolean;
  size?: "sm" | "md" | "xs";
  color?: string;
}

export const Badge = ({
  icon,
  text,
  subText,
  block,
  size,
  color,
}: IBadgeProps) => {
  return (
    <div
      className={twMerge(
        "rounded-[10px_0] bg-[rgba(13,37,72,0.05)] inline-flex items-center justify-center py-3 px-2 gap-2 max-sm:p-[5px]",
        block && "flex w-full",
        size === "xs" && "rounded-[4px_0] bg-dark-grey w-12 h-[14px] p-0",
        size === "sm" && "px-2 py-3",
      )}
      style={{ backgroundColor: color }}
    >
      {icon && <div>{icon}</div>}
      <p
        className={twMerge(
          "text-core-blue font-medium text-sm",
          size === "xs" && "text-[8px] font-medium",
        )}
      >
        {text} <span className="font-normal">{subText}</span>
      </p>
    </div>
  );
};
