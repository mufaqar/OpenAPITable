
import React, { FC } from 'react'
import globIcon from '../../../public/icons/glob.svg'
import Image from 'next/image'
import { Button } from '@/components/atoms'

import {
  HiOutlineCloudDownload,
  HiArrowNarrowRight
} from "react-icons/hi";

interface IContextSpecificBundlesCardProps {
  data: {
    name: string
    tag: string
    info: string
    downloadBundleFile: string,
    href: string
  }
}

export const ContextSpecificBundlesCard: FC<IContextSpecificBundlesCardProps> = ({ data }) => {
  return (
    <div className="bg-white/50 border border-gray-300 rounded-tl-3xl rounded-br-3xl p-4">
      <div className="flex items-center justify-between">
        <h5>{data.tag}</h5>
        <figure className="bg-core-lightBlue p-2 rounded-full">
          <Image src={globIcon.src} className="" width={24} height={24} alt={data.name} />
        </figure>
      </div>
      <h3 className="font-medium text-2xl mt-2 mb-1">{data.name}</h3>
      <p className="text-sm my-2">{data.info}</p>
      <div className="mt-6 flex gap-3">
        <Button
          size='full'
          icon={<HiOutlineCloudDownload />}
          color='white'
          className="!bg-transparent !text-white border-white py-2"
        >
          Download bundle
        </Button>
        <Button
          size='sm'
          icon={<HiArrowNarrowRight />}
          iconPosition='right'
          className='py-2'
        >
          View
        </Button>
      </div>
    </div>
  )
}

