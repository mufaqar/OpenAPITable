import {
  AssetSection,
  FAQSection,
  Hero,
  OverviewSection,
} from "@/components/organisms";
import { AssetListType } from "@/util/types";

export const Partners = () => {
  return (
    <>
      <Hero
        title="GSMA Open Gateway/ CAMARA"
        breadcrumbItems={[{ title: "Camara", href: "" }]}
        imageSrc="/oda/open-apis/images/partner-logo.png"
      />
      <OverviewSection page={"Partners"} items={partnersItems} />
      <AssetSection page={"Partners"} assets={assets} />
      <FAQSection />
    </>
  );
};
const partnersItems = [
  {
    label: "Number of APIS",
    value: "1",
  },
  {
    label: "Release Date",
    value: "23 FEB 2024",
  },
];
const assets: AssetListType[] = [
  {
    title: "OPEN aPI SPECIFICATION",
    type: "swagger",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/swagger/TMF931-Open_Gateway_Operate_API_-_Onboarding_and_Ordering-v5.0.0.oas.yaml",
  },
  {
    title: "CONFORMANCE TEST KIT (CTK)",
    type: "checkmark",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/ctk/CTK-TMF931-v5.0.0.zip",
  },
  {
    title: "API user guides (RAND)",
    type: "user",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/user_guides/TMF931-Open_Gateway_Onboarding_and_Ordering_Component_Suite-v5.0.0.pdf",
  },
  {
    title: "Postman Collection",
    type: "postman",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/postman/TMF931-Open_Gateway_Onboarding_and_Ordering-v5.0.0-postman.yaml",
  },
  {
    title: "Conformance Profile (RAND)",
    type: "menu",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/conformance/TMF931_Operate_conformance.pdf",
  },
  {
    title: "Sample implementation code",
    type: "code",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/ri/TMF931_Open_Gateway_Operate-RI-v5.0.0.zip",
  },
];
