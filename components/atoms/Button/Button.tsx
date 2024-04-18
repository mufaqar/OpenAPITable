'use client'
import { twMerge } from "tailwind-merge";

interface IButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode | undefined;
  size?: "sm" | "md" | "full";
  color?: "primary" | "secondary" | "white";
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

// @FIXME: This component needs to be updated in the future
export const Button = ({
  children,
  icon,
  size = "sm",
  color = "primary",
  iconPosition = "left",
  type = "button",
  className,
  onClick,
}: IButtonProps) => {
  const sizes = {
    full: "w-full",
    sm: "w-[144px]",
    md: "w-[200px]",
  };

  const colors = {
    primary: "bg-core-lightBlue text-white",
    secondary: "bg-core-blue text-white",
    white: "bg-white text-[#3577DA] border-2 border-[#3577DA]",
  };


  return (
    <button
      className={twMerge(
        `rounded-tl-[10px] rounded-br-[10px] p-3 flex items-center justify-center space-x-[6px] ${iconPosition === 'right' && 'gap-1.5 flex-row-reverse'}`,
        sizes[size],
        colors[color],
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {icon}
      <span className="font-bold">{children}</span>
    </button>
  );
};
