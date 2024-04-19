import { DetailsCard } from "@/components/atoms";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IOverviewSectionProps {
  description: string | React.ReactNode;
  list?: { label: string; value: string }[];
  imageSrc?: string;
  button?: React.ReactNode;
  align?: "start" | "center";
}

export const OverviewSection = ({
  description,
  list,
  imageSrc,
  button,
  align = "start",
}: IOverviewSectionProps) => {
  return (
    <section id="overview" className="py-8 lg:py-16">
      <div className="container">
        <div
          className={twMerge(
            "flex gap-12 justify-between max-lg:flex-wrap max-lg:justify-center",
            align === "center" && "items-center",
          )}
        >
          <div>
            <h2 className="text-h2 font-bold mb-6 text-core-blue">Overview</h2>
            <p className="max-w-[858px]">{description}</p>
          </div>

          <div className="flex flex-col space-y-8 items-center">
            {list && <DetailsCard items={list} />}

            {imageSrc && (
              <Image
                src={imageSrc}
                width={178.054}
                height={192.35}
                alt="Powered by ODA"
              />
            )}

            {button && button}
          </div>
        </div>
      </div>
    </section>
  );
};
