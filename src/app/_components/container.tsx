import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
    return <div className="sm:mx-8 md:mx-auto md:w-[80%] overflow-hidden">{children}</div>
}

export default Container
