import { IComponentMapCardProps } from '@/util/interfaces'
import React, { FC } from 'react'
import { ComponentMapCard } from '../ComponentMapCard'

export const IntelligenceManagement = () => {
  return (
    <div className='bg-core-blue/10 p-6 pt-7 min-h-[430px] opacity-50 rounded-br-[24px] rounded-bl-[24px] lg:rounded-bl-[0px] lg:rounded-tr-[24px]'>
      <h4 className='text-core-blue text-lg font-bold text-center'>Intelligence Management</h4>
      {/* <div className='mt-8 grid grid-cols-1 gap-3'>
        {data?.map((item, idx) => (
          <ComponentMapCard item={item} key={idx} color="#662482" />
        ))}
      </div> */}
    </div>
  )
}

