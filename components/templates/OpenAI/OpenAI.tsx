import {
  Hero,
  APIOverview,
  APITable,
  IntroductionAPI,
  ContextSpecificBundles,
  OpenAPITranning,
  CatalystProjects,
  RelatedArticles,
} from "@/components/organisms";
import React, { FC } from "react";
import {MainPageApi} from '@/util/interfaces'

interface OPenAIProps {
  data: MainPageApi
}

export const OpenAI:FC<OPenAIProps> = ({data}) => {
  return (
    <>
      <Hero title="Open APIs" subHeaders={items} />
      <APIOverview 
        title={data.title}
        description={data.description}
      />
      <APITable 
        title={data.featuresSection[0].title}
        features={data.featuresSection[0].features}
      />
      <IntroductionAPI 
        description={data?.whatItMeansSection}
        caption={data?.whatItMeansSection.caption}
      />
      <ContextSpecificBundles />
      <OpenAPITranning />
      <CatalystProjects />
      <RelatedArticles />
    </>
  );
};

const items = [
  {
    id: 1,
    title: "Overview",
    href: "#overview",
  },

  {
    id: 2,
    title: "API Table",
    href: "#api-table",
  },
  {
    id: 3,
    title: "Introducing Apis",
    href: "#introducing-apis",
  },
  {
    id: 4,
    title: "bundles",
    href: "#bundles",
  },
  {
    id: 5,
    title: "training",
    href: "#training",
  },
  {
    id: 6,
    title: "Scenarios",
    href: "#scenarios",
  },
  {
    id: 7,
    title: "diagram",
    href: "#diagram",
  },
];
