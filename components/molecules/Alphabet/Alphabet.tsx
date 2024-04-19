"use client";
import { alphabet } from "@/lib/utils";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { twMerge } from "tailwind-merge";

interface IAlphabetProps {
  value?: string;
  onChange?: (value: string) => void;
  data?: any[];
  dataKey: string;
}

export const Alphabet = ({
  value,
  onChange,
  data,
  dataKey,
}: IAlphabetProps) => {
  var circle =
    "border-[2px] border-shades-grey text-[#55667F] !w-full cursor-pointer max-w-10 max-h-10 !h-10 rounded-full font-medium !flex items-center justify-center flex-col uppercase";
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 8,
          },

          640: {
            slidesPerView: 10,
          },

          1000: {
            slidesPerView: alphabet.length,
          },
        }}
        spaceBetween={7}
      >
        <SwiperSlide
          className={circle}
          // onClick={() => {
          //   if (onChange && !data.every((item) => isNaN(item[dataKey][0])))
          //     onChange("#");
          // }}
        >
          #
        </SwiperSlide>
        {alphabet.map((letter, i) => (
          <SwiperSlide
            className={twMerge(
              circle,
              value === letter && "bg-core-blue text-white border-0",
              // adisable:
              //   data
              //     .map((item) => item[dataKey][0].toLowerCase())
              //     .indexOf(letter.toLowerCase()) === -1,
            )}
            key={i}
            onClick={() => {
              // if (
              //   onChange &&
              //   data
              //     .map((item) => item[dataKey][0].toLowerCase())
              //     .indexOf(letter.toLowerCase()) !== -1
              // )
              onChange && onChange(letter);
            }}
          >
            {letter}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
