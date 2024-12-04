import React from 'react'
import Dash from './Dash';
import Image from 'next/image';
import { headerItems } from '@/constants/constant';

const Feature = () => {
  return (
    <section id={headerItems.about.page}>
        <div className='container pt-30 px-4 md:px-20'>
        <h2 className="text-6xl font-bold">Our</h2>
        <h2 className="text-6xl font-bold pt-2">
            Featured <span className='text-accent'>Food</span>
        </h2>
        
        <p className='max-w-[550px] pt-10 text-gray-700'>
        Discover our featured dish, a culinary masterpiece that combines the freshest ingredients with flavors that will tantalize your taste buds. Each bite is a celebration of tradition and innovation, crafted with care to deliver an unforgettable dining experience.

        </p>
        <Dash />

        <div className="grid md:grid-cols-[1fr_37%_1fr] gap-16 mt-10">
            <div className="w-fit mx-auto self-end">
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' src="/grid__1.png" width ={300} height={600} alt="grid image" />
                <div className="space-y-4">
                    <Dash />
                    <h2 className="font-medium text-xl"> Vibrant Veggie Delight</h2>
                    <p className="text-gray-700 text-[14px] xl:text-[16px]">A colorful medley of fresh vegetables and perfectly cooked pasta, topped with delicate herbs and edible flowers. This dish is a celebration of health and taste, designed to bring freshness to your table.</p>
                </div>
            </div>


            <div className="w-fit mx-auto">
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' src="/grid__2.png" width ={500} height={900} alt="grid image" />
                <div className="space-y-4">
                    <Dash />
                    <h2 className="font-medium text-xl"> Authentic Butter Chicken</h2>
                    <p className="text-gray-700 text-[14px] xl:text-[16px]">Rich, creamy, and bursting with flavors, our butter chicken is a culinary masterpiece. Made with tender chicken pieces simmered in a spiced tomato-based curry, it's perfect for savoring with naan or rice.</p>
                </div>
            </div>


            <div className="w-fit mx-auto self-end">
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' src="/grid__3.png" width ={300} height={600} alt="grid image" />
                <div className="space-y-4">
                    <Dash />
                    <h2 className="font-medium text-xl"> Hearty Meatball Stew</h2>
                    <p className="text-gray-700 text-[14px] xl:text-[16px]">Comfort food at its best! This savory meatball stew, loaded with vegetables and aromatic herbs, warms the soul with every spoonful. Perfect for cozy evenings and hearty appetites.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Feature