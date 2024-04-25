import Link from "next/link";
import React from "react";

import { HiOutlineArrowSmRight } from "react-icons/hi";

export const OpenAPITranning = () => {
  return (
    <section className="container mx-auto md:flex gap-10 mb-20 text-core-blue">
      <aside className="max-w-[250px] mb-6 ">
        <div className="!sticky md:!top-24">
          <h3 className="font-bold text-lg relative">
            Sections
            <span className="pt-[2px] w-[78px] -bottom-2 left-0 bg-core-blue absolute" />
          </h3>
          <ul className="mt-8 uppercase text-xs text-core-blue/70 font-medium">
            <li>Leading the industry in Open API standards</li>
            <li className="mt-5">A growing industry-led community</li>
            <li className="mt-5">Built by the members, for the members</li>
          </ul>
        </div>
      </aside>
      <div className="flex-1">
        <h3 className="text-2xl font-medium">
          Leading the industry in Open API standards
        </h3>
        <p className="mt-2">
          TM Forum&apos;s Open APIs project has been at the forefront of the
          challenge to find the right mechanism for CSPs and vendors to work
          together in a faster and more flexible way. Ever since the first
          Hackathon in December 2013, where 150 coders gathered in a conference
          room in San Francisco to make the first public use of TM Forum’s Open
          APIs, we have been driving the industrywide push to standardize and
          simplify interoperability.
        </p>
        <h3 className="text-2xl font-medium mt-8">
          A growing industry-led community
        </h3>
        <p className="mt-2">
          TM Forum’s growing community of over 150+ of the world’s leading CSPs
          and technology ecosystem participants has signed the Open API
          Manifesto as a public endorsement of the power of Open APIs. Of these,
          34 CSPs have agreed to position TM Forum Open APIs as a preferred
          requirement in their IT RFPs.
        </p>
        <p className="mt-5">
          Products that comply with standardized, machine-readable software
          components would help CSPs create differentiated products and services
          much more quickly, according to Lester Thomas, Chief IT Systems
          Architect at Vodafone Group.
        </p>
        <p className="my-5">
          This has all led to the TM Forum members creating a set Open APIs, for
          an open digital ecosystem that provides critical management
          functionality for digital services. All of which are readily available
          to our members within the Open API table.
        </p>
        <Link
          href="#"
          className="text-core-lightBlue flex items-center gap-1 font-medium"
        >
          lorem ipsum <HiOutlineArrowSmRight className="text-xl pt-[2px]" />
        </Link>
        <h3 className="text-2xl font-medium mt-8">
          Built by the members, for the members
        </h3>
        <p className="mt-2">
          TM Forum Open APIs have been widely adopted by the industry as a
          standard interoperability method, with more than 640,000 downloads by
          39,000 software developers from 2,500 organizations.
        </p>
        <p className="mt-5">
          Over 70+ REST-based, Event driven and Domain Specific Open APIs have
          been collaboratively developed by TM Forum members working within the
          Open API project.
        </p>
        <p className="mt-5">
          This team creates a full set of Open API assets for members to
          implement Open APIs - from guidelines (REST API Design Guidelines), to
          specification, to usable code, through to the compliance test kits -
          see the Open API table for more details.
        </p>
      </div>
    </section>
  );
};
