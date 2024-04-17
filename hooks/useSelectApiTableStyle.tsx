'use client'

import { useSearchParams , useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useSelectApiTableStyle = () => {
    const router = useRouter()
    const [tableStyle, setTableStyle] = useState('grid')
    const params:any = useSearchParams()
    const style = params.get('style')

    const handleTableStyle = (style: string) => {
        router.push(`?style=${style}`)
    }

    useEffect(() => {
        setTableStyle(style)
    }, [tableStyle, style, handleTableStyle])

    return {
        handleTableStyle,
        tableStyle
    }
}

export default useSelectApiTableStyle