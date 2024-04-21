import { IComponentMapCardProps } from '@/util/interfaces'
import React, { FC } from 'react'
import { ComponentMapCard } from '../ComponentMapCard'

export const Production: FC<IComponentMapCardProps> = ({data}) => {
  return (
    <div className='bg-core-blue/10 p-6 pt-7 rounded-bl-[24px] lg:rounded-bl-[0px] mb-3 lg:rounded-br-[24px]'>
      <h4 className='text-core-blue text-lg font-bold text-center'>Production</h4>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-3'>
        {data?.map((item, idx) => (
          <ComponentMapCard item={item} key={idx} color="#0D2548" />
        ))}
      </div>
    </div>
  )
}

