import { IComponentMapCardProps } from '@/util/interfaces'
import React, { FC } from 'react'
import { ComponentMapCard } from '../ComponentMapCard'

export const CoreCommerceManagement: FC<IComponentMapCardProps> = ({data}) => {
  return (
    <div className='bg-core-blue/10 p-6 pt-8'>
      <h4 className='text-core-blue text-lg font-bold text-center'>Core Commerce Management</h4>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-3'>
        {data?.map((item, idx) => (
          <ComponentMapCard item={item} key={idx} color="#138D81" />
        ))}
      </div>
    </div>
  )
}

