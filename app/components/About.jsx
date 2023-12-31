'use client'
import Link from 'next/link';
// icons start 
import { Typewriter } from 'react-simple-typewriter'
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
// iconts end 
import Image from 'next/image';
import Nijam from '../img/nijam.png'
const Aboutpage = () => {
   
    const Me = [
        'Web Developer',
        'Front-end Developer',
        'React Developer',
    ]
    return (
        <div className="container lg:h-screen flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center justify-between md:px-10 px-3">
            <div className="lg:w-1/2 w-full flex flex-col gap-5 text-center lg:text-start">
                <h3 className="text-base md:text-xl 2xl:text-3xl ">Let'<span className="text-orange-600">s</span> create something new <span className='text-orange-600'>!!!</span> </h3>
                <h1 className="flex flex-col text-3xl md:text-5xl 2xl:text-7xl md:gap-4 gap-1 font-bold">
                    <span>Hi, I'm</span>
                    <span className="text-orange-600">Nijam Hossen</span>
                </h1>
                <h2 className='text-xl  md:text-3xl 2xl:text-4xl'>I am a <span className='text-orange-600'><Typewriter words={Me} loop={true} cursor={true} /></span>
                </h2>
                <div className='mt-4 flex 2xl:gap-10 md:gap-7 gap-4 justify-center lg:justify-start '>
                    <Link href='#'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FiGithub className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FaFacebookF className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FaLinkedinIn className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FaPinterestP className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                </div>
                <div className='mt-5'>
                    <Link href='#'>
                        <div className='shadow-md shadow-orange-600 lg:px-10 lg:py-3 md:px-8 md:py-2 py-1 px-5 2xl:text-2xl md:text-xl hover:bg-orange-600 hover:shadow-none duration-500 rounded-md font-semibold hover:text-[#111827] hover:scale-110 inline-block'>
                            <button className=''>Resume</button>
                        </div>
                    </Link>
                </div>
            </div>

            {/* image start  */}
            <div className='lg:w-1/2 w-full flex justify-center items-center'>
                <div className='box 2xl:w-[500px] 2xl:h-[500px] md:w-[450px] md:h-[450px]  duration-500'>
                    <div className='content'>
                        <Image src={Nijam} width={500} height={500} alt='Nijam Hossen' ></Image>
                    </div>
                </div>
            </div>
            {/* image end  */}
        </div>

    );
};

export default Aboutpage;