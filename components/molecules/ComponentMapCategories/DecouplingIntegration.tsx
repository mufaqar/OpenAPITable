'use client'
import React, { FC } from 'react'
import { ComponentMapCard } from '../ComponentMapCard';
import { IComponentMapCardProps } from '@/util/interfaces';

export const DecouplingIntegration: FC<IComponentMapCardProps> = ({ data }) => {
  return (
    <div className='bg-core-blue/10 p-6 pt-7 md:mb-3 lg:mb-0 flex-1 rounded-tl-[24px] rounded-tr-[24px] lg:rounded-tr-[0px]'>
      <h4 className='text-core-blue text-lg font-bold text-center'>Decoupling & Integration</h4>
      <div className='mt-8 grid grid-cols-1 gap-3'>
        {data?.map((item, idx) => (
          <ComponentMapCard item={item} key={idx} color="#662482" arrow/>
        ))}
      </div>
    </div>
  )
}