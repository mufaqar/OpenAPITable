import Image from "next/image";

interface RecentCertificationCardProps {
  icon: string;
  title: string;
}

export const RecentCertificationCard = ({
  icon,
  title,
}: RecentCertificationCardProps) => {
  return (
    <div className="p-6 bg-white shadow-card rounded-br-[20px] rounded-tl-[20px]">
      <div className="flex-col max-w-[336px]">
        <Image
          src={`/oda/open-apis/images/comarch.svg`}
          width={235}
          height={35}
          alt="globe"
        />
        <p className="pt-2 text-core-blue text-p3 pb-3">Products</p>
        <div className="flex items-center justify-between max-h-16 py-2 pl-3 pr-6 bg-[#f3f4f6] rounded-br-[12px] rounded-tl-[12px]">
          <div className="flex items-center">
            <Image src={icon} width={48} height={49.26} alt="globe" />
            <p className="px-3 text-p3 text-core-blue">{title}</p>
          </div>
          <Image
            src={`/oda/open-apis/icons/arrow-right-card.svg`}
            width={10}
            height={5}
            alt="globe"
          />
        </div>
      </div>
    </div>
  );
};
