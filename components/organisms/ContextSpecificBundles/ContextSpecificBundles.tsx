import { MainHeading } from '@/components/atoms'
import React from 'react'
import downloadFile from '../../../public/images/IntroductionAPI.png'
import { ContextSpecificBundlesCard } from '@/components/molecules'
import { IContextSpecificBundlesProps } from '@/util/types/contextSpecificBundleTypes'



const ContextSpecificBundles = () => {
    return (
        <section className="bg-core-blue py-16 text-white mb-20">
            <div className="container mx-auto">
                <MainHeading className="text-white">Context specific <span className="!font-light">bundles</span></MainHeading>
                <p className="sm:text-lg md:text-xl mt-7 max-w-[880px] ">Introducing context specific bundles. We have tailored our APIs to meet specific and common use cases all bundled together to and ready to deploy in your project. Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur odio dictumst scelerisque sollicitudin rhoncus sapien.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        bundles.map((item:IContextSpecificBundlesProps, idx:number) => (
                            <ContextSpecificBundlesCard data={item} key={idx}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ContextSpecificBundles


const bundles = [
    {
        name: "Wholesale broadband",
        tag: "Contains 13 APIs",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
        downloadBundleFile: downloadFile,
        href: "#"
    },
    {
        name: "5G slice",
        tag: "Contains XX APIs",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
        downloadBundleFile: downloadFile,
        href: "#"
    },
    {
        name: "5G slice",
        tag: "Set-top box",
        info: "Lorem ipsum dolor sit amet consectetur. Quis id sed imperdiet tempus netus enim morbi. Elementum fame",
        downloadBundleFile: downloadFile,
        href: "#"
    }
]