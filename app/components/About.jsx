'use client'
import { Typewriter } from 'react-simple-typewriter'

const Aboutpage = () => {
    const Me =[
        'Web Developer',
        'Front-end Developer',
        'React Developer',
    ]
    return (
       <div className="container h-screen flex items-center justify-between md:px-10 px-3">
            <div className="lg:w-1/2 w-full flex flex-col gap-4">
                <h3 className="text-lg ">Let'<span className="text-orange-600">s</span> create something new </h3>
                <h1 className="flex flex-col  text-5xl gap-4 font-bold">
                    <span>Hi, I'm</span>
                    <span className="text-orange-600">Nijam Hossen</span>
                </h1>
                <h2 className='text-xl'>I am a <span className='text-orange-600'><Typewriter words={Me} loop={true} /></span> </h2>
            </div>
       </div>
            
    );
};

export default Aboutpage;