import { Button } from '@/components/atoms'
import React from 'react'

import { HiArrowNarrowRight } from "react-icons/hi";


const CatalystProjects = () => {
  return (
    <section className="bg-light-grey py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between ">
          <h3 className="text-2xl md:text-[32px] text-core-blue font-bold">Related Catalyst projects</h3>
          <Button
            icon={<HiArrowNarrowRight />}
            iconPosition='right'
            size='md'
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CatalystProjects