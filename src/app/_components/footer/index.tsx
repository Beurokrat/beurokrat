import Link from 'next/link'
import Container from '../container'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full border-t-8 bg-black border-primary">
            <Container>
                <div className="flex flex-col mt-[120px]">
                    <Image src="/assets/img/logo_light.png" className="w-[250px]" alt="beurokrat logo" />
                    <div className="flex sm:flex-col md:flex-row justify-between py-[50px] border-b border-white">
                        <div className="flex sm:flex-col md:flex-row sm:gap-[20px] md:gap-[50px] text-white">
                            <Link className="body-small" href="/work">
                                Work
                            </Link>
                            <Link className="body-small" href="/work">
                                Company
                            </Link>
                            <Link className="body-small" href="/work">
                                Careers
                            </Link>
                            <Link className="body-small" href="/work">
                                Blog
                            </Link>
                            <Link className="body-small flex flex-row" href="/work">
                                <Image src="/assets/img/icons/ic_login.png" className="w-fit pr-2" alt="twitter" />
                                Login
                            </Link>
                        </div>
                        <div className="flex mt-[50px] md:mt-0 gap-[30px] text-white">
                            <Image src="/assets/img/icons/ic_x.png" className="w-[25px]" alt="twitter" />
                            <Image src="/assets/img/icons/ic_linkedin.png" className="w-[25px]" alt="linkedin" />
                            <Image src="/assets/img/icons/ic_instagram.png" className="w-[25px]" alt="instagram" />
                        </div>
                    </div>
                    <div className="flex sm:flex-col md:flex-row justify-between mt-2 mb-[40px]">
                        <div className="flex sm:flex-col md:flex-row sm:gap-[20px] md:gap-[50px] text-white">
                            <Link href="/work">Privacy Policy</Link>
                            <Link href="/work">Terms & Conditions</Link>
                            <Link href="/work">Manage Cookies</Link>
                        </div>
                        <p className="sm:mt-[50px] md:mt-0 text-white">©2024 beurokrat</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
