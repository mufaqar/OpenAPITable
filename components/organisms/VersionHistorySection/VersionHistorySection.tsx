import { Ship } from "@/components/atoms";

export const VersionHistorySection = ({
  backgroundColor,
}: {
  backgroundColor: string;
}) => {
  return (
    <section
      id="version-history"
      className={`py-8 lg:py-16 ${backgroundColor}`}
    >
      <div className="container">
        <div className="flex flex-col gap-10 justify-between max-lg:flex-wrap max-lg:justify-center">
          <h2 className="text-h2 font-bold text-core-blue">
            Version History
          </h2>
          <p className="max-w-[858px] text-p2 sm:mr-10">
            Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit ametlorem
          </p>
          <div className="flex flex-col items-start sm:flex-row gap-2">
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
