import { ComponentSectionCard } from "@/components/molecules";

export const ComponentsSection = () => {
  return (
    <section id="components-section" className="py-8 lg:py-16">
      <div className="container">
        <div className="flex-col gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <h2 className="text-h2 mb-8 font-bold text-core-blue">Components</h2>

          <p className="max-w-[1200px] text-p1 text-core-blue mb-10">
            Lorem ipsum dolor sit amet consectetur. Quisque sit a pulvinar velit
            nec dui id. Auctor morbi purus sed sit. At fames imperdiet amet
            elementum imperdiet. Lobortis curabitur mi arcu consectetur ac
            egestas urna
          </p>
          <div className="flex items-center justify-between flex-col xl:flex-row">
            <div className="flex-col lg:mr-[120px] ">
              <p className="text-core-blue text-h5 mb-4">Exposed</p>
              <div className="flex flex-wrap gap-2">
                {componentsList.map((recent) => (
                  <ComponentSectionCard
                    key={recent.title}
                    title={recent.title}
                    shipTitle={recent.shipTitle}
                    icon={recent.icon}
                  />
                ))}
              </div>
            </div>
            <div className="flex-col lg:mr-[120px] ">
              <p className="text-core-blue text-h5 mb-4">Dependant</p>
              <div className="flex flex-wrap gap-2">
                {componentsList.map((recent) => (
                  <ComponentSectionCard
                    key={recent.title}
                    title={recent.title}
                    shipTitle={recent.shipTitle}
                    icon={recent.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const componentsList = [
  {
    title: "Lorum ipsum dolor sit amet",
    icon: "/oda/open-apis/icons/ar-icon.svg",
    shipTitle: "TMFC020",
  },
  {
    title: "Orcha iPaaS Digital Integration Hub (Reven..",
    icon: "/oda/open-apis/icons/ar-icon.svg",
    shipTitle: "TMFC020",
  },
  {
    title: "Orcha iPaaS Digital Integration Hub",
    icon: "/oda/open-apis/icons/ar-icon.svg",
    shipTitle: "TMFC020",
  },
  {
    title: "Solution deployed at Etisalat",
    icon: "/oda/open-apis/icons/ar-icon.svg",
    shipTitle: "TMFC020",
  },
  {
    title: "Netcracker Digital BSS/OSS",
    icon: "/oda/open-apis/icons/ar-icon.svg",
    shipTitle: "TMFC020",
  },
  {
    title: "Real world deployment at Vodafone Portugal",
    icon: "/oda/open-apis/icons/ar-icon.svg",
    shipTitle: "TMFC020",
  },
];
