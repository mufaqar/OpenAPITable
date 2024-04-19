"use client";
import { TableFilter } from "@/components/molecules";
import { APIComponentsMap, Hero } from "@/components/organisms";
import { APIComponentsList } from "@/components/organisms/APIComponentsList";
import { useState } from "react";
import { parseAsString, useQueryState } from "next-usequerystate";

export const Table = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeView, setActiveView] = useQueryState(
    "type",
    parseAsString.withDefault("map"),
  );

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
          isGridActive={activeView === "map"}
          isListActive={activeView === "list"}
          onGridClick={() => setActiveView("map")}
          onListClick={() => setActiveView("list")}
        />
      </div>

      <div className="my-8">
        {activeView === "map" ? (
          <div className="my-8 2xl:max-w-[1344px] mx-auto w-full max-2xl:px-4">
            <APIComponentsMap />
          </div>
        ) : (
          <APIComponentsList />
        )}
      </div>
    </div>
  );
};
