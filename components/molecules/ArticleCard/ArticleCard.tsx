import Image from 'next/image'
import React from 'react'

import { FaRegFileAlt } from "react-icons/fa";

const ArticleCard = ({ data }: any) => {
  return (
    <div className='px-2'>
      <div>
        <figure className='relative'>
          <Image src={data.image.src} alt={data.title} width={500} height={300} className='h-[150px] object-cover w-full' />
          <span className='bg-[#B71A5D] text-core-blue p-3 absolute top-0 left-0 rounded-br-[16px]'>
            <FaRegFileAlt size={16}/>
          </span>
        </figure>
        <div>
          <h4 className='text-core-blue font-medium text-[12px] uppercase mt-1.5'>Article | <span className='text-[#B71A5D]'>{data.category}</span></h4>
          <h2 className='text-lg font-bold text-core-blue'>{data.title}</h2>
          <h5 className='text-core-blue font-medium text-[12px] uppercase mt-1.5'>december 2021 | By {data.author}</h5>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard