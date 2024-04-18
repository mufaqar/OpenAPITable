import { IOpenAPITableData } from '@/util/types/ApiTable'
import React, { FC } from 'react'
import webHookLogoGreen from '../../../public/icons/WebhooksLogoGreen.svg'
import Image from 'next/image'

import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


interface IDataProps {
    data: IOpenAPITableData
}

export const ApiGridCard: FC<IDataProps> = ({ data }) => {
    return (
        <div className='bg-white px-2 py-3 flex gap-3 items-center justify-between rounded-xl flex-1'>
            <div className='flex items-center gap-3'>
                <figure className='min-w-[40px]'>
                    <Image src={webHookLogoGreen} alt={data.title} width={40} height={40} />
                </figure>
                <div>
                    <h4 className='capitalize text-sm lg:text-base'>{data.title}</h4>
                    <ul className='flex gap-2'>
                        <li className='text-[11px] rounded-br-[4px] px-1 py-[2px] border border-core-blue rounded-tl-[4px]'>{data.tag}</li>
                        <li className='text-[11px] rounded-br-[4px] px-1 py-[2px] border border-core-blue rounded-tl-[4px]'>{data.version}</li>
                    </ul>
                </div>
            </div>
            <Link href="#">
                <IoIosArrowForward className='text-[22px]' />
            </Link>
        </div>
    )
}