import React from 'react'

function Container({ children }: { children: React.ReactNode }) {

    return (
        <div className="sm:m-8 md:m-auto md:w-[80%] overflow-hidden">
            {children}
        </div>
    )
}

export default Container