import { FC } from "react";
import { AssetCard } from "@/components/molecules";
import { getAssetColor, getAssetFileType, getAssetIcon } from "@/util/helpers";
import { AssetListType } from "@/util/types";
import Image from "next/image";
export interface AssetSectionProps {
  page: "Partners" | "APISingleRest";
  assets: AssetListType[];
}
export const AssetSection: FC<AssetSectionProps> = (props) => {
  const { page, assets } = props;
  return (
    <section id="api-assets" className="py-[64px] bg-light-grey">
      <div className="container">
        <h2 className="text-h2 text-core-blue font-bold mb-10">
          {page == "Partners"
            ? "API assets - Onboarding and Ordering Component Suite (TMF931)"
            : "API assets"}
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
