"use client"
import { useRouter } from 'next/navigation';

import Image from "next/image";
import Link from "next/link";
import logo from './logo.svg'
import Button from "../button";

export default function Navbar() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Button clicked!');
    router.push('/careers');
  };
  return (
    <div className="fixed top-0 left-0 right-0 w-full ">
      <div className='container my-10 mx-auto p-[10px] bg-white flex flex-row items-center justify-between w-3/4 shadow-lg'>
        <Link href='/'>
          <Image
            src={logo}
            alt='Beurokrat logo'
            quality={100}
            className='mx-[30px]'
          />
        </Link>
        <div>
          <Link href='/careers' className="m-[15px]">Work</Link>
          <Link href='/careers' className="m-[15px]">Company</Link>
          <Link href='/careers' className="m-[15px]">Careers</Link>
          <Link href='/careers' className="m-[15px]">Blog</Link>
          <Button text="Contact" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
