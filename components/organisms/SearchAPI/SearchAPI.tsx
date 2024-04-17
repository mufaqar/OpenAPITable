'use client'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { TbDialpad } from "react-icons/tb";
import { PiListDashesBold } from "react-icons/pi";
import useSelectApiTableStyle from '@/hooks/useSelectApiTableStyle';


const SearchAPI = () => {
    const { handleTableStyle, tableStyle } = useSelectApiTableStyle()

    return (
        <section className='bg-light-grey pb-5 z-10'>
            <div className='container w-full mx-auto flex gap-3 md:gap-5 md:pl-60'>
                <div className='bg-white border flex -mt-8 flex-1 gap-1 items-center p-1 px-3 md:px-5 rounded-tl-[20px] rounded-br-[20px]'>
                    <IoSearch size={20} className='text-gray-400' />
                    <input type="text" placeholder='Find an API' className='w-full bg-white outline-none border-none py-2 md:py-3 px-2' />
                </div>
                <div className={`bg-white border -mt-8 flex gap-3 items-center p-1 px-3 md:px-5 rounded-tl-[20px] rounded-br-[20px] text-gray-400 `}>
                    <button onClick={()=>handleTableStyle('grid')} className={`${tableStyle === 'grid' && 'text-core-blue'}`}>
                        <TbDialpad className='text-[20px] md:text-[26px]' />
                    </button>
                    <div className='pr-[1.5px] h-[60%] w-full bg-gray-300'/>
                    <button onClick={()=>handleTableStyle('list')} className={`${tableStyle === 'list' && 'text-core-blue'}`}>
                        <PiListDashesBold className='text-[22px] md:text-[28px]' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SearchAPI