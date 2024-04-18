import { BroadbandScenariesCard } from '@/components/molecules'
import React from 'react'

interface IBundle {
    name: string;
    info: string;
  }


export const BroadbandScenarios = () => {
    return (
        <section className='py-20 bg-core-blue'>
            <div className='container'>
                <h2 className='text-2xl text-white md:text-[32px] font-bold'>Wholesale broadband scenarios</h2>
                <p className='text-white mt-4 max-w-[800px]'>Introducing what scenarios are. Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        bundles.map((item:IBundle, idx:number) => (
                            <BroadbandScenariesCard data={item} key={idx}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


const bundles:IBundle[] = [
    {
        name: "Wholesale broadband",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
    },
    {
        name: "5G slice",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
    },
    {
        name: "5G slice",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
    },
    {
        name: "Wholesale broadband",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
    },
    {
        name: "5G slice",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
    },
    {
        name: "5G slice",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
    }
]