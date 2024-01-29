'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";


import { IoIosSunny } from "react-icons/io";
import { useTheme } from 'next-themes';



const Navbar = () => {
    const [show, setShow] = useState(false)
    const { theme, setTheme } = useTheme();
    const pathName = usePathname()
    const handler = () => {
        setShow(!show)
    }
    return (
        <header 
        data-aos="fade-down"
        className='navbar sticky top-0 navbar-expand-lg z-10  border-b-2 border-gray-600 bg-gray-950 text-white'>
            <nav className='container md:px-10 px-3  h-[60px] flex items-center justify-between '>
                <div>
                    <Link href="/">
                        <i className='flex gap-2 text-[30px] font-bold '>
                            <span className='text-orange-600 '>Nijam</span>
                            <span>Hossen</span>
                        </i>
                    </Link>
                </div>
                <div className='lg:flex hidden gap-10 '>
                    <Link className={`${pathName === '/' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/">Home</Link>

                    <Link className={`${pathName === '/MyProjects' ? 'dav' : 'hover:text-orange-600 duration-500 nav'}`} href="/MyProjects">My Projects</Link>
                    <Link className={`${pathName === '/Contact' ? 'dav' : 'hover:text-orange-600 duration-500 nav'}`} href="/Contact">Contact</Link>
                </div>

                {/* darkLight start  */}
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className=' px-1 py-1 rounded-2xl lg:flex lg:items-center hidden'>
                    <IoIosSunny size={30} />
                </button>
                {/* darkLight end */}


                {/* small device start */}
                <div className=' lg:hidden flex gap-5  '>

                    {/* small device darkLight start  */}
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className=' px-1 py-1 rounded-2xl l flex items-center justify-center'>
                        <IoIosSunny size={25} />
                    </button>
                    {/* small device darkLight end */}

                    <div onClick={handler} className='cursor-pointer lg:hidden relative'>
                        <FaBars size={30} />

                        <div className={
                            show ? `fixed left-0 top-0 ${theme === 'dark' ? 'bg-black text-white shadow-md shadow-white' : 'bg-white text-black shadow-md shadow-black'}  md:w-[40%] w-[70%]  h-screen md:px-10 px-3 ease-in duration-500 `
                                :
                                `fixed left-[-100%] top-0  h-screen ease-out duration-500`
                        }>
                            <div onClick={handler} className='cursor-pointer '>
                                <div className='flex items-center justify-end h-[60px]   '>
                                    <IoClose size={30} />

                                </div>
                                <div className='mt-16  flex gap-10 flex-col text-2xl'>
                                    <div className={`${pathName === "/" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                        <FaHome />
                                        <Link className={`${pathName === '/' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/">Home</Link>
                                    </div>

                                    <div className={`${pathName === "/MyProjects" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                        <FaDiagramProject />
                                        <Link className={`${pathName === '/MyProjects' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/MyProjects">My Projects</Link>
                                    </div>

                                    <div className={`${pathName === "/Contact" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                        <RiContactsBookFill />
                                        <Link className={`${pathName === '/Contact' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/Contact">Contact</Link>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* small device end */}

            </nav>
        </header>
    );
};

export default Navbar;