import Link from "next/link";

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
      <li className="border-white border-b-[.5px] rounded-e-md pr-3 pb-2 font-light">
        Open APIs
      </li>

      {items?.map((item, index) => (
        <li
          key={index}
          className="border-white border-b-[.5px] rounded-e-md pr-3 pb-2"
        >
          <Link href={item.href || ""}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
