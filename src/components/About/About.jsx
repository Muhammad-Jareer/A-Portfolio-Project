import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/profile.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const AboutMe = () => {
  const profileRef = useRef();
  const aboutRef = useRef();
  const socialRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const headingRef = useRef();
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.from(profileRef.current, {
      scale: 1.5,
      duration: 1.2,
      opacity: 0,
      skewX: -50,
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
      y: 30,
      opacity: 0,
      duration: .4,
      stagger: 0.6,
      ease: 'ease.out',
    })
  })
  useGSAP(() => {
    timeline.from(headingRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      ease: 'ease.out',
    }, "start")
  })
  useGSAP(() => {
    timeline.from(skillsRef.current, {
      x: -300,
      opacity: 0,
      duration: 1.5,
      stagger: 0.6,
      ease: 'ease.out',
    }, "start")
  })
  useGSAP(() => {
    timeline.from(experienceRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.6,
      ease: 'ease.out',
    }, "start")
  })

  return (
    <div className="w-full max-w-7xl mx-auto h-screen ">
      <h1 ref={headingRef} className="py-28 text-center text-6xl bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 w-full">

        <div ref={profileRef} className="flex flex-col gap-16 items-center justify-center">
          <div className="">
              <img className="h-[250px] w-[250px] rounded-full" src={profileImg} alt="" />
          </div>
          <div ref={socialRef} className="flex gap-8">
            <a
            href="https://wa.me/923155513089"
            >
              <FaWhatsapp
                className="text-green-500 rounded-lg"
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
          <a 
          download
          href='/resume.pdf'
          className="border-2 border-white px-8 py-2 rounded-xl hover:bg-blue-500">
          My Resume
          </a>
        </div>

        <div ref={aboutRef} className="px-6 md:px-0">
          <p className="text-xl">
            Final-year Software Engineering student specializing in Front-end
            Development, proficient in HTML, CSS, Tailwind CSS, JavaScript,
            React, and with a strong focus on GSAP. <br /> <br /> With GSAP, I
            create captivating animations and seamless transitions, enhancing
            user experiences. My portfolio showcases my expertise, with GSAP
            animations driving interactivity
          </p>
          <h1 className="hidden sm:block text-center py-4 text-3xl font-bold w-full text-blue-500 mt-3">
              Skills
            </h1>
            <div ref={skillsRef} className="flex mt-8">
              <div className="hidden sm:flex flex-col items-start w-1/6">
                <p className="pb-4 transition-transform duration-300 ease-in-out transform hover:scale-150">
                  HTML & CSS
                </p>

                <p className="pb-4 transition-transform duration-300 ease-in-out transform hover:scale-150">
                  Tailwind
                </p>
                <p className="pb-4 transition-transform duration-300 ease-in-out transform hover:scale-150">
                  JavaScript
                </p>
                <p className="pb-4 transition-transform duration-300 ease-in-out transform hover:scale-150">
                  React
                </p>
                <p className="pb-4 transition-transform duration-300 ease-in-out transform hover:scale-150">
                  GSAP
                </p>
              </div>
                <div ref={experienceRef} className="hidden sm:flex flex-col items-start w-4/5">
                  <hr className="pb-4 mb-6 w-3/4 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500" />
                  <hr className="pb-4 mb-6 w-4/5 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500" />
                  <hr className="pb-4 mb-6 w-5/6 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500" />
                  <hr className="pb-4 mb-6 w-3/4 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500" />
                  <hr className="pb-4 mb-6 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500" />
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
