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


const Navbar = () => {
    const [show, setShow] = useState(false)
    const pathName = usePathname()
    const handler = () => {
        setShow(!show)
    }
    // nav array start
    const Navbar = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/About"
        },
        {
            name: "Projects",
            link: "/Projects"
        },
        {
            name: "Skills",
            link: "/Skills"
        },
        {
            name: "Contact",
            link: "/Contact"
        },
        {
            name: "Help",
            link: "/Help"
        },
    ]
    // nav array end
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
                    {
                        Navbar.map(({ name, link }) => (
                            <Link
                                key={name}
                                href={link}
                                name={name}
                                className={`${pathName === link ? 'text-orange-600 text-xl ' : 'nav'} `}
                            >
                                {name}
                            </Link>
                        ))
                    }
                </div>

                {/* small device start */}

                <div onClick={handler} className='cursor-pointer lg:hidden'>
                    <FaBars size={30} />
                    <div className={
                        show ? 'fixed left-0 top-0  w-[100%] h-screen backColor px-10 ease-in duration-500'
                            :
                            'fixed left-[-100%] top-0  h-screen ease-out duration-500'
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
                                    <Link href="/">Home</Link>
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