import React from 'react';
import Dash from './Dash';
import ServiceCard from './ServiceCard';
import { headerItems } from '@/constants/constant';

const servicesData = [
    {
        img: "/services__1.png",
        title: "Professional Kitchen",
        desc: "Our professional kitchen is equipped with state-of-the-art tools and run by skilled chefs who craft every dish with precision, passion, and expertise, ensuring top-notch quality and flavors."
    },

    {
        img: "/services__2.png",
        title: "Delivery",
        desc: "Enjoy our delicious meals from the comfort of your home! With our efficient delivery service, your favorite dishes arrive fresh, hot, and on time—just a click away."
    },

    {
        img: "/services__3.png",
        title: "Wine List",
        desc: "Explore our carefully curated wine list, featuring a selection of fine wines from around the world. Perfectly paired to complement every dish, our wines promise an exquisite dining experience."
    },

    {
        img: "/services__4.png",
        title: "Free WiFi",
        desc: "Stay connected while you dine! Whether you’re catching up on work or sharing your foodie moments, our free WiFi ensures you’re always online."
    }
]

const Services = () => {
  return (
    <section id={headerItems.service.page}>
        <div className='container pt-40 px-20'>
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">Choose Best <span className='text-accent'>Service</span></h2>
            <p className="text-gray-700">We offer exceptional dining with a professional kitchen, quick delivery, a curated wine list, and free WiFi. <br/> Every service is designed for your comfort, quality, and satisfaction.</p>
            <div className="w-fit mx-auto">
            <Dash />
            </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
            {servicesData.map((item, index) => <ServiceCard key={index} img={item.img}
            title={item.title} desc ={item.desc} />)}
        </div>
       
    </div>
    </section>
  )
}

export default Services;