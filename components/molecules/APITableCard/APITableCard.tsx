import React from 'react'

interface IAPITableCardProps {
    data: any,
    id: number
}

const APITableCard = ({ data, id }: IAPITableCardProps) => {
    return (
        <div className="text-white px-2 md:px-6">
            <div className="bg-core-blue p-6 rounded-tl-[40px] rounded-br-[40px] flex flex-col md:flex-row gap-6">
                <h4 className="text-4xl font-bold">{id}</h4>
                <p className="md:text-lg font-light">{data?.content}</p>
            </div>
        </div>
    )
}

export default APITableCard
