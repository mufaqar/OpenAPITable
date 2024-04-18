import React from 'react'

export const ApiBundleOverview = () => {
    return (
        <section className='py-12 container md:flex items-start md:gap-20'>
            <div className='text-core-blue flex-1'>
                <h2 className='text-2xl md:text-[32px] font-bold'>Overview</h2>
                <p className='mt-4'>As the world moves from copper-based access services to fiber-based access services we see many of our members are updating their systems as the roll out FTTC and FTTP (fiber to the - Cabinet or Premises) either because of regulation or delayering of their organization (separating wholesale services from retail services, or separating NetCo from ServeCo) they are increasingly using B2B2X type scenarios.</p>
            </div>
            <div className='mt-5 md:mt-0 md:w-[27%] shadow-card p-6 rounded-tl-[20px] rounded-br-[20px]'>
                <div className='text-sm'>
                    <ul className='flex'>
                        <li className='opacity-50 flex-1 capitalize'>Number of APIS</li>
                        <li className='w-[40%]'>32</li>
                    </ul>
                    <ul className='flex my-4'>
                        <li className='opacity-50 flex-1 capitalize'>usage</li>
                        <li className='w-[40%]'>Tech</li>
                    </ul>
                    <ul className='flex'>
                        <li className='opacity-50 flex-1 capitalize'>Pub Date</li>
                        <li className='w-[40%]'>01 JUL 2021</li>
                    </ul>

                </div>
            </div>
        </section>
    )
}