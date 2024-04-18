import Image from "next/image";

interface TimeLineCardProps {
  icon?: string;
  title?: string;
  description: string;
}

export const TimeLineCard = ({
  icon,
  title,
  description,
}: TimeLineCardProps) => {
  return (
    <div className="py-6 px-3 mr-3 w-[284px] h-[206px] bg-white shadow-card rounded-br-[24px] rounded-tl-[24px] flex flex-col items-center justify-center">
      {icon && (
        <Image src={icon} width={164.36} height={50} alt="acceleration" />
      )}
      {title && <p className="text-p2 text-core-blue font-medium">{title}</p>}
      <p className="text-p2 text-core-blue mt-3">{description}</p>
    </div>
  );
};
