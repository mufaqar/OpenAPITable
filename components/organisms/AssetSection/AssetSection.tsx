import { AssetCard } from "@/components/molecules";
import { getAssetColor, getAssetFileType, getAssetIcon } from "@/util/helpers";
import { AssetListType } from "@/util/types";
import Image from "next/image";

export const AssetSection = () => {
  return (
    <section id="api-assets" className="py-[64px] bg-light-grey">
      <div className="container">
        <h2 className="text-h2 text-core-blue font-bold mb-10">
          API assets - Onboarding and Ordering Component Suite (TMF931)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {assets.map((asset) => (
            <AssetCard
              key={asset.title}
              title={asset.title}
              icon={
                <Image
                  src={getAssetIcon(asset.type)}
                  width={32}
                  height={32}
                  alt={asset.title}
                />
              }
              iconColor={getAssetColor(asset.type)}
              buttonIcon={
                <Image
                  src={`/oda/open-apis/icons/${
                    getAssetFileType(asset.type) === "view"
                      ? "external-link-icon.svg"
                      : "download-icon.svg"
                  }`}
                  width={20}
                  height={20}
                  alt="External Link"
                />
              }
              buttonText={
                getAssetFileType(asset.type) === "view" ? "View" : "Download"
              }
              buttonLink={asset.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

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
