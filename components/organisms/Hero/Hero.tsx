import { Breadcrumb, MainHeading, BreadcrumbItem } from "@/components/atoms";
import { HeroNavigation } from "@/components/molecules";
import { HeroSubHeaderType } from "@/util/types/HeroSubHeaderType";
import Image from "next/image";

interface IHeroProps {
  title: string;
  imageSrc?: string;
  withNavigation?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
  subHeaders: HeroSubHeaderType;
}

export const Hero = ({
  title,
  imageSrc,
  withNavigation,
  breadcrumbItems,
  subHeaders,
}: IHeroProps) => {
  return (
    <section className="py-6 bg-core-blue lg:rounded-bl-[160px] mt-[62px]">
      <div className="container">
        <div className="pb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="flex items-center justify-between mb-8 flex-wrap max-lg:space-y-10">
          <MainHeading className="text-white">{title}</MainHeading>

          {imageSrc && (
            <Image src={imageSrc} width={284} height={70} alt="Vodafone Logo" />
          )}
        </div>

        {withNavigation ?? <HeroNavigation subHeaders={subHeaders} />}
      </div>
    </section>
  );
};
