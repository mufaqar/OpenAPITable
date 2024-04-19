import { TableListButton } from "@/components/atoms";
import React from "react";
import { Search } from "../Search";

interface ITableFilter {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onGridClick: () => void;
  onListClick: () => void;
  isGridActive?: boolean;
  isListActive?: boolean;
}

export const TableFilter = ({
  searchValue,
  setSearchValue,
  isGridActive,
  isListActive,
  onGridClick,
  onListClick,
}: ITableFilter) => {
  return (
    <div className="flex justify-center items-center space-x-6 -mt-10">
      <div className="max-w-[958px] w-full">
        <Search
          placeholder="Find an API"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          menuData={searchMenuData}
        />
      </div>

      <TableListButton
        onGridClick={onGridClick}
        onListClick={onListClick}
        isGridActive={isGridActive}
        isListActive={isListActive}
      />
    </div>
  );
};

const searchMenuData = {
  Bundle: ["Wholesale broadband", "5G slice", "Set-top box", "Camara"],
  Domain: [
    "Business Partner APIs",
    "Common APIs",
    "Customer APIs",
    "Marketing and sales APIs",
    "Product APIs",
    "Resource APIs",
    "Service APIs",
  ],
  "Production status": ["Pre Production", "Production"],
};
