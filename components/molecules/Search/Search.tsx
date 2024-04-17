"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { SearchMenu } from "../../atoms/SearchMenu/SearchMenu";

interface ISearchProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  menuData?: Record<string, string[]>;
}

export const Search = ({
  placeholder,
  value,
  onChange,
  onBlur,
  menuData,
}: ISearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-6 cursor-auto">
        <Image
          src="/oda/open-apis/icons/search.svg"
          width={24}
          height={24}
          alt="Search"
        />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={twMerge(
          "bg-white border-0 focus:outline-none w-full block h-[70px] rounded-tl-[20px] rounded-br-[20px] py-[11px] px-6 pl-[62px] shadow-card placeholder:text-core-blue/50",
          isFocused && "rounded-br-none",
        )}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          onBlur && onBlur();
          setIsFocused(false);
        }}
      />

      {isFocused && menuData && (
        <SearchMenu data={menuData} onClick={(item) => console.log(item)} />
      )}
    </div>
  );
};
