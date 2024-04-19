import { AssetSection, FAQSection, Hero } from "@/components/organisms";
import { OverviewSection } from "@/components/organisms/OverviewSection/OverviewSection";

export const Partners = () => {
  return (
    <>
      <Hero
        title="GSMA Open Gateway/ CAMARA"
        breadcrumbItems={[{ title: "Camara", href: "" }]}
        imageSrc="/oda/open-apis/images/partner-logo.png"
      />
      <OverviewSection />
      <AssetSection />
      <FAQSection />
    </>
  );
};
