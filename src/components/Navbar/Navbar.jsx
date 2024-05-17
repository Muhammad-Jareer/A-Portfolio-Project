import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Cursor from "../customCursor/cursor";

const Navbar = () => {
  const logoRef = useRef(null)
  const menuItemsRef = useRef(null)
  const buttonRef = useRef(null)
  const timeline = gsap.timeline()

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useGSAP(() => {
      const handleMouseMove = (e) => {
        setCursor({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [cursor]);


  useGSAP(() => {
    timeline.from([logoRef.current,  buttonRef.current], {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      ease: 'ease.out',
    }, "start")
  })
  useGSAP(() => {
    timeline.from(menuItemsRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      ease: 'ease.out',
    }, "start")
  })

  

  return (
    <div>
      <Cursor cursor={cursor}/>
      <nav className="flex-wrap flex justify-evenly box-border py-6 items-center sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row bg-[#030617]">
        <div>
        </div>
        <div ref={logoRef}>
          <Link to="/" className="text-4xl bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text font-bold">
            Jerry <span className="text-white">Dev</span>
          </Link>
        </div>
        <div ref={menuItemsRef} className="px-6 mx-6 py-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <NavLink
            to="/"
            className={({isActive}) => 
            `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
            } 
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            About me
          </NavLink>
          <NavLink
            to="/services"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            My Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            Contact me
          </NavLink>
        </div>
        <div ref={buttonRef}>
          <NavLink 
            to="/contact"
            className="text-white text-xl py-2 px-3 mx-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500  hover:from-purple-600 hover:to-orange-600 hover:border-blue-500 border-2 border-white  transition-all duration-50"
          >
            Connect With Me
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
