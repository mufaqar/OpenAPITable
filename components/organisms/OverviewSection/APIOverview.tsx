import { MainHeading } from '@/components/atoms'
import React from 'react'

export const APIOverview = () => {
  return (
    <section className="bg-light-grey">
      <div className="max-w-[1030px] w-full mx-auto py-20 text-center " id="overview">
        <MainHeading>What are Open APIs?</MainHeading>
        <p className="sm:text-xl md:text-2xl my-10 text-core-blue md:px-10">An Open API is an application programming interface published on the internet and shared freely, allowing CSPs (Communication Service Providers) to create differentiated products and services much more quickly.</p>
        <h3 className="text-core-blue md:text-4xl font-bold sm:text-3xl text-xl">By giving everyone access to standardised tools, Open APIs enable CSPs and Vendors to work together in a faster and more flexible way.</h3>
        <h3 className="text-core-blue md:text-4xl font-bold sm:text-3xl text-xl mt-10">Built by the members, for the members. Leading the industry in Open API standards</h3>
    </div>
    </section>
  )
}

