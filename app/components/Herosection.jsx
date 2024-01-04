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
            <div className='lg:w-8/12 2xl:w-5/12 w-11/12 flex flex-col gap-4'>
                <p className='2xl:text-2xl lg:text-xl '>Let'<span className='text-orange-600'>s</span> create something new</p>
                <h1 className='2xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-bold'>Hi, I'm <span className='text-orange-600'>Nijam Hossen </span> </h1>
                <h1 className='2xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-bold'>I am a <span className='text-orange-600'><Typewriter loop={true} words={['Web Developer', 'Front-end Developer', 'React Developer']} /></span> </h1>
                <p className='text-white/70 md:text-lg text-[10px]'>I am a front-end developer. I can design and develop any website. I use NextJS to build any website. I have been working on front end development for 8 months.</p>
                <div className='flex justify-center gap-5 mt-3'>
                    <Link href='#'>
                        <div className=' md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <FaFacebookF  className='md:text-3xl text-xl' />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className=' md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <FiGithub className='md:text-3xl text-xl' />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className=' md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <FaLinkedinIn className='md:text-3xl text-xl' />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className=' md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full shadow-md shadow-orange-600 flex justify-center items-center hover:scale-110 duration-500'>
                            <SiVercel className='md:text-3xl text-xl' />
                        </div>
                    </Link>
                </div>
                <Link href='https://drive.google.com/file/d/1oCs5h72fffjdp2thyhFQxPgfJU2ZizMY/view?usp=sharing' target='blank'><button className='border md:px-5 md:py-2 px-3 py-1 mt-5 rounded-lg border-orange-600 hover:scale-110 duration-700  hover:shadow-md hover:shadow-orange-600 hover:text-orange-600 md:text-xl text-base '>Resume</button></Link>
            </div>
        </div>
    );
};

export default Herosection;