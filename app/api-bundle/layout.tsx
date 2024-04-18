import React from 'react'

const ApiBundleLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>{children}</>
    )
}

export default ApiBundleLayout