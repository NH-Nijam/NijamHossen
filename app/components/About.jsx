'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'
// icons start 
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
// iconts end 
// header image start
import Nijam from '../img/nijam.png'
// header image emd
const Aboutpage = () => {

    const Me = [
        'Web Developer',
        'Front-end Developer',
        'React Developer',
    ]
    return (
        <div className="z-0 lg:h-screen flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center justify-between lg:px-0 md:px-10 px-3">
            <div className="lg:w-1/2 w-full flex flex-col gap-5 text-center lg:text-start">
                <h3 className="text-base md:text-xl 2xl:text-3xl ">Let'<span className="text-orange-600">s</span> create something new <span className='text-orange-600'>!!!</span> </h3>
                <h1 className="flex flex-col text-3xl md:text-5xl 2xl:text-7xl md:gap-4 gap-1 font-bold">
                    <span>Hi, I'm</span>
                    <span className="text-orange-600">Nijam Hossen</span>
                </h1>
                <h2 className='text-xl  md:text-3xl 2xl:text-4xl'>I am a <span className='text-orange-600'><Typewriter words={Me} loop={true} cursor={true} /></span>
                </h2>
                <div className='mt-4 flex 2xl:gap-10 md:gap-7 gap-4 justify-center lg:justify-start '>
                    <Link href='https://github.com/NH-Nijam' target='blank'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FiGithub className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                    <Link href='https://www.facebook.com/profile.php?id=100009625237790' target='blank'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FaFacebookF className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                    <Link href='https://www.linkedin.com/in/nijam-hossen-789081264/' target='blank'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FaLinkedinIn className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                    <Link href='https://www.pinterest.com/login/' target='blank'>
                        <div className='2xl:w-[60px] 2xl:h-[60px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md shadow-orange-600 rounded-full hover:scale-110 duration-500 flex justify-center items-center'>
                            <FaPinterestP className='2xl:text-4xl md:text-3xl text-2xl' />
                        </div>
                    </Link>
                </div>
                <div className='mt-5'>
                    <Link href='https://drive.google.com/file/d/1oCs5h72fffjdp2thyhFQxPgfJU2ZizMY/view?usp=sharing' target='blank'>
                        <div className='shadow-md shadow-orange-600 lg:px-10 lg:py-3 md:px-8 md:py-2 py-1 px-5 2xl:text-2xl md:text-xl hover:bg-orange-600 hover:shadow-none duration-500 rounded-md font-semibold hover:text-[#111827] hover:scale-110 inline-block'>
                            <button className=''>Resume</button>
                        </div>
                    </Link>
                </div>
            </div>

            {/* image start  */}
            <div className='lg:w-1/2 w-full flex justify-center items-center'>
                <div className='box '>
                    <div className='content'>
                        <Image className='img' src={Nijam} width={500} height={500} alt='Nijam Hossen' />
                        <div className='flex gap-4 flex-col '>
                            <h1 className='text-white text-xl md:text-2xl font-bold '>MD: Nijam Hossen</h1>
                            <h1 className='text-white text-xl md:text-2xl font-bold'>Front-end Developer</h1>
                            <Link href='#' className='text-base md:text-lg text-orange-600 underline' >Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* image end  */}
        </div>

    );
};

export default Aboutpage;