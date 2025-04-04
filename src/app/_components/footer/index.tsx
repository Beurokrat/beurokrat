'use client'
import Image from 'next/image'
import Container from '../container'
import { useRouter } from 'next/navigation' // Import useRouter
import Link from 'next/link'

const Footer = () => {
    const router = useRouter() // Initialize useRouter

    const navigateTo = (path: string) => {
        router.push(path) // Navigate to the specified path
    }

    return (
        <div className="flex mx-auto w-[95%] mb-[30px]">
            <div className="py-[70px] sm:px-[30px] md:px-[52px] w-full rounded-[38px] bg-[#15171A] text-[#E9E9E9] h-fit">
                <div className="flex sm:flex-col md:flex-row mb-[29px]">
                    <div className="flex flex-col sm:w-full md:w-1/2">
                        <h1 className="pb-2 sm:text-[37px] md:text-[77px] md:leading-[88px]">
                            Start <span className="text-primary">building</span> with Beurokrat
                        </h1>
                        <Image
                            height={134}
                            width={134}
                            className="md:hidden sm:flex"
                            alt="beurokrat cube"
                            src={'/assets/img/footer-cube-sm.png'}
                        />

                        <button
                            className="sm:w-full md:w-fit mt-[34px] bg-black text-white rounded-[35px] py-[20px] px-[50px] border border-primary"
                            onClick={() => navigateTo('/contact')} // Navigate to "Let's Chat"
                        >
                            Let&apos;s chat
                        </button>
                    </div>
                    <div className="sm:hidden md:flex flex-col w-1/2 justify-center items-end">
                        <Image height={258} width={258} alt="beurokrat cube" src={'/assets/img/footer-cube-md.png'} />
                    </div>
                </div>
                <div className="flex sm:flex-col md:flex-row pt-[20px] w-full border-t border-[#ffffff6c] text-white">
                    <div className="flex flex-col md:w-1/2 ">
                        <div className="flex sm:flex-col md:flex-row w-full">
                            <div className="sm:w-full md:w-1/2">
                                <div className="text-[17px] font-bold">Drop us a line!</div>
                                <div className="mt-[16px] text-[#667085] text-[17px]">hello@beurokrat.com</div>
                            </div>
                            <div className="sm:mt-[32px] md:mt-[0px] md:w-1/2">
                                <div className="text-[17px] font-bold">Call Us</div>
                                <div className="mt-[16px] text-[#667085] text-[17px]">+91 9539 000008</div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-[45px] w-full ">
                            <div className="text-[17px] font-bold">Location</div>
                            <div className="mt-[16px] text-[#667085] text-[17px]">
                                3rd Floor UB Business Centre, Ernakulam, Kerala 682021
                            </div>
                        </div>
                    </div>

                    <div className="flex sm:mt-[25px] md:mt-[0px] sm:border-t md:border-0 border-[#ffffff6c] sm:flex-col md:flex-row md:w-1/2 h-fit justify-end">
                        <div
                            className="flex flex-row items-center sm:mt-[25px] md:mt-[0px] md:ml-[30px] text-[17px] font-bold cursor-pointer"
                            onClick={() => navigateTo('/work')} // Navigate to "Work"
                        >
                            Work
                            <Image
                                className="py-2 ml-[10px]"
                                height={13}
                                width={13}
                                alt="share"
                                src={'/assets/img/icons/footer_open.png'}
                            />
                        </div>
                        <div
                            className="flex flex-row items-center sm:mt-[25px] md:mt-[0px] md:ml-[30px] text-[17px] font-bold cursor-pointer"
                            onClick={() => navigateTo('/company')} // Navigate to "About Us"
                        >
                            About Us
                            <Image
                                className="py-2 ml-[10px]"
                                height={13}
                                width={13}
                                alt="share"
                                src={'/assets/img/icons/footer_open.png'}
                            />
                        </div>
                        <div
                            className="flex flex-row items-center sm:mt-[25px] md:mt-[0px] md:ml-[30px] text-[17px] font-bold cursor-pointer"
                            onClick={() => navigateTo('/careers')} // Navigate to "Careers"
                        >
                            Careers
                            <Image
                                className="py-2 ml-[10px]"
                                height={13}
                                width={13}
                                alt="share"
                                src={'/assets/img/icons/footer_open.png'}
                            />
                        </div>
                        <div
                            className="flex flex-row items-center sm:mt-[25px] md:mt-[0px] md:ml-[30px] text-[17px] font-bold cursor-pointer"
                            onClick={() => navigateTo('/blog')} // Navigate to "Blog"
                        >
                            Blog
                            <Image
                                className="py-2 ml-[10px]"
                                height={13}
                                width={13}
                                alt="share"
                                src={'/assets/img/icons/footer_open.png'}
                            />
                        </div>
                        <div
                            className="flex flex-row items-center sm:mt-[25px] md:mt-[0px] md:ml-[30px] text-[17px] font-bold cursor-pointer"
                            onClick={() => navigateTo('/login')} // Navigate to "admin login"
                        >
                            Admin
                            <Image
                                className="py-2 ml-[10px]"
                                height={13}
                                width={13}
                                alt="share"
                                src={'/assets/img/icons/footer_open.png'}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-col md:flex-row justify-between sm:mt-[40px] md:mt-[90px]">
                    <div className="flex flex-row">
                        <Link href="https://www.linkedin.com/company/beurokrat/" target="_blank">
                        <Image
                            className="py-2 mr-[10px]"
                            height={40}
                            width={40}
                            alt="share"
                            src={'/assets/img/icons/footer_in.png'}
                        />
                        </Link>
                        <Image
                            className="py-2 mr-[10px]"
                            height={40}
                            width={40}
                            alt="share"
                            src={'/assets/img/icons/footer_ig.png'}
                        />
                        <Image
                            className="py-2 mr-[10px]"
                            height={40}
                            width={40}
                            alt="share"
                            src={'/assets/img/icons/footer_x.png'}
                        />
                    </div>
                    <div className="flex sm:mt-[25px] md:mt-[0px] sm:flex-col md:flex-row">
                        <div className="text-[#E1E1E1] text-[14px] mr-[55px] sm:mb-[19px] md:mb-0">Privacy Policy</div>
                        <div className="text-[#E1E1E1] text-[14px]">Beurokrat Copyright © 2025</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
