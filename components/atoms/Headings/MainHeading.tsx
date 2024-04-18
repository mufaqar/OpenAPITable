import React, { FC } from 'react'

interface IHeadingProps {
  children: React.ReactNode
  className?: string
}

export const MainHeading:FC<IHeadingProps> = ({children, className}) => {
  return (
    <h2 className={`text-core-blue text-3xl sm:text-4xl md:text-5xl lg:text-hero font-bold ${className}`}>
      {children}
    </h2>
  )
}


