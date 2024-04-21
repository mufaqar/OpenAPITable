import { Button } from "@/components/atoms";
import { RecentCertificationCard } from "@/components/molecules";
import Image from "next/image";

export const RecentCertificationsSection = () => {
  return (
    <section id="recent-certifications" className="py-8 lg:py-16">
      <div className="container">
        <div className="flex-col gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-h2 font-bold text-core-blue">
              Recent certifications
            </h2>
            <Button
              iconPosition="right"
              icon={
                <Image
                  src={`/oda/open-apis/icons/arrow-right-icon.svg`}
                  width={20}
                  height={20}
                  alt="arrow right"
                />
              }
              className="w-[232px] h-10"
            >
              View all certifications
            </Button>
          </div>
          <p className="max-w-[858px] text-p2 text-core-blue">Providers who support this API</p>
          <div className={"flex flex-wrap gap-2"}>
            {recentCertificationsList.map((recent, index) => {
              return (
                <div key={index}>
                  <RecentCertificationCard
                    title={recent.title}
                    icon={recent.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
const recentCertificationsList = [
  { title: "ZSmart BSS", icon: "/oda/open-apis/icons/ar-icon.svg" },
  {
    title: "Orcha iPaaS Digital Integration Hub (Reven..",
    icon: "/oda/open-apis/icons/ar-icon.svg",
  },
  {
    title: "Orcha iPaaS Digital Integration Hub",
    icon: "/oda/open-apis/icons/ar-icon.svg",
  },
  {
    title: "Solution deployed at Etisalat",
    icon: "/oda/open-apis/icons/ar-icon.svg",
  },
  {
    title: "Netcracker Digital BSS/OSS",
    icon: "/oda/open-apis/icons/ar-icon.svg",
  },
  {
    title: "Real world deployment at Vodafone Portugal",
    icon: "/oda/open-apis/icons/ar-icon.svg",
  },
];
