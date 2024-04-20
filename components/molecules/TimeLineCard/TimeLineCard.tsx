import { DashBottomLine, DashUpLine } from "@/components/atoms";
import Image from "next/image";

interface TimeLineCardProps {
  icon?: string;
  title?: string;
  description: string;
  index: number;
  linesOnTop?: boolean;
}

export const TimeLineCard = ({
  icon,
  title,
  description,
  index,
  linesOnTop = false,
}: TimeLineCardProps) => {
  return (
    <div className="flex flex-col items-center">
      {linesOnTop && (
        <DashBottomLine
          color={
            index % 3 === 0
              ? "#E0121D"
              : index % 3 === 1
                ? "#DC6526"
                : "#662482"
          }
          month="December"
          year="2024"
        />
      )}
      <div className="my-3 py-6 px-3 mr-3 w-[284px] h-[206px] bg-white shadow-card rounded-br-[24px] rounded-tl-[24px] flex flex-col items-center justify-center">
        {icon && (
          <Image src={icon} width={164.36} height={50} alt="acceleration" />
        )}
        {title && <p className="text-p2 text-core-blue font-medium">{title}</p>}
        <p className="text-p2 text-core-blue mt-3">{description}</p>
      </div>
      {!linesOnTop && (
        <DashUpLine
          color={
            index % 3 === 0
              ? "#E0121D"
              : index % 3 === 1
                ? "#DC6526"
                : "#662482"
          }
          month="December"
          year="2024"
        />
      )}
    </div>
  );
};
