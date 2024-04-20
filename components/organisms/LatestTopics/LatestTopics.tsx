"use client";
import {
  ArrowUpRightIcon,
  Button,
  CheckCircleIcon,
  ClockIcon,
  HotIcon,
} from "@/components/atoms";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const LatestTopics = () => {
  const [openTab, setOpenTab] = useState(0);
  const latestTopicList = [
    {
      text: "New",
      icon: <ClockIcon color={openTab === 0 ? "white" : "#A9ADB1"} />,
    },
    {
      text: "Top",
      icon: <ArrowUpRightIcon color={openTab === 1 ? "white" : "#A9ADB1"} />,
    },
    {
      text: "Hot",
      icon: <HotIcon color={openTab === 2 ? "white" : "#A9ADB1"} />,
    },
    {
      text: "Closed",
      icon: <CheckCircleIcon color={openTab === 3 ? "white" : "#A9ADB1"} />,
    },
  ];
  return (
    <div className="sm:flex sm:flex-row items-center mt-6 flex-col">
      {latestTopicList.map((topic, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setOpenTab(index);
            }}
            size="auto"
            icon={topic.icon}
            className={twMerge(
              "mr-[10px] h-[33px]",
              openTab === index ? "text-white" : "text-[#A9ADB1] bg-[#e5e9ec]",
            )}
            textSpanStyle="font-normal text-xs"
          >
            {topic.text}
          </Button>
        );
      })}
    </div>
  );
};
