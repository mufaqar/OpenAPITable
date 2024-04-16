"use client";
import { TableFilter } from "@/components/molecules";
import { APIComponentsMap, Hero } from "@/components/organisms";
import { useState } from "react";

export const Table = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");

  return (
    <div>
      <Hero
        withNavigation={false}
        title="Open API Table"
        breadcrumbItems={[{ title: "Table", href: "/oda/open-apis/table" }]}
      />

      <div className="container">
        <TableFilter
          searchValue={searchValue}
          setSearchValue={(val) => setSearchValue(val)}
          isGridActive={activeView === "grid"}
          isListActive={activeView === "list"}
          onGridClick={() => setActiveView("grid")}
          onListClick={() => setActiveView("list")}
        />
      </div>

      <div className="my-8 2xl:max-w-[1344px] mx-auto w-full max-2xl:px-4">
        <APIComponentsMap />
      </div>
    </div>
  );
};
