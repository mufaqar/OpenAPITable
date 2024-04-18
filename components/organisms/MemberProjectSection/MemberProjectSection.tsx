import { Button } from "@/components/atoms";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import Image from "next/image";

export const MemberProjectSection = () => {
  return (
    <section id="code-reference" className="py-8 lg:py-16">
      <div className="container">
        <div className="flex gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <div>
            <h2 className="text-h2 font-bold mb-8 text-core-blue">
              Member project
            </h2>
            <p className="max-w-[550px]">
              Participants from all of our member organisations work together to
              develop the OpenAPIs. Lorem ipsum dolor sit amet lacinia feugiat
              tempor. Tellus curabitur odio dictumst scelerisque sollicitudin
              rhoncus sapien. Lorem ipsum dolor sit amet lacinia feugiat tempor.
              Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus
              sapien.
            </p>
            <Button
            
              iconPosition="right"
              icon={
                <Image
                  src={`/oda/open-apis/icons/arrow-right-icon.svg`}
                  width={16}
                  height={10}
                  alt="arrow right"
                />
              }
              className="w-[153px] mt-8 h-[38px]"
            >
              View project
            </Button>
          </div>
          <ProjectCard
            title={"Open API project"}
            description={
              "Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien."
            }
          />
        </div>
      </div>
    </section>
  );
};
