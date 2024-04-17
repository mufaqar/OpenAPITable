'use client'
import React from 'react'
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
      <SearchAPI />
      { tableStyle === 'grid' ? <OpenAPITableGrid /> : <OpenAPITableList /> }

    </>
  )
}

export default OpenAPITable