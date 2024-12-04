import React from 'react';
import Image from 'next/image';
import { headerItems } from '@/constants/constant';


const Hero = () => {
  return (
    <section id={headerItems.home.page}>
      <div className='relative min-h-screen'>
        <Image className='lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-[-50px] -z-20' src="/hero.png" width={1000} height={600} alt='hero bg'/>
        

        <div className='container h-[100vh - 120px)] grid items-center'>
           <div className="space-y-4 md:bg-none bg-[#ffffff98] -z-10 w-fit p-4 px-4 md:px-20 py-10 mt-36">
            <p className="uppercase font-medium">Wide options of choices</p>
            <h2 className='text-4xl md:text-black sm:text-6xl font-bold'>Delicious <span className='text-accent'>Food</span></h2>
            <p className=' md:text-gray-700 text-[14px] sm:text-[16px]'> Delicious food color, aroma and taste. <br />
             What are you waiting for?
            </p>

            <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text[16px]  sm:bg-accent'>View more</button>
           </div>
        </div> 
    </div>
    </section>
  )
};

export default Hero;