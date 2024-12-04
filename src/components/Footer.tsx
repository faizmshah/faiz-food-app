import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container mt-20 pt-10 px-4 md:px-20 pb-10 bg-green-800 text-white'>
        <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y4">
                <h2 className="text-xl font-bold">
                    About Us
                </h2>
                <p className="leading-[1.8]">We offer exceptional dining with a professional kitchen, quick delivery, a curated wine list, and free WiFi. Every service is designed for your comfort, quality, and satisfaction.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold">
                    The Restuarant
                </h2>

                <ul className="space-y-2">
                    <li>About Us</li>
                    <li>Chefs</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <div className="flex gap-8 text-accent text-2xl pt-16">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer