import React from 'react'
import Container from '../_components/container'

interface Props {}

function Quantifiers(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="flex sm:flex-col md:flex-row sm:gap-4 mt-[22px] justify-between text-white ">
                <div className="flex flex-col pt-[65px] p-[40px] rounded-[38px] md:w-[390px] md:h-[405px] bg-cover bg-center bg-[url('/assets/img/q_bg_1.png')]">
                    <div className="text-lg w-[60%]">
                        <span className="text-[110px]">3</span>Years
                    </div>
                    <h3 className="mt-5 w-[60%] text-xl">Striving for Excellence</h3>
                </div>
                <div className="flex flex-col pt-[65px] p-[40px] rounded-[38px] md:w-[390px] md:h-[405px] bg-cover bg-center bg-[url('/assets/img/q_bg_2.png')]">
                    <div className="text-xl w-[60%]">
                        <span className="text-[110px]">1610</span>
                    </div>
                    <h3 className="mt-5 w-[60%] text-xl">Accomplished Endeavours</h3>
                </div>
                <div className="flex flex-col pt-[65px] p-[40px] rounded-[38px] md:w-[390px] md:h-[405px] bg-cover bg-center bg-[url('/assets/img/q_bg_3.png')]">
                    <div className="text-xl w-[60%]">
                        <span className="text-[110px]">230</span>
                    </div>
                    <h3 className="mt-5 w-[60%] text-xl">SMEs across the globe</h3>
                </div>
            </div>
        </Container>
    )
}

export default Quantifiers
