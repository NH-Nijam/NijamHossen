'use client'
import Image from 'next/image';
import React from 'react';

const SkillCard = ({icons,name}) => {
    return (
        <div data-aos="fade-right" className='w-full  md:h-[100px] h-15 rounded hover:rounded-2xl shadow-md shadow-orange-600 hover:scale-105 duration-500 px-4 flex justify-between items-center'>
            <div className='w-[80px] h-[80px]  rounded-full flex justify-center items-center'>
                <Image src={icons} width={500} height={500} alt='This is logo' className='md:w-[50px] md:h-[50px] w-10 h-10 rounded-full'/>
            </div>
            <h2 className='md:text-xl text-lg font-bold text-end'>{name}</h2>
        </div>
    );
};

export default SkillCard;