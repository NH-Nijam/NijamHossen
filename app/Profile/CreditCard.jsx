import React from 'react';
import coin from '../../public/images/Coin.png' 
import tik from '../../public/images/tik.png' 
import Image from 'next/image';

const CreditCard = ({subT, title, shape, subL, subL2, bgColor, credit}) => {
    return (
        <div className='p-5 shadow-md relative '>
            <Image src={coin} width={30} height={30}/>
            <div className='mt-6'>
                <h4 className='text-xs'>{subT}</h4>
                <h1 className='text-[30px] font-bold'>{title}</h1>
                <div className='mt-5 flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <Image src={tik} width={18} height={18}/>
                        <h2 className='text-[14px] '>{subL}</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={tik} width={18} height={18}/>
                        <h2 className='text-[14px] '>{subL2}</h2>
                    </div>
                </div>
                <button className={`mt-[50px] px-[25px] py-2 border w-full rounded duration-700 relative bottom-0 ${bgColor}`}>Choose This Plan</button>
            </div>
            <div className='absolute w-[80px] -top-7 left-36 '>
                <Image src={shape} width={100} height={200}  alt='hello' className='z-0' />
                <h2 className=' text-white font-bold z-40 relative -top-[70px] left-[40%]'>{credit}</h2>
            </div>
        </div>
    );
};

export default CreditCard;