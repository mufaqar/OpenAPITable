import { twJoin } from "tailwind-merge";

export const HeroNavigation = () => {
  return (
    <nav className="flex items-center justify-center space-x-10 text-white uppercase text-sm flex-wrap">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={twJoin("py-6", item.id === 1 && "border-b border-b-white")}
        >
          {item.title}
        </a>
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
