"use client";
import { Button, SitemapIcon } from "@/components/atoms";
import { Search } from "@/components/molecules";
import { APIGroupSection, Hero, OverviewSection } from "@/components/organisms";
import { useAppDispatch } from "@/redux";
import { openModal } from "@/redux/features/modalSlice";
import React, { useState } from "react";

export const CodeAndDocs = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Hero
        title="Product order management code reference"
        breadcrumbItems={[
          { title: "API name", href: "" },
          { title: "Code and docs", href: "" },
        ]}
      />
      <div className="flex justify-center items-center space-x-6 -mt-10">
        <div className="max-w-[958px] w-full">
          <Search
            placeholder="Find an API"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            menuData={searchMenuData}
          />
        </div>
      </div>
      <OverviewSection
        description="Below are groups of API endpoints with example code within the Product order management API. Lorem ipsum dolor sit amet consectetur. Quisque sit a pulvinar velit nec dui id. Auctor morbi purus sed sit. At fames imperdiet amet elementum imperdiet. Lobortis curabitur mi arcu consectetur ac egestas urna"
        button={
          <Button
            icon={<SitemapIcon />}
            size="md"
            onClick={() => dispatch(openModal({ name: "IMAGE_MODAL" }))}
          >
            View API schema
          </Button>
        }
        align="center"
      />
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
