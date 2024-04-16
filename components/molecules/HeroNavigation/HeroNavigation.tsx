"use client"
import { useRouter } from "next/navigation";
import { twJoin } from "tailwind-merge";
import { useState } from "react";

export const HeroNavigation = () => {
  const router = useRouter()
  const [activeNavigation, setActiveNavigation] = useState<string>('#overview')
  const handleNavigation = (href:string) => {
    setActiveNavigation(href)
    router.push(href)
  }

  return (
    <nav className="flex items-center sm:justify-center space-x-3 sm:space-x-7 md:space-x-10 text-white text-xs sm:text-sm flex-wrap">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={()=>handleNavigation(item.href)}
          className={twJoin("py-4 border-b uppercase", item.href === activeNavigation ? " border-b-white" : "border-transparent")}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

const items = [
  {
    id: 1,
    title: "Overview",
    href: "#overview",
  },
  {
    id: 2,
    title: "API Assets",
    href: "#api-assets",
  },
  {
    id: 3,
    title: "FAQ",
    href: "#faq",
  },
];
