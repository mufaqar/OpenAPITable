import { Search, TableListButton } from "@/components/atoms";
import React from "react";

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
