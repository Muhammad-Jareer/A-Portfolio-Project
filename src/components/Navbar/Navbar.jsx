import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Cursor from "../customCursor/cursor";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"

const Navbar = () => {
  const logoRef = useRef(null)
  const menuItemsRef = useRef(null)
  const buttonRef = useRef(null)
  const timeline = gsap.timeline()

  const [cursor, setCursor] = useState({ x: -50, y: 0 });

  const [menu, setMenu] = useState(false)

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
      <Cursor cursor={cursor} />
      <nav className="w-full flex px-6 justify-between lg:justify-evenly items-center box-border py-6 bg-[#030617] fixed top-0 z-20">
  
        <div ref={logoRef}>
          <Link to="/" className="text-4xl bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text font-bold">
            Jerry <span className="text-white">Dev</span>
          </Link>
        </div>


        <div ref={menuItemsRef} className="hidden lg:block px-6 mx-6 py-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
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

        <div
        onClick={() => setMenu(!menu)}
        className="lg:hidden cursor-pointer hover:scale-110 text-white scale-105 duration-300 z-20"
        >
        {menu ? <FaTimes size={35} /> : <FaBarsStaggered size={35} />}
        </div>

        {menu && (
          <div className="fixed w-full h-screen flex flex-col justify-center items-center bg-black text-white left-0 top-0">
            <ul className="flex flex-col gap-24 text-5xl justify-center items-center">
            <NavLink
            onClick={() => setMenu(!menu)}
            to="/"
            className={({isActive}) => 
            `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
            } 
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setMenu(!menu)}
            to="/about"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            About me
          </NavLink>
          <NavLink
            onClick={() => setMenu(!menu)}
            to="/services"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => setMenu(!menu)}
            to="/projects"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            My Projects
          </NavLink>
          <NavLink
            onClick={() => setMenu(!menu)}
            to="/contact"
            className={({isActive}) => 
              `px-3 border-2 ${isActive ? "text-blue-500" : "bg-black-700"} border-transparent transition-colors duration-300 hover:text-blue-500`
              } 
          >
            Contact me
          </NavLink>
            </ul>
          </div>
        )}
        <div className="hidden " ref={buttonRef}>
          <NavLink 
            to="/contact"
            className="hidden text-white text-xl py-2 px-3 mx-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500  hover:from-purple-600 hover:to-orange-600 hover:border-blue-500 border-2 border-white  transition-all duration-50"
          >
            Connect With Me
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
