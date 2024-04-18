import { APIGroupSection, OverviewSection } from "@/components/organisms";
import React from "react";

export const CodeAndDocs = () => {
  return (
    <>
      {/* TODO: add dynamic content */}
      <OverviewSection />
      <APIGroupSection
        title="Ordering operations"
        description="Lorem ipsum dolor sit amet consectetur. Quisque sit a pulvinar velit nec dui id. Auctor morbi purus sed sit. At fames imperdiet amet elementum imperdiet. Lobortis curabitur mi arcu consectetur ac egestas urna"
        bgcolor="grey"
      />
      <APIGroupSection
        title="Billing operations"
        description="Lorem ipsum dolor sit amet consectetur. Quisque sit a pulvinar velit nec dui id. Auctor morbi purus sed sit. At fames imperdiet amet elementum imperdiet. Lobortis curabitur mi arcu consectetur ac egestas urna"
      />
    </>
  );
};
