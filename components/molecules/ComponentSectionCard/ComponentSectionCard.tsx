import { ShipText } from "@/components/atoms";
import Image from "next/image";

interface ComponentSectionCardProps {
  title: string;
  icon: string;
  shipTitle: string;
}

export const ComponentSectionCard = ({
  icon,
  title,
  shipTitle,
}: ComponentSectionCardProps) => {
  return (
    <div className="shadow rounded flex min-w-[540px] items-center justify-between py-3 px-2 bg-white h-[64px] gap-3">
      <div className="flex items-center">
        <Image src={icon} width={40} height={40} alt="globe" />
        <div className="flex-col items-start pl-3">
          <p className="text-core-blue">{title}</p>
          <ShipText text={shipTitle} />
        </div>
      </div>
      <Image
        src={`/oda/open-apis/icons/arrow-right-card.svg`}
        width={16}
        height={16}
        alt="globe"
      />
    </div>
  );
};
