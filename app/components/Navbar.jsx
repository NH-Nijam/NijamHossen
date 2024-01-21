'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

import { IoIosSunny } from "react-icons/io";
import { useTheme } from 'next-themes';



const Navbar = () => {
    const [show, setShow] = useState(false)
    const {theme, setTheme} =useTheme();
    const pathName = usePathname()
    const handler = () => {
        setShow(!show)
    }
    return (
        <header className=' sticky top-0 z-10 backColor border-b-2 border-gray-600'>
            <nav className='container md:px-10 px-3 h-[60px] flex items-center justify-between '>
                <div>
                    <Link href="/">
                        <i className='flex gap-2 text-[30px] font-bold '>
                            <span className='text-orange-600'>Nijam</span>
                            <span>Hossen</span>
                        </i>
                    </Link>
                </div>
                <div className='lg:flex hidden gap-10 '>
                    <Link className={`${pathName === '/' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/">Home</Link>
                    
                    <Link className={`${pathName === '/MyProjects' ? 'dav' : 'hover:text-orange-600 duration-500 nav'}`} href="/MyProjects">My Projects</Link>
                    <Link  className={`${pathName === '/Contact' ? 'dav' : 'hover:text-orange-600 duration-500 nav'}`} href="/Contact">Contact</Link>
                </div>

{/* darkLight start  */}
                <button onClick={() => setTheme(theme ==="dark" ? "light" : "dark")} className=' px-1 py-1 border rounded-2xl'>
                    <IoIosSunny className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  dark:-rotate-90 dark:scale-0 z-0'/>
                </button>
{/* darkLight end */}

                {/* small device start */}
                <div onClick={handler} className='cursor-pointer lg:hidden'>
                    <FaBars size={30} />
                    <div className={
                        show ? `fixed left-0 top-0 ${theme === 'dark' ? 'bg-black':'bg-white'}  w-[100%]  h-screen md:px-10 px-3 ease-in duration-500`
                            :
                            `fixed left-[-100%] top-0  h-screen ease-out duration-500`
                    }>
                        <div onClick={handler} className='cursor-pointer '>
                            <div className='flex items-center justify-between h-[60px]   '>
                                <Link href="/">
                                    <i className='flex gap-2 text-[30px] font-bold '>
                                        <span className='text-orange-600'>Nijam</span>
                                        <span>Hossen</span>
                                    </i>
                                </Link>
                                <FaBarsStaggered size={30} />

                            </div>
                            <div className='mt-16  flex gap-10 flex-col text-2xl'>
                                <div className={`${pathName === "/" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                    <FaHome />
                                    <Link className={`${pathName === '/' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/">Home</Link>
                                </div>
                                <div className={`${pathName === "/About" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                    <RiProfileFill />
                                    <Link href="/About">About</Link>
                                </div>
                                <div className={`${pathName === "/Projects" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                    <FaDiagramProject />
                                    <Link href="/Projects">Projects</Link>
                                </div>
                                <div className={`${pathName === "/Skills" ? 'text-orange-600 b flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                    <GiSkills />
                                    <Link href="/Skills">Skills</Link>
                                </div>
                                <div className={`${pathName === "/Contact" ? 'text-orange-600  flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                    <RiContactsBookFill />
                                    <Link href="/Contact">Contact</Link>
                                </div>
                                <div className={`${pathName === "/Help" ? 'text-orange-600 border-b-[2px] border-orange-600 flex items-center gap-8 ' : 'nav flex items-center gap-8'}`}>
                                    <FaHandsHelping />
                                    <Link href="/Help">Help</Link>
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