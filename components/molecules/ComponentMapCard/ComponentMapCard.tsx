import { Polygon, TrashIcon } from '@/components/atoms'
import React, { FC } from 'react'

import { FaRegCircleCheck } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'

interface IComponentMapCardProps {
    item:{
        name: string,
        tag:string
    }
    color: string
    arrow? : boolean
}

export const ComponentMapCard:FC<IComponentMapCardProps> = ({item, color, arrow }) => {
    return (
        <div className='py-3 px-2 bg-white gap-4 rounded-xl flex items-center justify-between' style={{ border: `2px solid ${color}` }}>
            <div className='flex items-center gap-3'>
                <div className='relative'>
                    <Polygon color={color} />
                    <FaRegCircleCheck className='text-white text-xl absolute top-[2px] left-2.5' />
                </div>
                <div>
                    <span className='text-[11px] rounded-br-[4px] px-1 py-[2px] border border-core-blue rounded-tl-[4px]'>{item.tag}</span>
                    <h6 className='text-sm mt-[2px]'>{item?.name}</h6>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                { arrow && <IoIosArrowForward className='text-2xl md:hidden xl:block' />}
                <button className='bg-core-blue/10 p-1.5 rounded-full'>
                    <TrashIcon />
                </button>
            </div>
        </div>
    )
}

