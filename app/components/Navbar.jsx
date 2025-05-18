'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { IoIosSunny } from 'react-icons/io';
import { IoMoonOutline } from "react-icons/io5";
import { CoolMode } from '@/components/magicui/cool-mode';




const Navbar = () => {
    const [show, setShow] = useState(false)
    const pathName = usePathname()
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    const handler = () => {
        setShow(!show)
    }
    return (
        <header className={` sticky top-0  z-10  border-b-2  py-3 bg-black ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
            <nav className='container md:px-10 px-3 h-[60px] lg:h-20 flex items-center justify-between '>
                <div>
                    <Link href="/">
                        <i className='flex gap-2 text-[30px] font-bold '>
                            <span className='text-orange-600 '>Nijam</span>
                            <span>Hossen</span>
                        </i>
                    </Link>
                </div>
                <div className='lg:flex hidden gap-10 '>
                    <CoolMode
                        size={50}
                    >
                        <Link className={`${pathName === '/' ? 'dav' : 'hover:text-orange-600  underline-orange-600  duration-500 nav'}`} href="/">Home</Link>
                    </CoolMode>
                    <CoolMode
                        size={50}
                    >

                        <Link className={`${pathName === '/MyProjects' ? 'dav' : 'hover:text-orange-600 duration-500 nav'}`} href="/MyProjects">My Projects</Link>
                    </CoolMode>
                    <CoolMode
                        size={50}
                    >

                        <Link className={`${pathName === '/Contact' ? 'dav' : 'hover:text-orange-600 duration-500 nav'}`} href="/Contact">Contact</Link>
                    </CoolMode>
                </div>

                {/* darkLight start  */}
                <CoolMode
                    size={50}
                >
                    <button onClick={toggleTheme} className=' px-1 py-1 rounded-2xl lg:flex lg:items-center hidden'>
                        {
                            isDark ? <IoMoonOutline size={25} /> : <IoIosSunny size={25} />
                        }

                    </button>
                </CoolMode>

                {/* darkLight end */}

                {/* small device start */}
                <div className=' lg:hidden flex gap-5  '>

                    <CoolMode
                        size={50}
                    >
                        <button onClick={toggleTheme} className=' px-1 py-1 rounded-2xl lg:flex lg:items-center hidden'>
                            {
                                isDark ? <IoMoonOutline size={25} /> : <IoIosSunny size={25} />
                            }

                        </button>
                    </CoolMode>

                    <div onClick={handler} className='cursor-pointer lg:hidden relative'>
                        <FaBars size={30} />

                        <div className={
                            show ? `fixed left-0 top-0 md:w-[40%] w-[70%]  h-screen md:px-10 px-3 ease-in duration-500 `
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