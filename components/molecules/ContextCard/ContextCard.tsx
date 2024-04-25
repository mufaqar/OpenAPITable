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
    <div className="bg-[#3c4d6c] border border-[#9ea4b6] rounded-tl-3xl rounded-br-3xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-white text-h5">{title}</p>

        <Image
          src={`/oda/open-apis/icons/globe-alt.svg`}
          width={56}
          height={56}
          alt="globe"
        />
      </div>
      <p className="text-white pt-2 text-2xl">{subTitle}</p>
      <p className="text-white pt-2 text-p3">{description}</p>
      <div className="mt-6 flex gap-3">
        <Button
          size="full"
          icon={
            <Image
              src={`/oda/open-apis/icons/download.svg`}
              width={15}
              height={15}
              alt="arrow right"
            />
          }
          className="h-11 border bg-transparent border-white text-white hover:scale-105 py-2 text-sm"
        >
          Download bundle
        </Button>
        <Button
          size="full"
          icon={
            <Image
              src={`/oda/open-apis/icons/arrow-right-icon.svg`}
              width={15}
              height={15}
              alt="arrow right"
            />
          }
          className="py-2 text-sm hover:scale-105 h-11"
        >
          View
        </Button>
      </div>
    </div>
    // <div className="p-6 border-1 border-[#9ea4b6] max-w-[384px] lg:h-[295px] bg-[#3c4d6c] shadow-card rounded-br-[24px] rounded-tl-[24px] flex-col">
    //   <div className="flex items-center justify-between">
    //     <p className="text-white text-h5">{title}</p>
    //     <Image
    //       src={`/oda/open-apis/icons/globe-alt.svg`}
    //       width={56}
    //       height={56}
    //       alt="globe"
    //     />
    //   </div>
    //   <p className="text-white pt-2 text-cardHead">{subTitle}</p>
    //   <p className="text-white pt-2 text-p3">{description}</p>
    //   <div className="flex sm:flex-col items-center justify-between gap-3">
    //     <Button
    //       icon={
    //         <Image
    //           src={`/oda/open-apis/icons/download.svg`}
    //           width={15}
    //           height={15}
    //           alt="arrow right"
    //         />
    //       }
    //       className="border bg-transparent border-white text-white w-[197px] h-11"
    //     >
    //       Download bundle
    //     </Button>
    //     <Button
    //       iconPosition="right"
    // icon={
    //   <Image
    //     src={`/oda/open-apis/icons/arrow-right-icon.svg`}
    //     width={15}
    //     height={15}
    //     alt="arrow right"
    //   />
    // }
    //       className="w-[130px] h-11"
    //     >
    //       View
    //     </Button>
    //   </div>
    // </div>
  );
};
