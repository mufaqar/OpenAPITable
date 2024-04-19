import { Breadcrumb, MainHeading, BreadcrumbItem } from "@/components/atoms";
import { HeroNavigation } from "@/components/molecules";
import Image from "next/image";

interface IHeroProps {
  title: string;
  imageSrc?: string;
  withNavigation?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
}

export const Hero = ({
  title,
  imageSrc,
  withNavigation,
  breadcrumbItems,
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

        {withNavigation ?? <HeroNavigation />}
      </div>
    </section>
  );
};
