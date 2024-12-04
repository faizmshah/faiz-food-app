import React from 'react';
import Dash from './Dash';
import Image from 'next/image';
import MenuCard from './MenuCard';

import { headerItems } from '@/constants/constant';

const MenuData = [{
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},

{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},


{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},


{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},

{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},

{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},

{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},

{
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuma sahimi, 1x noodles",
    price: "$29.50"
},


]



const Menu = () => {
  return (
    <section id={headerItems.menu.page}>
<div className='container pt-40 px-20'>
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">Our <span className='text-accent'>Menu</span></h2>
            <p className="text-gray-700">We offer exceptional dining with a professional kitchen, quick delivery, a curated wine list, and free WiFi. Every service is designed for your comfort, quality, and satisfaction.</p>
            <div className="w-fit mx-auto">
            <Dash />
            </div>
        </div>

        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 w-fit mx-auto">
            <li className="bg-accent text-white p-1">Appetizers</li>
            <li>Breakfast</li>
            <li>Salads</li>
            <li>Meat & Fish</li>
            <li>Soup</li>
            <li>Desert</li>
            <li>Drinks</li>
        </ul>

        <div className="grid lg:grid-cols-[35%_1fr] gap-10 pt-10">
            <div className="w-fit mx-auto">
                <Image className='w-[100%] max-w-[400px] h-auto' src="/menu_left.png" width={500} height={500} alt='dish' />
            </div>
            <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>{MenuData.map((item, index) => <MenuCard key={index} img={item.img} title={item.title} desc={item.desc} price={item.price} />)}</div>
        </div>
    </div>
    </section>
  )
}

export default Menu