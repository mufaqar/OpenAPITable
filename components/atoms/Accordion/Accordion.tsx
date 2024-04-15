"use client";
import { Disclosure } from "@headlessui/react";
import Markdown from "react-markdown";
import { ChevronDownIcon } from "..";

interface IAccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export const Accordion = ({ items }: IAccordionProps) => {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <Disclosure
          key={item.title}
          as="div"
          className="bg-[rgba(13,37,72,0.03)] even:bg-[rgba(13,37,72,0.10)]"
          defaultOpen={index === 0}
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full p-4 lg:p-6 text-h3 text-core-blue text-left">
                {item.title}
                <ChevronDownIcon
                  className={open ? "rotate-180 transform" : ""}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-6 w-full max-w-full accordion-content-markdown">
                <Markdown>{item.content}</Markdown>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};
