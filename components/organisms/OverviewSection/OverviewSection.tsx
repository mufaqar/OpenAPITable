import { FC } from "react";
import { DetailsCard } from "@/components/atoms";
import Image from "next/image";
export interface OverviewSectionProps {
  page: "Partners" | "APISingleRest";
  items: {
    label: string;
    value: string;
  }[];
}

export const OverviewSection: FC<OverviewSectionProps> = (props) => {
  const { page, items } = props;


  const partnersOverView = (
    <p className="max-w-[858px]">
      The GSMA Open Gateway initiative, spearheaded by TM Forum, GSMA, and
      CAMARA, offers a framework of universal APIs that provide seamless access
      to operator networks. By standardizing APIs and fostering collaboration
      between CSPs and developers, the initiative aims to unlock new market
      opportunities and streamline negotiations.
      <br />
      <br />
      The collaborative efforts between TM Forum, GSMA, and CAMARA exemplify a
      unified approach to API development, mitigating the risk of divergence and
      complexity. The white paper on{" "}
      <a
        className="text-core-lightBlue"
        href="https://www.tmforum.org/resources/whitepaper/the-ecosystem-for-open-gateway-naas-api-development/"
      >
        Ecosystem for Open Gateway NaaS API development
      </a>
      further underscores our commitment to show how standardization and
      harmonization across the industry, fostering innovation and driving
      digital transformation.
    </p>
  );
  const apiSingleRrestOverView = (
    <p className="max-w-[858px]">
      Provides a standardized mechanism for placing a product order with all the
      necessary order parameters. The API consists of a simple set of operations
      that interact with CRM/Order negotiation systems in a consistent manner. A
      product order is created based on a product offering that is defined in a
      catalog. The product offering identifies the product or set of products
      that are available to a customer and includes characteristics such as
      pricing, product options and market.
    </p>
  );
  return (
    <section id="overview" className="py-8 lg:py-16">
      <div className="container">
        <div className="flex gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <div>
            <h2 className="text-h2 font-bold mb-6 text-core-blue">Overview</h2>
            {page == "Partners" ? partnersOverView : apiSingleRrestOverView}
          </div>

          <div className="flex flex-col space-y-8 items-center">
            <DetailsCard items={items} />
            {page == "Partners" && (
              <Image
                src="/oda/open-apis/images/powered-by-oda.png"
                width={178.054}
                height={192.35}
                alt="Powered by ODA"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
