import Image from "next/image";
import Link from "next/link";
import logo from './logo.svg'
export default function Navbar() {
  return (
    <div className='p-[10px] flex flex-row items-center justify-between w-full bg-gray-500 text-white'>
      <Image
        src={logo}
        alt='Beurokrat logo'
        quality={100}
      />
      <div>
        <Link href='/careers'>Careers</Link>
      </div>
    </div>
  )
}
