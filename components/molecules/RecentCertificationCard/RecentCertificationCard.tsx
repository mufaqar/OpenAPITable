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
    <div className="p-6 max-w-[384px] bg-white shadow-card rounded-br-[20px] rounded-tl-[20px] flex-col">
      <div className="flex-col max-w-[336px]">
        <Image
          src={`/oda/open-apis/images/comarch.svg`}
          width={235}
          height={35}
          alt="globe"
        />
        <p className="pt-2 text-core-blue text-label pb-3">Products</p>
        <div className="flex lg:min-w-[336px] items-center justify-between py-2 pl-3 pr-6 bg-[#f3f4f6] h-[65.26px] rounded-br-[12px] rounded-tl-[12px]">
          <div className="flex items-center">
            <Image
              src={icon}
              width={48}
              height={49.26}
              alt="globe"
            />
            <p className="pl-3 text-core-blue">{title}</p>
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
