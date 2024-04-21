import { MainHeading } from "@/components/atoms";
import Image from "next/image";
import React from "react";

export const IntroductionAPI = () => {
  return (
    <section id="introducing-apis" className="container mx-auto py-20">
      <div className="">
        <div className="grid md:grid-cols-2">
          <MainHeading className="max-w-[350px]">
            What it means for
            <span className="text-[70px] block md:text-[120px] mt-5  ">
              you!
            </span>
          </MainHeading>
          <div className="sm:text-lg md:text-xl mt-10 md:mt-0">
            <p>
              More than 180 of the world’s leading Communications Service
              Providers and vendors have signed the Open API Manifesto; a
              commitment to work together to make Open APIs integral to the
              industry’s plans.
            </p>
            <p className="pt-8">
              By upskilling and developing the skills of yourself and your team,
              you can future proof your career and play a leading role in
              innovative new approaches to digital transformation.
            </p>
          </div>
        </div>
        <div className="mt-20 md:mt-16 flex justify-end ">
          <div className="max-w-[610px] relative bg-core-blue text-white px-10 md:pl-20 md:pr-10 py-10 rounded-br-[96px]">
            <div className="mt-10 md:mt-0">
              <p className="block -mt-6 text-[72px]">“</p>
              <p className="md:text-2xl font-bold -mt-10">
                We hope this becomes a de-facto part of the telco industry
                certification programme… We can start insisting on this for our
                third party systems integrators and contractors as well as
                internal staff.
              </p>
              <h6 className="uppercase font-medium text-sm mt-4">
                Brian Cappellani
              </h6>
              <h6 className="uppercase font-medium text-sm">
                Vice President, Technology Strategy, Hansen.
              </h6>
            </div>
            <div className="absolute bg-white p-1 rounded-full md:-left-[140px] left-5 !-top-16 md:-top-28">
              <Image
                src="/oda/open-apis/images/IntroductionAPI.png"
                alt="IntroductionAPI Pic"
                width={540}
                height={540}
                className="md:w-[200px] w-[120px] h-[120px] md:h-[200px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
