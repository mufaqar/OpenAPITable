import { Button, MainHeading } from '@/components/atoms'
import {
    ApiBundleOverview,
    CatalystProjects,
    Hero,
    RelatedArticles,
    BroadbandScenarios,
    ComponentMap
} from '@/components/organisms'
import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";


export const ApiBundle = () => {
    return (
        <>
            <Hero
                activeItem="Open API Bundle Name"
                navigation={true}
                title='Wholesale broadband'
            />
            <ApiBundleOverview />
            <APIConteent />
            <BroadbandScenarios/>
             <ComponentMap/>   
            <CatalystProjects />
            <RelatedArticles />
        </>
    )
}



const APIConteent = () => {
    return (
        <section className='bg-light-grey py-20'>
            <div className='text-core-blue container mx-auto md:flex'>
                <div className='flex-1'>
                    <h2 className='text-2xl md:text-[32px] font-bold'>Download the</h2>
                    <MainHeading className='text-gradient'>Whitepaper</MainHeading>
                </div>
                <div className='flex-1 mt-4 md:mt-0'>
                    <p>One of the major barriers to network automation is a knowledge shortfall in CSPs, which leads to companywide knowledge gaps, prevalence of legacy systems & processes and lack of focus from senior management.</p>
                    <Button size='md' icon={<FaArrowRightLong/>} iconPosition='right' className='!px-4 mt-4 py-2 bg-core-blue w-auto'>
                        Download the whitepaper
                    </Button>
                </div>
            </div>
        </section>
    )
}