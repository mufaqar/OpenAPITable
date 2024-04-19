import { 
    DecouplingIntegration, 
    EngagementManagement,
    IntelligenceManagement,
    PartyManagement,
    Production,
    CoreCommerceManagement
} from '@/components/molecules'

import React from 'react'

export const ComponentMap = () => {
  return (
    <section className='max-w-[1320px] w-full px-4 xl:px-0 mx-auto py-20 text-core-blue'>
        <h2 className='text-2xl md:text-[32px] font-bold md:pl-16'>Component map</h2>
        <div className='lg:grid lg:grid-cols-4 gap-3 mt-8'>
            <div className='flex flex-col md:flex-row lg:flex-col gap-3'>
                <DecouplingIntegration data={DecouplingIntegrationData}/>
                <EngagementManagement />
            </div>
            <div className='col-span-2 flex flex-col gap-3'>
                <PartyManagement data={PartyManagementData}/>
                <CoreCommerceManagement data={CoreCommerceManagementData}/>
                <Production data={ProductionData}/>
            </div>
            <div className='flex flex-col gap-3'>
                <IntelligenceManagement/>
            </div>
        </div>
    </section>
  )
}




const DecouplingIntegrationData =[
    {
        name: 'Digital identity management',
        tag: 'TMFC020',
    }
]

const PartyManagementData =[
    {
        name: 'Digital identity management',
        tag: 'TMFC020',
    },
    {
        name: 'Digital identity management',
        tag: 'TMFC020',
    }
]

const IntelligenceManagementData = []

const EngagementManagementData = []

const CoreCommerceManagementData =[
    {
        name: 'Digital identity management',
        tag: 'TMFC020',
    }
]

const ProductionData =[
    {
        name: 'Digital identity management',
        tag: 'TMFC020',
    }
]