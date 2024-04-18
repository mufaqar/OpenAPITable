import { Button } from '@/components/atoms'
import React, { FC } from 'react'

import { VscTypeHierarchySub } from "react-icons/vsc";

interface IBroadbandScenariesCardProps {
    data:{
        name:string
        info: string
    }
}

export const BroadbandScenariesCard:FC<IBroadbandScenariesCardProps>= ({ data }) => {
    return (
        <div className="bg-white/50 border border-gray-300 rounded-tl-3xl rounded-br-3xl p-4">
            <h3 className="font-medium text-white text-2xl mt-2 mb-1">{data.name}</h3>
            <p className="text-sm my-2">{data.info}</p>
            <div className="mt-6 flex gap-3">
                <Button
                    size='full'
                    icon={<VscTypeHierarchySub />}
                    color='white'
                    className="!bg-core-blue border-core-blue hover:scale-105 !text-white py-2 text-sm"
                >
                    Sequence
                </Button>
                <Button
                    size='full'
                    color='white'
                    icon={<VscTypeHierarchySub />}
                    className='py-2 text-sm hover:scale-105 !border-white bg-transparent text-white'
                >
                    Flow
                </Button>
            </div>
        </div>
    )
}

