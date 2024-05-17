import React, { useRef } from "react";
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Services = () => {

  const servicesRef = useRef()
  const timeline = gsap.timeline()

  useGSAP(() => {
    timeline.from(servicesRef.current, {
      duration: 1.2,
      opacity: 0,
      x: -30,
      y: 30,
      scale: 1.2,
      ease: 'ease.out',
      stagger: 0.1,
    }, "start")
  })
  

  return (
    <section className="h-4/5">
      <h1 className="text-center text-5xl font-bold py-10 bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text">My Services</h1>
      <div className="w-full flex justify-center">
        <div ref={servicesRef} className="grid h-auto grid-cols-3 justify-center w-4/5 gap-12">

          
              <div className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-200 to-purple-100 hover:text-black">
                <h1 className="text-2xl font-bold">01</h1>
                <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-700 text-transparent bg-clip-text">MERN Stack Development</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <NavLink className="inline" to="https://campus.w3schools.com/products/learn-web-design" target="_blank">Read more</NavLink>
              </div>
              <div className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-300 to-purple-100 hover:text-black">
                <h1 className="text-2xl font-bold">02</h1>
                <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-400 text-transparent bg-clip-text">GSAP Animations</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <NavLink className="inline" to="https://campus.w3schools.com/products/learn-web-design" target="_blank">Read more</NavLink>
              </div>
              <div className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-300 to-purple-100 hover:text-black">
                <h1 className="text-2xl font-bold">03</h1>
                <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-400 text-transparent bg-clip-text">Machine Learning</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <NavLink className="inline" to="https://campus.w3schools.com/products/learn-web-design" target="_blank">Read more</NavLink>
              </div>
           

         
              <div className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-300 to-purple-100 hover:text-black">
                <h1 className="text-2xl font-bold">04</h1>
                <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-400 text-transparent bg-clip-text">Development with Django</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <NavLink className="inline" to="https://campus.w3schools.com/products/learn-web-design" target="_blank">Read more</NavLink>
              </div>
              <div className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-300 to-purple-100 hover:text-black">
                <h1 className="text-2xl font-bold">05</h1>
                <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-400 text-transparent bg-clip-text">Dashboard Applications</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <NavLink className="inline" to="https://campus.w3schools.com/products/learn-web-design" target="_blank">Read more</NavLink>
              </div>
              <div className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-300 to-purple-100 hover:text-black">
                <h1 className="text-2xl font-bold">06</h1>
                <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-400 text-transparent bg-clip-text">Stemlit Applications</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <NavLink className="inline" to="https://campus.w3schools.com/products/learn-web-design" target="_blank">Read more</NavLink>
              </div>
          
      
              
        </div>
      </div>
    </section>
  );
};

export default Services;
