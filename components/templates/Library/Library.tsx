"use client";

import React, { useState } from "react";
import { TableFilter } from "@/components/molecules";
import {
  Hero,
  OverviewSection,
  CodeReferenceSection,
  VersionHistorySection,
  ContextSection,
  RecentCertificationsSection,
} from "@/components/organisms";
import { parseAsString, useQueryState } from "next-usequerystate";

export const Library = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeView, setActiveView] = useQueryState(
    "type",
    parseAsString.withDefault("map"),
  );
  return (
    <>
      <Hero title="Product order management code reference" />
      <div className="container">
        <TableFilter
          searchValue={searchValue}
          setSearchValue={(val) => setSearchValue(val)}
          isGridActive={activeView === "map"}
          isListActive={activeView === "list"}
          onGridClick={() => setActiveView("map")}
          onListClick={() => setActiveView("list")}
        />
      </div>
      <OverviewSection
        list={apiSingleRrestItems}
        description="Provides a standardized mechanism for placing a product order with all the necessary order parameters. The API consists of a simple set of operations that interact with CRM/Order negotiation systems in a consistent manner. A product order is created based on a product offering that is defined in a catalog. The product offering identifies the product or set of products that are available to a customer and includes characteristics such as pricing, product options and market."
      />
      <CodeReferenceSection />
      <VersionHistorySection backgroundColor={"bg-light-grey"} />
      <ContextSection />
      <RecentCertificationsSection />
    </>
  );
};

const apiSingleRrestItems = [
  {
    label: "API No.",
    value: "TMF622",
  },
  {
    label: "LATEST Version",
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
    label: "Pub Date",
    value: "01 JUL 2021",
  },
];
