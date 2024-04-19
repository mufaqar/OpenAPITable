import React, { FC } from 'react'
import { ComponentMapCard } from '../ComponentMapCard'
import { IComponentMapCardProps } from '@/util/interfaces'


export const PartyManagement: FC<IComponentMapCardProps> = ({ data }) => {
  return (
    <div className='bg-core-blue/10 p-6 pt-7'>
      <h4 className='text-core-blue text-lg font-bold text-center'>Party Management</h4>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-3'>
        {data?.map((item, idx) => (
          <ComponentMapCard item={item} key={idx} color="#E0121D" />
        ))}
      </div>
    </div>
  )
}

