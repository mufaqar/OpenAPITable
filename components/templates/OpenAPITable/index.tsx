'use client'
import React, { Suspense } from 'react'
import OpenAPITableGrid from './OpenAPITableGrid'
import useSelectApiTableStyle from '@/hooks/useSelectApiTableStyle'
import OpenAPITableList from './OpenAPITableList'
import { Hero, SearchAPI } from '@/components/organisms'

const OpenAPITable = () => {
  const { tableStyle } = useSelectApiTableStyle()

  return (
    <>
      <Hero
        title="Open API Table"
      />
      <Suspense><SearchAPI /></Suspense>
      <section className='bg-light-grey'>
        <div className='container pb-20 pt-5'>
          {tableStyle === 'grid' ? <OpenAPITableGrid /> : <OpenAPITableList />}
        </div>
      </section>
    </>
  )
}

export default OpenAPITable