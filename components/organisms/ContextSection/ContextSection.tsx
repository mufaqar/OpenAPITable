import { ContextCard } from "@/components/molecules/ContextCard";

export const ContextSection = () => {
  return (
    <section id="context-specific" className="py-8 lg:py-16 bg-gradient-blue">
      <div className="container">
        <div className="flex flex-col gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <h2 className="text-[64px] leading-[80px] font-bold text-white ">
            Context specific <span className="font-normal">bundles</span>
          </h2>
          <p className="text-p1 max-w-[886px] text-white">
            This API has context specific versions available in these Bundles.
            Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus
            netus enim morbi. Elementum fame
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {contextList.map((context) => (
              <ContextCard
                key={context.title}
                title={context.title}
                subTitle={context.subTitle}
                description={context.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const contextList = [
  {
    title: "Contains 13 Apis",
    subTitle: "Wholesale broadband",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempusnetus enim morbi. Elementum fame",
  },
  {
    title: "Contains XX APIs",
    subTitle: "5G slice",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempusnetus enim morbi. Elementum fame",
  },
  {
    title: "Contains XX APIs",
    subTitle: "Set-top box",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempusnetus enim morbi. Elementum fame",
  },
];
