import {
  ApiGridCard,
} from '@/components/organisms'
import { IOpenAPITableProps } from '@/util/types/ApiTable'
import React, { FC } from 'react'


const OpenAPITableGrid: FC<IOpenAPITableProps> = ({
  MarketingSalesAPIs,
  CustomerAPIs,
  ProductAPIs
}) => {
  return (
    <>
      <section >
        <div className='grid grid-cols-4 gap-2'>
          <div className='col-span-2 space-y-2'>
            <div className='bg-core-blue/10 p-6 text-core-blue rounded-tl-[40px] '>
              <h3 className='font-bold text-lg'>Marketing Sales APIs</h3>
              <div className='grid grid-cols-2 sm:grid-cols-2 gap-3 mt-6 lg:pr-8'>
                {
                  MarketingSalesAPIs?.map((item, idx) => (
                    <ApiGridCard data={item} key={idx} />
                  ))
                }
              </div>
            </div>
            <div className='bg-core-blue/10 p-6 text-core-blue'>
              <h3 className='font-bold text-lg'>Customer APIs</h3>
              <div className='grid grid-cols-2 sm:grid-cols-2 gap-3 mt-6 lg:pr-8'>
                {
                  CustomerAPIs?.map((item, idx) => (
                    <ApiGridCard data={item} key={idx} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className='bg-core-blue/10 p-6 text-core-blue'>2</div>
          <div className='bg-core-blue/10 p-6 text-core-blue'>3</div>
          <div className='bg-core-blue/10 p-6 text-core-blue'>4</div>
          <div className='bg-core-blue/10 p-6 text-core-blue'>5</div>
          <div className='bg-core-blue/10 p-6 text-core-blue col-span-2 rounded-br-[40px]'>6</div>
        </div>
      </section>
    </>
  )
}

export default OpenAPITableGrid