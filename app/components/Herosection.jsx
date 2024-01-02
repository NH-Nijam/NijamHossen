'use client'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Link from 'next/link';

const Herosection = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center text-center'>
            <div className='w-8/12 flex flex-col gap-4'>
                <p className='text-2xl '>Let'<span className='text-orange-600'>s</span> create something new</p>
                <h1 className='text-6xl text-bold'>Hi, l'm <span className='text-orange-600'>Nijam Hossen </span> </h1>
                <h1 className='text-6xl text-bold'>I am a <span className='text-orange-600'><Typewriter loop={true} words={['Web Developer', 'Front-end Developer', 'React Developer']} /></span> </h1>
                <p className='text-white/70 text-lg'>I am a front-end developer. I can design and develop any website. I use NextJS to build any website. I have been working on front end development for 8 months.</p>
                <div className='flex justify-center gap-5 mt-3'>
                    <Link href='#'>
                        <div className=' w-[60px] h-[60px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <FaFacebookF size={30} />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className=' w-[60px] h-[60px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <FiGithub size={30} />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className=' w-[60px] h-[60px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <FaLinkedinIn size={30} />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className=' w-[60px] h-[60px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <SiVercel size={30} />
                        </div>
                    </Link>
                </div>
                <Link href='#'><button className='border px-5 mt-5 rounded-lg border-orange-600 hover:scale-110 duration-700  hover:shadow-md hover:shadow-orange-600 hover:text-orange-600 text-xl py-2'>Resume</button></Link>
            </div>
        </div>
    );
};

export default Herosection;