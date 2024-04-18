'use client'
import { Button } from '@/components/atoms'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Slider from 'react-slick';
import { ProductsSetting } from '@/util/helpers/sliderSettings';
import { ArticleCard } from '@/components/molecules';

import { FaStarOfLife } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";

import aricleImageOne from '../../../public/images/related-article-1.png'
import aricleImageTwo from '../../../public/images/related-article-2.png'
import aricleImageThree from '../../../public/images/related-article-3.png'
import aricleImageFour from '../../../public/images/related-article-4.png'
import aricleImageFive from '../../../public/images/related-article-5.png'

export const RelatedArticles = () => {
  return (
    <section className="bg-light-grey py-12 pb-20 articles">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between ">
          <div className='flex items-center gap-3 md:gap-5'>
            <h3 className="text-2xl md:text-[32px] text-core-blue font-bold">Related articles</h3>
            <ul className='flex gap-2'>
                <li className='bg-core-lightBlue border-[2px] cursor-pointer rounded-full border-blue-600 text-white p-2'><FaStarOfLife size={14}/></li>
                <li className='bg-[#B71A5D] border-[2px] cursor-pointer rounded-full border-[#5C0E2F] text-white p-2'><FaFileAlt size={14}/></li>
                <li className=' border-[2px] cursor-pointer rounded-full border-[#662482] text-[#662482] p-2'><IoVideocam size={14}/></li>
                <li className=' border-[2px] cursor-pointer rounded-full border-[#657E1B] text-[#657E1B] p-2'><AiFillSound size={14}/></li>
            </ul>
          </div>
          <Button
            icon={<HiArrowNarrowRight />}
            iconPosition='right'
            size='md'
          >
            View on Inform
          </Button>
        </div>
        <div className='mt-8'>
        <Slider {...ProductsSetting}>
                    {
                        articles?.map((item, idx: number) => (
                            <ArticleCard data={item} key={idx}/>
                        ))
                    }
                </Slider>
        </div>
      </div>
    </section>
  )
}


const articles = [
    {
        title:"Order management for the 5G era",
        slug:"#",
        author: "joanne taaffe",
        category: "IT TRANSFORMATION",
        image: aricleImageOne
    },
    {
        title:"Vodacom CIO plans for digital and financial service revenue growth",
        slug:"#",
        author: "joanne taaffe",
        category: "IT TRANSFORMATION",
        image: aricleImageTwo
    },
    {
        title:"The changing face of telecoms: A spotlight on Toni-Ann Grant, BT",
        slug:"#",
        author: "joanne taaffe",
        category: "IT TRANSFORMATION",
        image: aricleImageThree
    },
    {
        title:"Driving technological and cultural innovation",
        slug:"#",
        author: "joanne taaffe",
        category: "IT TRANSFORMATION",
        image: aricleImageFour
    },
    {
        title:"DTWS: Choosing your friends wisely",
        slug:"#",
        author: "joanne taaffe",
        category: "IT TRANSFORMATION",
        image: aricleImageFive
    }
]