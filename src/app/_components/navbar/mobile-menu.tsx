import React from 'react';
import NavLinks from './nav-links';

// Define the type for the props
interface MobileMenuProps {
    overlayAction: boolean;
    setOverlayAction: (value: boolean) => void;
   }

// Use the defined type in your component
const MobileMenu: React.FC<MobileMenuProps> = ({ overlayAction, setOverlayAction }) => {
  return (
    <div
      style={{
        zIndex: -10,
        position: 'absolute',
        top: '-50px',
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <main className='top-50 bottom-0 flex flex-col items-center justify-start w-[80%] h-[400px]   box-border gap-[16px]  text-left text-base p-0 pb-10'>
        <div className='self-stretch flex flex-row items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke'>
          <div className='relative leading-[21px] '>Work</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 4v16m8-8H4'
            />
          </svg>
        </div>
        <div
          className={`self-stretch flex ${
            overlayAction && 'flex-row'
          } items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke mq450:flex-wrap`}
          onClick={() => setOverlayAction(!overlayAction)}
        >
          <div className='relative leading-[21px]'>Company</div>

          {overlayAction ? (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M20 12H4'
                />
              </svg>
            </>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => setOverlayAction(!overlayAction)}
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 4v16m8-8H4'
              />
            </svg>
          )}
        </div>
        {overlayAction && (
          <div className='flex flex-wrap '>
            <NavLinks width={20} />
          </div>
        )}

        <div className='self-stretch flex flex-row items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke'>
          <div className='relative leading-[21px]'>Careers</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </div>
        <div className='self-stretch flex flex-row items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke mq450:flex-wrap'>
          <div className='relative leading-[21px]'>Blog</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </div>
        <button className='cursor-pointer [border:none] mt-[16px] px-5 py-[16px] bg-primary self-stretch rounded-[35px] flex flex-row flex-wrap items-center justify-center hover:bg-greenyellow'>
          <div className='relative text-base leading-[21px] font-cta-button-text-title-case-mob text-bk-black text-center'>
            Contact
          </div>
        </button>
      </main>
    </div>
  );
}

export default MobileMenu;
