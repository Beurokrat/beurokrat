'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.svg';
import Button from '../button';
import NavLinks from './nav-links';
import MobileMenu from './mobile-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [overlayAction, setOverlayAction] = useState(false);
  const router = useRouter();

  const handleCompanyHover = () => {
    setOnHover(true);
  };

  const handleCompanyLeave = () => {
    setOnHover(false);
  };

  const handleClick = () => {
    console.log('Button clicked!');
    router.push('/careers');
  };

  return (
    <div className='fixed top-0 left-0 right-0 w-full'>
      <div className='my-10 mx-auto md:h-[70px] sm:h-[70px] flex flex-row items-center justify-between bg-white sm:w-[80%] md:w-3/4 shadow-lg'>
        <div className='p-5 flex flex-row items-center justify-between w-full'>
          <Link href='/'>
            <Image
              src={logo}
              alt='Beurokrat logo'
              quality={100}
              className='mx-3 h-[35px]'
            />
          </Link>
          {/* Desktop menu */}
          <div className='sm:hidden md:block'>
            {/* <Link href='/careers' className="m-[15px]">Work</Link>
            <Link href='/careers' className="m-[15px]">Company</Link>
            <Link href='/careers' className="m-[15px]">Careers</Link>
            <Link href='/careers' className="m-[15px]">Blog</Link>
            <Button text="Contact" onClick={handleClick} /> */}
            <div className={`lg:flex ${isOpen ? 'hidden' : 'hidden'}`}>
              <Link href='/work' className='m-[15px]'>
                Work
              </Link>
                <div
                  className='m-[15px] relative'
                  onMouseEnter={handleCompanyHover}
                  onMouseLeave={handleCompanyLeave}
                >
                  <Link href='/company' className='cursor-pointer'>
                    Company
                  </Link>

                  {onHover && <NavLinks width={23} />}
                </div>
              <Link href='/careers' className='m-[15px]'>
                Careers
              </Link>
              <Link href='/blog' className='m-[15px]'>
                Blog
              </Link>
              <Button text='Contact' onClick={handleClick} />
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className='flex items-center justify-center w-[70px] md:hidden h-full px-4 py-6 bg-primary'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center '
          >
            <svg
              width='25'
              height='12'
              viewBox='0 0 25 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1H24M1 11H24'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        // <div style={{zIndex: -10}} className="absolute top-0 left-0 w-full h-screen bg-white"></div>
        <MobileMenu
          overlayAction={overlayAction}
          setOverlayAction={setOverlayAction}
        />
      )}
    </div>
  );
}
