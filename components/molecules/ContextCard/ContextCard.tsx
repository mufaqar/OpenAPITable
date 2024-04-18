import { Button } from "@/components/atoms";
import Image from "next/image";

interface ContextCardProps {
  title: string;
  subTitle: string;
  description: string;
}

export const ContextCard = ({
  title,
  subTitle,
  description,
}: ContextCardProps) => {
  return (
    <div className="p-6 border-1 border-[#9ea4b6] max-w-[384px] lg:h-[295px] bg-[#3c4d6c] shadow-card rounded-br-[24px] rounded-tl-[24px] flex-col">
      <div className="flex items-center justify-between max-w-[336px]">
        <p className="text-white text-h5">{title}</p>
        <Image
          src={`/oda/open-apis/icons/globe-alt.svg`}
          width={56}
          height={56}
          alt="globe"
        />
      </div>
      <p className="text-white pt-2 text-cardHead">{subTitle}</p>
      <p className="text-white pt-2 text-label pb-6">{description}</p>
      <div className="flex items-center justify-between w-[336px]">
        <Button
          icon={
            <Image
              src={`/oda/open-apis/icons/download.svg`}
              width={20}
              height={20}
              alt="arrow right"
            />
          }
          className="border bg-transparent border-white text-white w-[197px] h-11"
        >
          Download bundle
        </Button>
        <Button
          iconPosition="right"
          icon={
            <Image
              src={`/oda/open-apis/icons/arrow-right-icon.svg`}
              width={20}
              height={20}
              alt="arrow right"
            />
          }
          className="w-[130px] h-11"
        >
          View
        </Button>
      </div>
    </div>
  );
};
