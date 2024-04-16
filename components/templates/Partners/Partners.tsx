import {
  AssetSection,
  FAQSection,
  Hero,
  OverviewSection,
} from "@/components/organisms";

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
