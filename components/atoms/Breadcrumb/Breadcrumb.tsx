interface IBreadcrumb {
  activeItem: string;
}

export const Breadcrumb = ({ activeItem }: IBreadcrumb) => {
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

      <li className="border-white border-b-[.5px] rounded-e-md pr-3 pb-2 uppercase">
        {activeItem}
      </li>
    </ul>
  );
};
