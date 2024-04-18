import { ContextCard } from "@/components/molecules/ContextCard";

export const ContextSection = () => {
  return (
    <section id="context-section" className="py-8 lg:py-16 bg-gradient-blue">
      <div className="container">
        <div className="flex gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <div>
            <h2 className="text-h2 font-bold mb-[48px] text-white ">
              Context specific <span>bundles</span>
            </h2>
            <p className="max-w-[886px] text-white pb-3">
              This API has context specific versions available in these Bundles.
              Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet
              tempus netus enim morbi. Elementum fame
            </p>
            <div className={"flex flex-wrap gap-2"}>
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
