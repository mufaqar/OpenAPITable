'use client'
import { MainHeading } from '@/components/atoms'
import { APITableCard } from '@/components/molecules';
import { APITablesettings } from '@/util/helpers/sliderSettings';
import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const APITable = () => {
   
    return (
        <section className="pb-20 bg-light-grey">
            <MainHeading className="text-center mb-7">Got it in 5</MainHeading>
            <div className="overflow-x-hidden">
                <Slider {...APITablesettings}>
                    {
                        tables?.map((item, idx: number) => (
                            <APITableCard data={item} key={idx} id={idx + 1} />
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}



const tables = [
    {
        content: "Greater agility is required to execute at the speed of the digital economy, and seize new opportunities"
    },
    {
        content: "Open APIs enable partners and developers to monetize existing capabilities and drive innovative new products and services"
    },
    {
        content: "Reducing the costs, risks and time-to-market of traditional point integration; lowering implementation and operating costs for the entire supply chain"
    },
    {
        content: "Zero-touch operations and management across digital ecosystems, delivering higher quality services at lower cost"
    },
    {
        content: "Greater agility is required to execute at the speed of the digital economy, and seize new opportunities"
    },
    {
        content: "Open APIs enable partners and developers to monetize existing capabilities and drive innovative new products and services"
    },
    {
        content: "Reducing the costs, risks and time-to-market of traditional point integration; lowering implementation and operating costs for the entire supply chain"
    },
    {
        content: "Zero-touch operations and management across digital ecosystems, delivering higher quality services at lower cost"
    },
]