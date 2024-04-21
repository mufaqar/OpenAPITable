"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "../SVG";

interface IAPIAccordionProps {
  data: {
    title: string;
  }[];
}

export const APIAccordion = ({ data }: IAPIAccordionProps) => {
  return (
    <Accordion.Root
      type="multiple"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px]"
    >
      {data?.map((item, index: number) => (
        <Accordion.Item key={index} value="item-1">
          <Accordion.Trigger className="bg-white border border-shades-grey rounded-xl w-full shadow-card h-[78px] flex items-center justify-between p-6">
            <span className="text-h5 font-bold text-core-blue">
              {item.title}
            </span>
            <ChevronDownIcon />
          </Accordion.Trigger>
          {/* TODO: after accordion menu design */}
          {/* <Accordion.Content className="bg-white">Hello</Accordion.Content> */}
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
