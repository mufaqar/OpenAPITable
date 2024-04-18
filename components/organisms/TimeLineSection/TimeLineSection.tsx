import { CircleVector } from "@/components/atoms/CircleVector";
import { TimeLineCard } from "@/components/molecules";

export const TimeLineSection = () => {
  return (
    <section id="timeline" className="py-10 lg:py-[96px] bg-light-grey">
      <div className="container">
        <h2 className="text-h2 font-bold text-core-blue mb-[12px]">Timeline</h2>
        <p className="text-p1 text-core-blue max-w-[1200px] mb-16">
          This illustrates key dates in the lifecycle of this API and the
          broader set of related APIs. This includes Spec Jams and Accelerate
          events which will focus on this API.
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-3 ml-12">
          {timeLineCardList.map((timeLine) => {
            return (
              <TimeLineCard
                title={timeLine.title}
                description={timeLine.description}
                icon={timeLine.icon}
              />
            );
          })}
        </div>
        <div className="h-[360px]">
          {/* <CircleVector/> */}
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-3 -ml-12">
          {timeLineCardList.map((timeLine) => {
            return (
              <TimeLineCard
                title={timeLine.title}
                description={timeLine.description}
                icon={timeLine.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
const timeLineCardList = [
  {
    title: "",
    icon: "/oda/open-apis/images/acceleration.svg",
    description:
      "Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst.  dictumst scelerisque sollicitudin",
  },
  {
    title: "Title",
    icon: "",
    description:
      "Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst.  dictumst scelerisque sollicitudin",
  },
  {
    title: "Title",
    icon: "",
    description:
      "Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst.  dictumst scelerisque sollicitudin",
  },
  {
    title: "Title",
    icon: "",
    description:
      "Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst.  dictumst scelerisque sollicitudin",
  },
];
