import { FC } from "react";
import Image from "next/image";

interface IconsCardProps {
  iconPaths: string[];
}

export const IconsCard: FC<IconsCardProps> = ({ iconPaths }) => {
  const visibleIcons = iconPaths.slice(0, 4);
  const hiddenIconsCount = iconPaths.length - 4;

  return (
    <div className="flex w-[486px] h-[48px]">
      {visibleIcons.map((iconPath, index) => (
        <div key={index} className="relative w-12 h-12 mr-2">
          <Image
            className="bg-white shadow rounded-full p-1"
            src={iconPath}
            fill={true}
            alt="logo"
          />
        </div>
      ))}
      {hiddenIconsCount > 0 && (
        <div className="relative w-12 h-12">
          <p className="absolute inset-0 flex items-center justify-center bg-white shadow rounded-full text-core-blue font-bold text-p3">
            +{hiddenIconsCount}
          </p>
        </div>
      )}
    </div>
  );
};
