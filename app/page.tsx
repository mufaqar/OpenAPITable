// 'use client'

import { OpenAI } from "@/components/templates/OpenAI/OpenAI";
import { fetchDataWithQS } from "@/lib/api";

const queryParams = {
  populate: ['featuresSection.features', 'whatItMeansSection.caption']
}

export default async function Home() {

  const data = await fetchDataWithQS("main-page", queryParams, {method: 'GET'});
  console.log("🚀 ~ Home ~ data:", data.data.attributes)

  return (
    <>
      <OpenAI data={data.data.attributes}/>
    </>
  );
}
