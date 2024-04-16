interface IBreadcrumb {
  activeItem?: string;
}

export const Breadcrumb = ({ activeItem }: IBreadcrumb) => {
  return (
    <ul className="flex items-center gap-2 sm:gap-6 text-gray-400 text-xs sm:text-sm flex-wrap">
      <li className="border-gray-400 border-b-[.5px] rounded-e-md pr-3 pb-2 font-light">
        Home
      </li>
      <li className="border-gray-400 border-b-[.5px] rounded-e-md pr-3 pb-2 font-light">
        ODA
      </li>
      <li className={` rounded-e-md pr-3 pb-2 font-light 
        ${ !activeItem ? 'border-white text-white border-b-[2.5px]' : 'border-gray-400 border-b-[.5px]' }
      `}>
        Open APIs
      </li>
      {
        activeItem && <li className="border-white text-white border-b-[2.5px] rounded-e-md pr-3 pb-2 uppercase">
        {activeItem}
      </li>
      }
    </ul>
  );
};
