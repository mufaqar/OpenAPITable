import { OpenAPITable } from '@/components/templates'
import React, { Suspense } from 'react'

const OpenAPITablePage = () => {
  return (
    <>
      <Suspense> <OpenAPITable /></Suspense>
    </>
  )
}

export default OpenAPITablePage