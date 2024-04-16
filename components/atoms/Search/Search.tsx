import Image from "next/image";
import React from "react";

interface ISearchProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export const Search = ({
  placeholder,
  value,
  onChange,
  onBlur,
}: ISearchProps) => {
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
        className="bg-white border-0 focus:outline-none w-full block h-[70px] rounded-tl-[20px] rounded-br-[20px] py-[11px] px-6 pl-[62px] shadow-card placeholder:text-core-blue/50"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
