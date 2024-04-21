"use client";
import { useRouter } from "next/navigation";
import { twJoin } from "tailwind-merge";
import { FC, useState } from "react";
import { HeroSubHeaderType } from "@/util/types/HeroSubHeaderType";

interface IHeroNavigationProps {
  subHeaders?: HeroSubHeaderType;
}

export const HeroNavigation: FC<IHeroNavigationProps> = ({ subHeaders }) => {
  const router = useRouter();
  const [activeNavigation, setActiveNavigation] = useState<string>("#overview");
  const handleNavigation = (href: string) => {
    setActiveNavigation(href);
    router.push(href);
  };

  return (
    <nav
      className={`flex items-center sm:justify-center space-x-3 sm:space-x-7 md:space-x-10 text-white text-xs sm:text-sm flex-wrap`}
    >
      {subHeaders &&
        subHeaders.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.href)}
            className={twJoin(
              "py-4 border-b uppercase",
              item.href === activeNavigation
                ? " border-b-white"
                : "border-transparent",
            )}
          >
            {item.title}
          </button>
        ))}
    </nav>
  );
};
