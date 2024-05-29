import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const servicesRef = useRef();
  const headingRef = useRef()
  const timeline = gsap.timeline();

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Offering professional web development services, including responsive design, web programming, and database management, to create dynamic and user-friendly websites."
    },
    {
      id: 2,
      title: "GSAP Animations",
      description: "Specializing in creating smooth and engaging animations with GSAP to enhance user experience and bring websites to life."
    },
    {
      id: 3,
      title: "Machine Learning",
      description: "Providing advanced machine learning solutions to analyze data, create predictive models, and drive intelligent decision-making."
    },
    {
      id: 4,
      title: "Development with Django",
      description: "Offering comprehensive development services with Django, including robust backend solutions, API integrations, and scalable web applications."
    },
    {
      id: 5,
      title: "Streamlit Applications",
      description: "Crafting intuitive and interactive Streamlit applications tailored to your specific needs, enabling seamless data visualization and user engagement."
    },
    {
      id: 5,
      title: "Wordpress Websites",
      description: "Delivering professional Wordpress websites that are visually stunning, user-friendly, and easily customizable to meet your business goals."
    }

  ]

  useGSAP(() => {
    timeline.from(
      servicesRef.current,
      {
        duration: 1.2,
        opacity: 0,
        skewX: -30,
        y: 30,
        scale: 1.2,
        ease: "ease.out",
        stagger: 0.1,
      },
      "start"
    );
  });
  useGSAP(() => {
    timeline.from(
      headingRef.current,
      {
        duration: 1.2,
        opacity: 0,
        skewX: -30,
        y: 30,
        scale: 1.2,
        ease: "ease.out",
        stagger: 0.1,
      },
      "start"
    );
  });

  return (
    <div className="w-full lg:px-40 mx-auto h-screen">
        <h1 ref={headingRef} className="pt-28 pb-8 text-center text-6xl bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">Services</h1>
        <div className="flex justify-center items-center">

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-12 lg:px-0">
                {services.map(({id, title, description}) => (
                          <div key={id} className="flex flex-col gap-5 bg-transparent border-2 border-white rounded-xl px-6 py-4 transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-blue-200 to-purple-100 hover:text-black">
                          <h1 className="text-2xl font-bold">0{id}</h1>
                              <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-orange-700 to-purple-700 text-transparent bg-clip-text">
                                {title}
                              </h1>
                              <p className="text-xl">
                                {description}
                              </p>
                              <NavLink
                                className="inline"
                                to="https://campus.w3schools.com/products/learn-web-design"
                                target="_blank"
                              >
                                Read more
                              </NavLink>
                          </div> 
                ))}
          </div>
        </div>
    </div>    
  );
};

export default Services;

