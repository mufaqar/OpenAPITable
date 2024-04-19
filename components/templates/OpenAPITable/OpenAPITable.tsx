'use client'
import React from 'react'
import useSelectApiTableStyle from '@/hooks/useSelectApiTableStyle'
import { Hero, SearchAPI } from '@/components/organisms'
import { OpenAPITableGrid, OpenAPITableList } from '@/components/templates'

export const OpenAPITable = () => {
  const { tableStyle } = useSelectApiTableStyle()

  return (
    <>
      <Hero
        title="Open API Table"
      />
      <SearchAPI />
      <section className='bg-light-grey'>
        <div className='max-w-[1512px] mx-auto px-4 xl:px-6 2xl:px-8 w-full pb-20 pt-5'>
          {tableStyle === 'grid' ?
            <OpenAPITableGrid
              MarketingSalesAPIs={MarketingSalesAPIs}
              CustomerAPIs={CustomerAPIs}
              ProductAPIs={ProductAPIs}
            /> :
            <OpenAPITableList />}
        </div>
      </section>
    </>
  )
}



const MarketingSalesAPIs = [
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
]

const CustomerAPIs = [
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  }
]

const ProductAPIs = [
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  },
  {
    title: 'AI Management',
    version: 'V4.0.0',
    domain: 'Resource APIs',
    updated: '01/01/2023',
    tag: 'TMF915'
  }
]
