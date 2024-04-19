import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";

export interface BreadcrumbItem {
  title: string;
  href: string;
}

interface IBreadcrumbProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: IBreadcrumbProps) => {
  return (
    <ul className="flex items-center gap-1 sm:gap-6 text-white text-sm flex-wrap">
      <li className="border-white border-b-[.5px] rounded-e-md pr-3 pb-2 font-light">
        Home
      </li>
      <li className="border-white border-b-[.5px] rounded-e-md pr-3 pb-2 font-light">
        ODA
      </li>
      <li
        className={twMerge(
          "border-white border-b-[.5px] rounded-e-md pr-3 pb-2 font-light",
          !items && "font-normal",
        )}
      >
        Open APIs
      </li>

      {items?.map((item, index) => (
        <li
          key={index}
          className={twJoin(
            "border-white border-b-[.5px] rounded-e-md pr-3 pb-2",
            index === items.length - 1 ? "font-normal" : "font-light",
          )}
        >
          <Link href={item.href || ""}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
