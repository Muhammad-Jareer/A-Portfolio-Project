import React, { useRef } from "react";
import proflie_Img from "../../assets/profile.jpg";
import { Link, NavLink } from "react-router-dom";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Home = () => {

  const profileRef = useRef(null) 
  const aboutRef = useRef()
  const socialRef = useRef()
  const timeline = gsap.timeline()
  
  useGSAP(() => {
    timeline.from(profileRef.current, {
      duration: 1.2,
      opacity: 0,
      x: -300,
      ease: 'power2.out',
      stagger: 0.1,
    }, "start")
  })

  useGSAP(() => {
    timeline.from(aboutRef.current, {
      duration: 1.4,
      opacity: 0,
      x: 300,
      ease: 'power2.out',
      stagger: 0.1,
    }, "start")
  })

  useGSAP(() => {
    timeline.from(socialRef.current, {
      scale: 4.5,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      ease: 'ease.out',
    }, "start")
  })


  return (
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 h-screen w-full mx-auto max-w-7xl py-12">
        <div ref={profileRef} className="flex flex-col justify-start items-center px-6 sm:px-0">
          
          <img
          className="mt-24 mb-12 mx-12"
            src={proflie_Img}
            alt=""
            style={{ width: "360px", borderRadius: "50%", height: "360px" }}
          />
          <h3 className="text-4xl font-bold px-4 bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">Social Links</h3>
          <div ref={socialRef} className="flex my-4 gap-6">
              <a
              href="https://wa.me/923155513089"
              >
                <FaWhatsapp
                  className="text-green-500  rounded-lg"
                  size={40}
                />
              </a>

              <a
              href= 'mailto:jareerameer@gmail.com'
              >
                <CiMail
                  className="text-white rounded-lg"
                  size={40}
                />
              </a>

              <NavLink
              to="https://www.linkedin.com/in/muhammad-jareer-amiri-0210bb298"
              target="blank"
              >
                <FaLinkedin className="text-blue-500" size={40} />
              </NavLink>

              <NavLink
              to="https://github.com/Muhammad-Jareer"
              target="blank"
              >
                <FaGithub size={40} />
              </NavLink>         
          </div>
        </div>

        <div ref={aboutRef} className="flex flex-col justify-center gap-6 w-full px-6 md:px-0 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-6xl font-bold">

              <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">I am Muhammad Jareer,</span> front-end developer
            </h1>
            <p className="my-8 text-2xl">
              I am a front-end Developer from Haripur, Pakistan with a couple of
              months of experience in Freelancing
            </p>
            
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <NavLink 
            to="/contact"
            className="text-white text-2xl text-center py-3 px-4 md:mr-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 hover:border-blue-500 border-2 border-white  transition-all duration-50">
            Connect With Me
            </NavLink>
            <a
            download
            href='/resume.pdf'
            className="text-white text-center text-2xl py-3 px-4 lg:ml-3 rounded-full bg-transparent hover:border-2 hover:border-blue-500 border-2 border-white  transition-all duration-50">
            My Resume
            </a>
          </div>
        </div>
      </div>
  );
};

export default Home;
