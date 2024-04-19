import {
  Hero,
  APIOverview,
  APITable,
  IntroductionAPI,
  ContextSpecificBundles,
  OpenAPITranning,
  CatalystProjects,
  RelatedArticles
} from '@/components/organisms'
import React from 'react'

export const OpenAI = () => {
  return (
    <>
      <Hero
        title="Open APIs"
        navigation={true}
      />
      <APIOverview />
      <APITable />
      <IntroductionAPI />
      <ContextSpecificBundles />
      <OpenAPITranning />
      <CatalystProjects/>
      <RelatedArticles/>
    </>
  )
}

