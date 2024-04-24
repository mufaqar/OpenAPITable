import {
  AssetSection,
  Hero,
  OverviewSection,
  VersionHistorySection,
} from "@/components/organisms";
import { AssetListType } from "@/util/types";

export const APIRest = () => {
  return (
    <>
      <Hero
        breadcrumbItems={[
          { title: "Open API table", href: "/table" },
          { title: "Product order management", href: "/" },
        ]}
        title="Product order management"
        subHeaders={items}
      />
      <OverviewSection
        list={apiSingleRrestItems}
        description="Provides a standardized mechanism for placing a product order with all the necessary order parameters. The API consists of a simple set of operations that interact with CRM/Order negotiation systems in a consistent manner. A product order is created based on a product offering that is defined in a catalog. The product offering identifies the product or set of products that are available to a customer and includes characteristics such as pricing, product options and market."
      />
      <AssetSection page={"APISingleRest"} assets={assets} />
      <VersionHistorySection backgroundColor={"white"} />
    </>
  );
};

const apiSingleRrestItems = [
  {
    label: "API No.",
    value: "TMF622",
  },
  {
    label: "Stable version",
    value: "v4.0.0",
  },
  {
    label: "TypeS",
    value: "RESTful, Asynchronous, Context specific",
  },
  {
    label: "DOMAIN",
    value: "Product APIs",
  },
  {
    label: "release Date",
    value: "01 JUL 2021",
  },
];
const assets: AssetListType[] = [
  {
    title: "OPEN aPI SPECIFICATION",
    type: "swagger",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/swagger/TMF931-Open_Gateway_Operate_API_-_Onboarding_and_Ordering-v5.0.0.oas.yaml",
  },
  {
    title: "Postman Collection",
    type: "postman",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/postman/TMF931-Open_Gateway_Onboarding_and_Ordering-v5.0.0-postman.yaml",
  },
  {
    title: "API user guides specification (RAND)",
    type: "user",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/user_guides/TMF931-Open_Gateway_Onboarding_and_Ordering_Component_Suite-v5.0.0.pdf",
  },
  {
    title: "Sample implementation code",
    type: "code",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/ri/TMF931_Open_Gateway_Operate-RI-v5.0.0.zip",
  },
  {
    title: "CTK",
    type: "checkmark",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/ctk/CTK-TMF931-v5.0.0.zip",
  },
  {
    title: "Conformance Profile (RAND)",
    type: "menu",
    url: "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/5.0.0/conformance/TMF931_Operate_conformance.pdf",
  },
];
const items = [
  {
    id: 1,
    title: "Overview",
    href: "#overview",
  },
  {
    id: 2,
    title: "API Assets",
    href: "#api-assets",
  },

  { id: 3, title: "Version History", href: "#version-history" },
];
