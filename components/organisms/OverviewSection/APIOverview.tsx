import { MainHeading } from "@/components/atoms";
import React, { FC } from "react";
import Markdown from "react-markdown";

interface IAPIOverviewProps{
  title: string
  description: string
}

export const APIOverview:FC<IAPIOverviewProps> = ({title, description}) => {
  return (
    <section id="Overview" className="bg-light-grey">
      <div
        className="max-w-[1030px] w-full mx-auto py-20 text-center "
        id="overview"
      >
        <MainHeading>{title}</MainHeading>
        <div className="sm:text-xl md:text-2xl my-10 text-core-blue md:px-10 intro">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </section>
  );
};
