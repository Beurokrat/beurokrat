// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import {
//     BookOpenIcon,
//     BriefcaseIcon,
//     GlobeAltIcon,
//     InformationCircleIcon,
//     NewspaperIcon,
//     ShieldCheckIcon,
//     UserGroupIcon,
//     UsersIcon,
//     VideoCameraIcon,
// } from '@heroicons/react/24/outline'

// const engagement = [
//     { name: 'About', href: '#', icon: InformationCircleIcon },
//     { name: 'Customers', href: '#', icon: UsersIcon },
//     { name: 'Press', href: '#', icon: NewspaperIcon },
//     { name: 'Careers', href: '#', icon: BriefcaseIcon },
//     { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
// ]
// const resources = [
//     { name: 'Community', href: '#', icon: UserGroupIcon },
//     { name: 'Partners', href: '#', icon: GlobeAltIcon },
//     { name: 'Guides', href: '#', icon: BookOpenIcon },
//     { name: 'Webinars', href: '#', icon: VideoCameraIcon },
// ]
// const recentPosts = [
//     {
//         id: 1,
//         title: 'Boost your conversion rate',
//         href: '#',
//         date: 'Mar 16, 2023',
//         datetime: '2023-03-16',
//         category: { title: 'Marketing', href: '#' },
//         imageUrl:
//             'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//         description:
//             'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
//     },
//     {
//         id: 2,
//         title: 'How to use search engine optimization to drive sales',
//         href: '#',
//         date: 'Mar 10, 2023',
//         datetime: '2023-03-10',
//         category: { title: 'Sales', href: '#' },
//         imageUrl:
//             'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
//         description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
//     },
// ]

// export default function MobileMenu() {
//     return (
//         <Popover className="relative isolate z-50 shadow">
//             <div className="bg-white py-5">
//                 <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                     <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//                         Solutions
//                         <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
//                     </PopoverButton>
//                 </div>
//             </div>

//             <PopoverPanel
//                 transition
//                 className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
//             >
//                 <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
//                     <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
//                         <div>
//                             <h3 className="text-sm font-medium leading-6 text-gray-500">Engagement</h3>
//                             <div className="mt-6 flow-root">
//                                 <div className="-my-2">
//                                     {engagement.map((item) => (
//                                         <a
//                                             key={item.name}
//                                             href={item.href}
//                                             className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
//                                         >
//                                             <item.icon aria-hidden="true" className="h-6 w-6 flex-none text-gray-400" />
//                                             {item.name}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-medium leading-6 text-gray-500">Resources</h3>
//                             <div className="mt-6 flow-root">
//                                 <div className="-my-2">
//                                     {resources.map((item) => (
//                                         <a
//                                             key={item.name}
//                                             href={item.href}
//                                             className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
//                                         >
//                                             <item.icon aria-hidden="true" className="h-6 w-6 flex-none text-gray-400" />
//                                             {item.name}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
//                         <h3 className="sr-only">Recent posts</h3>
//                         {recentPosts.map((post) => (
//                             <article
//                                 key={post.id}
//                                 className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
//                             >
//                                 <div className="relative flex-none">
//                                     <img
//                                         alt=""
//                                         src={post.imageUrl}
//                                         className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
//                                     />
//                                     <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
//                                 </div>
//                                 <div>
//                                     <div className="flex items-center gap-x-4">
//                                         <time dateTime={post.datetime} className="text-sm leading-6 text-gray-600">
//                                             {post.date}
//                                         </time>
//                                         <a
//                                             href={post.category.href}
//                                             className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
//                                         >
//                                             {post.category.title}
//                                         </a>
//                                     </div>
//                                     <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
//                                         <a href={post.href}>
//                                             <span className="absolute inset-0" />
//                                             {post.title}
//                                         </a>
//                                     </h4>
//                                     <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 </div>
//             </PopoverPanel>
//         </Popover>
//     )
// }

import React, { useState, useEffect } from 'react'
import NavLinks from './nav-links'
import Link from 'next/link'

// Define the type for the props
interface MobileMenuProps {
    closeMobileMenu: any
    overlayAction: boolean
    setOverlayAction: (value: boolean) => void
}

// Use the defined type in your component
const MobileMenu: React.FC<MobileMenuProps> = ({ overlayAction, setOverlayAction, closeMobileMenu }) => {
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
            className="md:hidden"
        >
            <main className="top-50 bottom-0 flex flex-col items-center justify-start w-[80%] h-[400px]   box-border gap-[16px]  text-left text-base p-0 pb-10">
                <div className="self-stretch flex flex-row items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke">
                    <Link onClick={closeMobileMenu} href="/work" className="relative leading-[21px] ">
                        Work
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </div>
                <div
                    className={`self-stretch flex ${
                        overlayAction && 'flex-row'
                    } items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke mq450:flex-wrap`}
                    onClick={() => setOverlayAction(!overlayAction)}
                >
                    <Link onClick={closeMobileMenu} href="/company" className="relative leading-[21px]">
                        Company
                    </Link>

                    {overlayAction ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                            </svg>
                        </>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setOverlayAction(!overlayAction)}
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    )}
                </div>
                {overlayAction && <div className="flex flex-wrap ">{/* <NavLinks width={20} /> */}</div>}

                <div className="self-stretch flex flex-row items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke">
                    <Link onClick={closeMobileMenu} href="careers" className="relative leading-[21px]">
                        Careers
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between py-[16px] border-b-[1px] border-solid border-whitesmoke mq450:flex-wrap">
                    <div onClick={closeMobileMenu} className="relative leading-[21px]">
                        Blog
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
                <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="cursor-pointer [border:none] mt-[16px] px-5 py-[16px] bg-primary self-stretch rounded-[35px] flex flex-row flex-wrap items-center justify-center hover:bg-greenyellow"
                >
                    <div className="relative text-base leading-[21px] font-cta-button-text-title-case-mob text-bk-black text-center">
                        Contact
                    </div>
                </Link>
            </main>
        </div>
    )
}

export default MobileMenu
