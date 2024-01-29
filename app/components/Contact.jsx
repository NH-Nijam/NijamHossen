'use client'
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import contactImg from '../img/apple-606761_1280.jpg'

import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import Link from 'next/link';

const ContactPage = () => {
    const [message, setMessage] =useState([])
    
    const formHandler = event =>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const number =form.number.value;
        const email =form.email.value;
        const subject =form.subject.value;
        const message =form.message.value;
        const user ={name, number, email, subject, message}
        form.reset()
        setMessage(user)
        console.log(user);
    } 
    return (
        <div className='my-20 '>
            <h1 data-aos="fade-down" className='text-3xl font-semibold text-center decoration-wavy underline tracking-[3px] '>Contact Me</h1>
            <div className='mt-20 flex lg:flex-row flex-col gap-10  justify-center items-center'>
                {/* 1st part start  */}
                <div data-aos="fade-right" className=' lg:w-2/5  w-full md:p-10 p-4 shadow-lg shadow-orange-600 rounded-b-xl'>
                    <div className='w-full md:h-[300px] rounded-lg'>
                        <Image src={contactImg} width={500} height={500} alt='image not found' className='hover:scale-105 duration-500 rounded-lg w-full h-full' />
                    </div>
                    <div className='md:mt-10 mt-5'>
                        <h2 className='md:text-3xl text-2xl  font-semibold'>MD Nijam Hossen</h2>
                        <h3 className='md:text-xl text-base font-medium'>Front-end Developer</h3>
                        <p className='md:mt-5 mt-2 text-justify opacity-80'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-2xl opacity-60'>CONNECT WITH ME</h2>
                        <div className='mt-10 flex 2xl:gap-10 md:gap-7 gap-4 justify-center lg:justify-between '>
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
                    </div>
                </div>
                {/* 1st part end  */}

                {/* 2nd part start  */}
                <div data-aos="fade-left" className={`w-full md:p-10 p-3 shadow-lg shadow-orange-600 rounded-b-xl `}>
                    <form onSubmit={formHandler} className='flex flex-col gap-5'>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name'  placeholder='Type Name' className='border-2 border-gray-500 p-2 rounded-lg focus:border-green-600 focus:border-2 w-full focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="number">Number</label>
                                <input type="number" name='number'  placeholder='Number' className='border-2 border-gray-500 p-2 rounded-lg focus:border-green-600 focus:border-2 w-full focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" required name='email'  placeholder='Type email ' className='border-2 border-gray-500 p-2 rounded-lg focus:border-green-600 focus:border-2 focus:outline-none' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name='subject'  placeholder='Type Sub.. ' className='border-2 border-gray-500 p-2 rounded-lg focus:border-green-600 focus:border-2 focus:outline-none' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="Message">Message</label>
                            <textarea name="message"  placeholder='Type mess ..' cols="30" rows="10" className='border-2 border-gray-500 p-2 rounded-lg focus:border-green-600 focus:border-2 focus:outline-none'/>
                        </div>
                        <button type='submit' className='bg-orange-600 rounded-md p-3 text-xl font-semibold text-white'>Send Message</button>
                    </form>
                </div>
                {/* 2nd part end  */}
            </div>
        </div>
    );
};

export default ContactPage;