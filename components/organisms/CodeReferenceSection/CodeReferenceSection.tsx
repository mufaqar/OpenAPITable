import { Button } from "@/components/atoms";
import Image from "next/image";

export const CodeReferenceSection = () => {
  return (
    <section id="code-reference" className="py-8 lg:py-16">
      <div className="container">
        <div className="flex gap-12 justify-between max-lg:flex-wrap max-lg:justify-center">
          <div>
            <h2 className="text-h2 font-bold mb-6 text-core-blue">
              Code reference
            </h2>
            <p className="max-w-[858px]">
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit ametlorem ipsum dolor sit ametLorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum
              dolor sit ametLorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametLorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit ametlorem ipsum dolor sit ametLorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor
              sit amet
            </p>
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
              className="w-56 mt-6"
            >
              Go to code reference
            </Button>
          </div>

          <div className="flex flex-col space-y-8 items-center">
            <Image
              src="/oda/open-apis/images/code-reference.svg"
              width={410}
              height={288}
              alt="Code Reference"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
