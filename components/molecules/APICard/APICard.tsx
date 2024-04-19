import { CaretRight, WebhookIcon } from "@/components/atoms";
import React from "react";

interface IAPICard {
  name: string;
  apiId: string;
  version: string;
  color: string;
  isNewApi?: boolean;
}

export const APICard = ({
  name,
  apiId,
  version,
  color,
  isNewApi,
}: IAPICard) => {
  return (
    <div className="rounded-[10px] bg-white shadow-card w-full 2xl:w-[279px] h-16 px-2 py-3 flex items-center space-x-1 justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          {isNewApi && (
            <div className="w-[21px] h-[10px] rounded-tl-[4px] rounded-br-[4px] bg-core-blue text-[8px] font-medium text-white text-center absolute left-1/2 -translate-x-1/2 bottom-0">
              New
            </div>
          )}
          <WebhookIcon color={color} />
        </div>
        <div>
          <span className="pb-1 text-core-blue text-sm">{name}</span>
          <div className="flex items-center space-x-2">
            <div className="h-[17px] border-[0.7px] border-core-blue rounded-tl-[4px] rounded-br-[4px] text-[11px] text-core-blue px-[4px]">
              {apiId}
            </div>

            <div className="h-[17px] border-[0.7px] border-core-blue rounded-tl-[4px] rounded-br-[4px] text-[11px] text-core-blue px-[4px]">
              {version}
            </div>
          </div>
        </div>
      </div>

      <CaretRight className="cursor-pointer" />
    </div>
  );
};
