"use client";
import { Badge, WebhookIcon } from "@/components/atoms";
import { ArrowRightSm } from "@/components/atoms/SVG/ArrowRightSm";
import { Alphabet } from "@/components/molecules";
import { alphabet } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export const APIComponentsList = () => {
  const [activeLetter, setActiveLetter] = useState<string>("");

  const handleLetterChange = (letter: string) => {
    setActiveLetter(letter);

    if (activeLetter === letter) {
      setActiveLetter("");
    }

    const el = document.getElementById(`alphabet-${letter.toLowerCase()}`);
    if (el) {
      el.scrollIntoView({ behavior: "instant", block: "start" });
    }
  };

  return (
    <div className="mb-9 sticky top-[114px] left-0 bg-white right-0 py-[20px] z-20">
      <div className="container">
        <Alphabet
          value={activeLetter}
          onChange={handleLetterChange}
          dataKey="componentSearchTableName"
        />
      </div>

      <div className="mt-5 lg:mt-12">
        {alphabet.map((letter) => (
          <div
            key={letter}
            id={`alphabet-${letter.toLowerCase()}`}
            className="py-5 lg:py-12 even:bg-[rgba(13,37,72,0.02)]"
          >
            <div className="container">
              <h2 className="uppercase font-bold text-hero text-core-blue mb-3">
                {letter}
              </h2>

              {Array.from({ length: 3 }).map((_, index) => (
                <Link
                  key={index}
                  href={`/`}
                  className={twMerge(
                    "flex justify-between group gap-3 items-center py-2 pl-2 pr-6 max-lg:flex-wrap",
                    index % 2 === 0
                      ? "bg-light-grey"
                      : "bg-[rgba(13,37,72,0.07)]",
                  )}
                >
                  <div
                    className={`lg:flex space-y-3 lg:space-y-0 lg:w-[75%] justify-between items-center`}
                  >
                    <div className="flex gap-3 items-center">
                      <WebhookIcon color="#f00" />
                      API Management
                    </div>

                    <div className="flex gap-3 lg:gap-6 max-lg:flex-wrap">
                      <Badge text="Version" subText="V4.0.0" />
                      <Badge text="Domain" subText="Resource APIs" />
                      <Badge text="Updated" subText="01/01/2023" />
                    </div>
                  </div>

                  <button className="space-x-[6px] flex items-center flex-shrink-0 max-lg:mt-2">
                    <span className="text-core-lightBlue font-bold">
                      View details
                    </span>
                    <ArrowRightSm />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
