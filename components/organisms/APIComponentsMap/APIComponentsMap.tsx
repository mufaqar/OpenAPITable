import { APICard } from "@/components/molecules";
import React from "react";
import { twJoin } from "tailwind-merge";

interface IAPIComponentsBlock {
  title: string;
  data: {
    name: string;
    apiId: string;
    version: string;
  }[];
  rootClassName?: string;
  size?: "xs" | "sm" | "lg";
  isTwoColumns?: boolean;
}

// TODO: move after api integration
const renderBlock = ({
  title,
  data,
  rootClassName,
  size,
  isTwoColumns,
}: IAPIComponentsBlock) => {
  const sizes = {
    xs: "lg:h-[166px]",
    sm: "lg:h-[648px]",
    lg: "lg:h-[815px]",
  };

  return (
    <div
      className={twJoin(
        "bg-[rgba(13,37,72,0.10)] p-6",
        rootClassName,
        sizes[size as keyof typeof sizes],
      )}
    >
      <h2 className="text-h5 text-core-blue font-bold mb-6">{title}</h2>
      <div
        className={twJoin(
          "gap-3",
          isTwoColumns ? "grid grid-cols-2" : "flex items-center flex-wrap",
        )}
      >
        {data.map((card, index) => (
          <APICard
            key={index}
            name={card.name}
            apiId={card.apiId}
            version={card.version}
            color="#148D81"
            isNewApi={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export const APIComponentsMap = () => {
  return (
    <div className="flex gap-3 max-lg:flex-wrap">
      <div className="space-y-3 w-full">
        {renderBlock({
          title: "Marketing Sales APIs",
          data: cards.slice(0, 1),
          rootClassName: "rounded-tl-[20px]",
          size: "xs",
        })}

        {renderBlock({
          title: "Customer APIs",
          data: cards,
          size: "sm",
          isTwoColumns: true,
        })}

        <div className="lg:grid gap-3 grid-cols-1 lg:grid-cols-2">
          {renderBlock({
            title: "Resource APIs",
            data: cards.slice(0, 9),
            size: "lg",
          })}
          {renderBlock({
            title: "Business Partner APIs (9)",
            data: cards.slice(0, 9),
            size: "lg",
          })}
        </div>
      </div>

      <div className="space-y-3 lg:max-w-[50%]">
        <div className="flex gap-3 lg:h-[824px] max-lg:flex-wrap">
          {renderBlock({
            title: "Marketing Sales APIs",
            data: cards.slice(0, 7),
          })}
          {renderBlock({
            title: "Marketing Sales APIs",
            data: cards.slice(0, 7),
          })}
        </div>

        {renderBlock({
          title: "Customer APIs",
          data: cards,
          size: "lg",
          isTwoColumns: true,
          rootClassName: "rounded-br-[20px]",
        })}
      </div>
    </div>
  );
};

const cards = [
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
  {
    name: "AI Management",
    apiId: "TMF915",
    version: "V4.0.0",
  },
];
