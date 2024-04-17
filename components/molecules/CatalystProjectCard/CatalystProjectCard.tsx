import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaArrowRight } from "react-icons/fa6";


const CatalystProjectCard = ({ data }: any) => {
    return (
        <div className='shadow-card rounded-tl-[40px] rounded-br-[40px] overflow-hidden'>
            <figure className='relative'>
                <Image src={data.image.src} alt={data.title} width={500} height={400} className='h-[183px] object-cover w-full' />
                <button className='font-medium absolute text-xs p-2 uppercase bg-core-lightBlue text-white right-4 bottom-4 rounded-tl-[10px] rounded-br-[10px]'>{data?.tag}
                </button>
            </figure>
            <div className='bg-white p-6'>
                <button className='font-bold text-sm p-2 border border-core-blue text-core-blue rounded-tl-[10px] rounded-br-[10px]'>URN
                    <span className='font-normal ml-2'>C23.5.451</span>
                </button>
                <h3 className='text-xl mt-2 font-bold text-core-blue'>{data.title}</h3>
                <p className='mt-2 text-core-blue mb-5'>Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.</p>
                <Link href={data.slug} className='flex font-bold items-center gap-1 text-core-lightBlue'>Project details <FaArrowRight /></Link>
            </div>
        </div>
    )
}

export default CatalystProjectCard