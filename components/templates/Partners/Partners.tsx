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
      <OverviewSection
        imageSrc="/oda/open-apis/images/powered-by-oda.png"
        list={[
          {
            label: "Number of APIS",
            value: "1",
          },
          {
            label: "Release Date",
            value: "23 FEB 2024",
          },
        ]}
        description={
          <>
            The GSMA Open Gateway initiative, spearheaded by TM Forum, GSMA, and
            CAMARA, offers a framework of universal APIs that provide seamless
            access to operator networks. By standardizing APIs and fostering
            collaboration between CSPs and developers, the initiative aims to
            unlock new market opportunities and streamline negotiations.
            <br />
            <br />
            The collaborative efforts between TM Forum, GSMA, and CAMARA
            exemplify a unified approach to API development, mitigating the risk
            of divergence and complexity. The white paper on{" "}
            <a
              className="text-core-lightBlue"
              href="https://www.tmforum.org/resources/whitepaper/the-ecosystem-for-open-gateway-naas-api-development/"
            >
              Ecosystem for Open Gateway NaaS API development
            </a>{" "}
            further underscores our commitment to show how standardization and
            harmonization across the industry, fostering innovation and driving
            digital transformation.
          </>
        }
      />
      <AssetSection />
      <FAQSection />
    </>
  );
};
