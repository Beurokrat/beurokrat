import Image from 'next/image'
import Container from '../_components/container'

function Founder() {
    return (
        <Container>
            <div className="flex flex-col py-[70px] text-white">
                <div className="pb-[70px]">
                    <h1>Meet the founder</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/assets/img/founder.jpg" width={230} height={230} alt="Bk founder" className="rounded-xl" />
                    <p className="body-large pt-[30px]">Abdul Adil Basheer</p>
                    <p className="pt-[15px]">Founder</p>
                    <div className="flex mt-[15px] gap-[30px] text-white">
                        <Image src="/assets/img/icons/ic_x.png" width={25} height={25} alt="twitter" />
                        <Image src="/assets/img/icons/ic_linkedin.png" width={25} height={25} alt="linkedin" />
                        <Image src="/assets/img/icons/ic_instagram.png" width={25} height={25} alt="instagram" />
                    </div>
                    <div className="mt-[30px] w-1/4">
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur. Nunc tellus risus tincidunt arcu sed. Malesuada eu imperdiet
                            lectus id nunc venenatis ac sit metus. Enim viverra lectus pharetra feugiat ultricies aliquet vitae
                            orci duis. Morbi duis pretium aliquet libero porta.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Founder
