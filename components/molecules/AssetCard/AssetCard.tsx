"use client";
import { Button } from "@/components/atoms";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "react-oidc-context";
import { twJoin } from "tailwind-merge";
import { AuthenticateModal } from "../AuthenticateModal";

interface IAssetCardProps {
  icon: React.ReactElement;
  iconColor?: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: React.ReactElement;
}

export const AssetCard = ({
  icon,
  title,
  buttonText,
  buttonLink,
  buttonIcon,
  iconColor,
}: IAssetCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className="lg:h-[80px] bg-white shadow-card rounded-br-[10px] rounded-tl-[10px] flex items-center pr-6 space-x-4">
      <div
        className={twJoin(
          `flex-shrink-0 rounded-sm rounded-tl-[10px] w-[80px] h-[80px] flex items-center justify-center`,
          iconColor,
        )}
      >
        {icon}
      </div>

      <div className="flex items-center justify-between flex-1 max-lg:flex-wrap">
        <p className="uppercase text-eyebrow-large text-core-blue font-medium">
          {title}
        </p>

        {isAuthenticated ? (
          <Link href={buttonLink} target="_blank">
            <Button icon={buttonIcon}>{buttonText}</Button>
          </Link>
        ) : (
          <Button icon={buttonIcon} onClick={() => setIsOpen(true)}>
            {buttonText}
          </Button>
        )}
      </div>

      <AuthenticateModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};
