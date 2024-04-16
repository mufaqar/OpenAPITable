import { Breadcrumb, BreadcrumbItem } from "@/components/atoms";
import { HeroNavigation } from "@/components/molecules";
import Image from "next/image";

interface IHeroProps {
  title: string;
  imageSrc?: string;
  withNavigation?: boolean;
  breadcrumbItems: BreadcrumbItem[];
}

export const Hero = ({
  title,
  imageSrc,
  withNavigation,
  breadcrumbItems,
}: IHeroProps) => {
  return (
    <section className="py-6 bg-gradient-blue lg:rounded-bl-[160px] mt-[62px]">
      <div className="container">
        <div className="pb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="flex items-center justify-between mb-8 flex-wrap max-lg:space-y-10">
          <h1 className="text-white text-5xl lg:text-hero font-bold max-w-[780px]">
            {title}
          </h1>

          {imageSrc && (
            <Image src={imageSrc} width={284} height={70} alt="Vodafone Logo" />
          )}
        </div>

        {withNavigation ?? <HeroNavigation />}
      </div>
    </section>
  );
};
