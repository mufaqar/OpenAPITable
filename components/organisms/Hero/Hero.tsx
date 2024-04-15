import { Breadcrumb } from "@/components/atoms";
import { HeroNavigation } from "@/components/molecules";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="py-6 bg-gradient-blue lg:rounded-bl-[160px] mt-[62px]">
      <div className="container">
        <div className="pb-6">
          <Breadcrumb activeItem="Camara" />
        </div>

        <div className="flex items-center justify-between mb-8 flex-wrap max-lg:space-y-10">
          <h1 className="text-white text-5xl lg:text-hero font-bold">
            GSMA Open Gateway/ <br />
            CAMARA
          </h1>

          <Image
            src="/oda/open-apis/images/partner-logo.png"
            width={284}
            height={70}
            alt="Vodafone Logo"
          />
        </div>

        <HeroNavigation />
      </div>
    </section>
  );
};
