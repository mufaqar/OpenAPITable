import { Breadcrumb, MainHeading } from "@/components/atoms";
import { HeroNavigation } from "@/components/molecules";
import Image from "next/image";

interface IHeroProps {
  activeItem?: string,
  title: string,
  imageURL?: string,
  navigation?: boolean,
}

export const Hero = (props: IHeroProps) => {
  const { activeItem, title, imageURL, navigation } = props

  return (
    <section className="py-6 bg-core-blue lg:rounded-bl-[160px] mt-[62px]">
      <div className="container">
        <div className="pb-6">
          <Breadcrumb activeItem={activeItem} />
        </div>

        <div className="flex items-center justify-between mb-8 flex-wrap max-lg:space-y-10">
          <MainHeading className="text-white">
            {title}
          </MainHeading>
          {
            imageURL && <Image
              src={imageURL}
              width={284}
              height={70}
              alt="Vodafone Logo"
            />
          }

        </div>
        <HeroNavigation navigation={navigation}/>
        
      </div>
    </section>
  );
};
