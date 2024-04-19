import React from "react";
import { twJoin } from "tailwind-merge";

interface ISearchMenuProps {
  data: Record<string, string[]>;
  onClick: (item: string) => void;
}

export const SearchMenu = ({ data, onClick }: ISearchMenuProps) => {
  return (
    <div
      className="bg-white w-full absolute top-[70px] left-0 right-0 z-30 pb-2 rounded-br-[20px]"
      style={{ boxShadow: "0px 10px 30px -22px rgba(0, 0, 0, 0.17)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 max-lg:flex-wrap">
        {Object.keys(data)?.map((key, index) => (
          <div
            key={key}
            className={twJoin(
              "pl-6 pr-9 pb-4 pt-3",
              index === 1 && "px-6 pl-0 pr-0",
            )}
          >
            <h5
              className={twJoin(
                "text-h4 text-core-blue font-bold mb-[22px]",
                index === 1 && "px-6",
              )}
            >
              {key}
            </h5>
            <ul
              className={twJoin(
                "space-y-4",
                index === 1 && "border-x px-6 pr-9",
              )}
            >
              {data[key].map((item) => (
                <li
                  key={item}
                  className="text-p3 text-core-blue cursor-pointer"
                  onClick={() => onClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
