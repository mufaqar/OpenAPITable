import React from "react";
import { GridIcon, ListIcon } from "../SVG";

interface ITableListButton {
  onGridClick: () => void;
  onListClick: () => void;
  isGridActive?: boolean;
  isListActive?: boolean;
}

export const TableListButton = ({
  onGridClick,
  onListClick,
  isGridActive,
  isListActive,
}: ITableListButton) => {
  return (
    <div className="w-[116px] h-[70px] bg-white rounded-tl-[20px] rounded-br-[20px] shadow-card py-[12px] px-[18px] flex justify-between items-center relative">
      <GridIcon
        className="cursor-pointer"
        onClick={onGridClick}
        active={isGridActive}
      />
      <span className="w-[1px] h-[30px] bg-shades-grey absolute left-1/2" />
      <ListIcon
        className="cursor-pointer"
        onClick={onListClick}
        active={isListActive}
      />
    </div>
  );
};
