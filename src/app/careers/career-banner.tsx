import React from 'react'
import Container from '../_components/container'

function CareerBanner() {
    return (
        <Container>
            <div className="w-full flex flex-row h-[537px] mb-[20px] rounded-[24px] bg-cover bg-center bg-[url('/assets/img/career_banner.png')]">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-[30px] text-white">Your Growth Our Focus</h1>
                    <p className="mt-[30px] sm:w-2/3 md:w-1/3 text-white text-[17px] text-center">
                        We know that everyone’s life experiences are different. That’s why we offer a wide range of benefits for
                        all our full-time members.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default CareerBanner
