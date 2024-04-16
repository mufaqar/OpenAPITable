import React, { FC } from 'react'

const MainHeading:FC<any> = ({children, className}) => {
  return (
    <h2 className={`text-core-blue text-3xl sm:text-4xl md:text-5xl lg:text-hero font-bold ${className}`}>
      {children}
    </h2>
  )
}

export default MainHeading
