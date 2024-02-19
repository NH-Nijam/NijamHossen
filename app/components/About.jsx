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

// swper start 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
// swper end
const Aboutpage = () => {
    const Me = [
        'Web Developer',
        'Front-end Developer',
        'React Developer',
    ]
    return (
        <div className="z-0 lg:h-screen flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center justify-between lg:px-0 md:px-10 px-3">
            <div className="lg:w-1/2 w-full flex flex-col gap-5 text-center lg:text-start ">
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
            <div className='lg:w-1/2 w-full flex lg:justify-center lg:items-center  mt-10 lg:mt-0'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="md:w-[400px] md:h-[500px] w-[200px] h-[300px]"
                >
                    <SwiperSlide className='bg-red-600 rounded-lg md:p-5 p-3 '>
                        <Image src='/images/1.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>Web-Developer</span>
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='bg-blue-600 rounded-lg md:p-5 p-3'>
                        <Image src='/images/2.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>Front-end Developer</span>
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='bg-orange-600 rounded-lg md:p-5 p-3'>
                        <Image src='/images/3.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>React Developer</span>
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='bg-yellow-600 rounded-lg md:p-5 p-3'>
                        <Image src='/images/4.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>Web-Developer</span>
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='bg-sky-600 rounded-lg md:p-5 p-3'>
                        <Image src='/images/5.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>Front-end Developer</span>
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='bg-cyan-600 rounded-lg md:p-5 p-3'>
                        <Image src='/images/1.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>React Developer</span>
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='bg-green-600 rounded-lg md:p-5 p-3'>
                        <Image src='/images/2.jpg' width={500} height={500} alt='Image 1' className='w-full md:h-[260px] rounded-lg hover:scale-105 duration-500' />
                        <h3 className='mt-10 flex flex-col text-center text-white'>
                            <span className='md:text-2xl text-xl font-semibold'>MD.Nijam Hossen</span>
                            <span className='md:text-xl text-base font-medium'>Web-Developer</span>
                        </h3>   
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >

    );
};

export default Aboutpage;