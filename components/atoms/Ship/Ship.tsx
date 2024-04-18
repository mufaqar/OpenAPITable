import { FC } from "react";
import Image from "next/image";

interface ShipProps {
  iconPath: string;
  text: string;
}

export const Ship: FC<ShipProps> = (props) => {
  const { iconPath, text } = props;
  return (
    <div
      className={
        "ml-3 border-2 rounded-tl-[10px] rounded-br-[10px] p-3 flex items-center justify-center space-x-[6px]"
      }
    >
      <Image src={iconPath} width={18} height={18} alt="Ship" />
      <span className="ml-[18px] text-core-blue">{text}</span>
    </div>
  );
};
