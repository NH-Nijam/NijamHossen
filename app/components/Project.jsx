import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({img, title, description, techno}) => {
    return (
        <div className=' 2xl:h-[400px] rounded-lg group relative overflow-hidden shadow-lg  shadow-orange-600 hover:scale-105 duration-500 hover:shadow-none'>
            <Image src={img} width={500} height={500} alt='project' className='w-full h-full absolute rounded-lg'/>
            <div className='relative w-full h-full bg-orange-600/90 rounded-lg -top-[100%] text-white group-hover:top-[0%]  duration-500 p-10 flex flex-col justify-center '>
                <h2 className='text-white font-bold text-3xl'>Priject Name: {title}.</h2>
                <p className='text-white underline mt-10 '>Overview</p>
                <p className=' text-white '>{description}</p>
                <h2 className='mt-10 text-xl font-semibold'>Used Technology: {techno}</h2>
                <div className='grid md:grid-cols-2 gap-10 mt-5 text-black'>
                    <Link href='#'><button className='bg-white text-light py-2 text-2xl font-bold rounded-lg w-full h-full hover:bg-gray-900 hover:text-white hover:scale-105 duration-500'>Live</button></Link>
                    <Link href='#'><button className='bg-white text-light py-2 text-2xl font-bold rounded-lg w-full h-full hover:bg-gray-900 hover:text-white hover:scale-105 duration-500'>Repository</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;