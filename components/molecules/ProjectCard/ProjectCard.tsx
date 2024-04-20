import { Button, IconsCard } from "@/components/atoms";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <div className="w-[550px] h-[553px] bg-white shadow-card rounded-br-[40px] rounded-tl-[40px] flex flex-col items-center">
      <div className="relative">
        <Image
          className="rounded-tl-[40px]"
          src={"/oda/open-apis/images/project.svg"}
          width={550}
          height={183}
          alt="project"
        />
        <button className="absolute bottom-[10px] right-[20px] bg-[#35AADE] text-white px-4 py-2 rounded-br-[8px] rounded-tl-[8px] font-medium text-[12px] leading-[16.8px]">
          FINALIST
        </button>
      </div>
      <div className="flex flex-col p-8">
        <h4 className="text-h4 text-core-blue font-bold">{title}</h4>
        <p className="text-p2 text-core-blue my-[30px]">{description}</p>
        <IconsCard iconPaths={iconPaths} />
      </div>
      <div className="bg-light-grey w-full h-[101px] mt-8 rounded-br-[40px]">
        <div className="flex p-8 justify-between items-center">
          <div className="flex">
            <p className="font-bold text-core-blue text-p3 pr-1">URN:</p>
            <p className="text-core-blue text-p3">C23.5.451</p>
          </div>
          <Button
            iconPosition="right"
            icon={
              <Image
                src={`/oda/open-apis/icons/arrow-right-blue.svg`}
                width={20}
                height={20}
                alt="arrow right"
              />
            }
            className="w-[174px] h-[20px] bg-transparent font-bold text-core-lightBlue"
          >
            Project details
          </Button>
        </div>
      </div>
    </div>
  );
};
const iconPaths = [
  "/oda/open-apis/icons/bmc.svg",
  "/oda/open-apis/icons/bmc.svg",
  "/oda/open-apis/icons/bmc.svg",
  "/oda/open-apis/icons/bmc.svg",
  "/oda/open-apis/icons/bmc.svg",
  "/oda/open-apis/icons/bmc.svg",
];
