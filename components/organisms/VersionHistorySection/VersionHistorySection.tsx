import { Ship } from "@/components/atoms";

export const VersionHistorySection = () => {
  return (
    <section id="version-history" className="py-8 lg:py-16 bg-light-grey">
      <div className="container">
        <div className="flex gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <div>
            <h2 className="text-h2 font-bold mb-6 text-core-blue">
              Version History
            </h2>
            <p className="max-w-[858px] mb-[40px]">
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit ametlorem
            </p>
            <div className="flex items-start">
              {ships.map((ship, index) => {
                return (
                  <div key={index}>
                    <Ship iconPath={ship.iconPath} text={ship.text} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ships = [
  {
    iconPath: "/oda/open-apis/icons/ship-icon.svg",
    text: "v5.0.0",
  },
  {
    iconPath: "/oda/open-apis/icons/archive-icon.svg",
    text: "v4.0.0",
  },
  {
    iconPath: "/oda/open-apis/icons/ship-icon.svg",
    text: "v2.0.0",
  },
  {
    iconPath: "/oda/open-apis/icons/archive-icon.svg",
    text: "v1.0.0",
  },
];
