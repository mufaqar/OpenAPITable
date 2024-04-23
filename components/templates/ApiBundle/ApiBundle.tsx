import {
  ApiBundleOverview,
  CatalystProjects,
  Hero,
  RelatedArticles,
  BroadbandScenarios,
  OverviewContent,
  APIContentSection,
  ComponentMap,
} from "@/components/organisms";
import React from "react";

export const ApiBundle = () => {
  return (
    <>
      <Hero
        breadcrumbItems={[{ title: "Open API Bundle Name", href: "/" }]}
        title="Wholesale broadband"
        subHeaders={items}
      />
      <ApiBundleOverview />
      <OverviewContent />
      <BroadbandScenarios />
      <APIContentSection />
      <ComponentMap />
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
    title: "Section",
    href: "#section",
  },
  {
    id: 3,
    title: "API Contents",
    href: "#api-contents",
  },
  {
    id: 4,
    title: "Scenarios",
    href: "#scenarios",
  },
  {
    id: 5,
    title: "Diagram",
    href: "#diagram",
  },
];
