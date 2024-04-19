"use client"
import { useRouter } from "next/navigation";
import { twJoin } from "tailwind-merge";
import { FC, useState } from "react";

interface IHeroNavigationProps {
  navigation?: boolean
}

export const HeroNavigation: FC<IHeroNavigationProps> = ({ navigation }) => {
  const router = useRouter()
  const [activeNavigation, setActiveNavigation] = useState<string>('#overview')
  const handleNavigation = (href: string) => {
    setActiveNavigation(href)
    router.push(href)
  }

  const active = (item:string) => {
    return item === activeNavigation ? " border-b-white" : "border-transparent"
  }

  return (
    <nav className={`flex items-center sm:justify-center space-x-3 sm:space-x-7 md:space-x-10 text-white text-xs sm:text-sm flex-wrap ${!navigation && 'invisible'}`}>
      {items.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.href)}
            className={twJoin("py-4 border-b uppercase", active(item.href))}
          >
            {item.title}
          </button>
        )
      })}
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
