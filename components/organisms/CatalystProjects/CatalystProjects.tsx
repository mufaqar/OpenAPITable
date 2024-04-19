
import { Button } from '@/components/atoms';
import React from 'react'

import { HiArrowNarrowRight } from 'react-icons/hi';
import { CatalystProjectCard } from '@/components/molecules';

import { ICatalystProjects } from '@/util/interfaces';

export const CatalystProjects: React.FC = () => {
  return (
    <section className="bg-light-grey py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <h3 className="text-2xl md:text-[32px] text-core-blue font-bold">Related Catalyst projects</h3>
          <Button
            icon={<HiArrowNarrowRight />}
            iconPosition="right"
            size="md"
          >
            View all projects
          </Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {catalystProjectsData?.map((item, idx: number) => (
            <CatalystProjectCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};


const catalystProjectsData: ICatalystProjects[] = [
  {
    title: 'Lorum ipsum dolor sit amet',
    slug: '#',
    info: 'Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.',
    image: '/oda/open-apis/images/Project-image-1.png',
    tag: 'finalist'
  },
  {
    title: 'Lorum ipsum dolor sit amet',
    slug: '#',
    info: 'Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.',
    image: '/oda/open-apis/images/Project-image-2.png',
    tag: 'finalist'
  },
  {
    title: 'Lorum ipsum dolor sit amet',
    slug: '#',
    info: 'Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.',
    image: '/oda/open-apis/images/Project-image-3.png',
    tag: 'finalist'
  }
];