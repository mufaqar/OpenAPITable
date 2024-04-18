import { APIAccordion } from "@/components/atoms/APIAccordion";
import React from "react";
import { twMerge } from "tailwind-merge";

interface IAPIGroupSectionProps {
  title: string;
  description: string;
  bgcolor?: "grey" | "white";
}

const backgroundColor = {
  white: "bg-white",
  grey: "bg-light-grey",
};

export const APIGroupSection = ({
  bgcolor = "white",
}: IAPIGroupSectionProps) => {
  return (
    <section className={twMerge("py-16", backgroundColor[bgcolor])}>
      <div className="container">
        <h2 className="text-h2 font-bold text-core-blue">
          Ordering operations
        </h2>
        <p className="mt-3 mb-10">
          Lorem ipsum dolor sit amet consectetur. Quisque sit a pulvinar velit
          nec dui id. Auctor morbi purus sed sit. At fames imperdiet amet
          elementum imperdiet. Lobortis curabitur mi arcu consectetur ac egestas
          urna
        </p>

        <div>
          <APIAccordion data={MOCK_DATA} />
        </div>
      </div>
    </section>
  );
};

const MOCK_DATA = [
  { title: "Create order" },
  { title: "Delete order" },
  { title: "List orders" },
  { title: "List orders" },
  { title: "List orders" },
  { title: "List orders" },
];
