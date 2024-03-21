import React from 'react'
import CompanyTitle from './company-title'
import About from './about'
import Founder from './founder'
import Recognition from './recognition'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <>
            <CompanyTitle />
            <About />
            {/* <section className="w-full bg-black text-white">
                <Founder/>
            </section> */}
            <Recognition />
        </>
    )
}

export default Page
