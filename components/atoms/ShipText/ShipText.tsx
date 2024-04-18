import { FC } from "react";

interface ShipTextProps {
  text: string;
}

export const ShipText: FC<ShipTextProps> = (props) => {
  const { text } = props;
  return (
    <div
      className={
        "max-w-[63px] border-[0.7px] rounded-tl-[4px] rounded-br-[4px] py-[2px] px-1 flex items-center justify-center border-core-blue"
      }
    >
      <span className="text-[11px] leading-[13.2px] text-core-blue">{text}</span>
    </div>
  );
};
