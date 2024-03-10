import React from 'react'

function Container({ children }: { children: React.ReactNode }) {

    return (
        <div className="sm:m-8 md:m-20 overflow-hidden">
            {children}
        </div>
    )
}

export default Container