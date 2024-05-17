import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/profile_img.jpeg";
import "../About/About.css";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const AboutMe = () => {
  const profileRef = useRef()
  const aboutRef = useRef()
  const socialRef = useRef()
  const skillsRef = useRef()
  const experienceRef = useRef()
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
    <>
      <h1 className="text-center text-5xl font-bold pt-10 bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text">About me</h1>
      <div className="about">
        <div className="wrapper">
          <div ref={profileRef} className="image flex flex-col justify-center mt-2 gap-6">
            <img src={profileImg} alt="" />

            <div ref={socialRef} className="flex my-4 ">
              <NavLink
              to="https://www.facebook.com/muhammad.jareer.58"
              target="blank"
              >
              <svg style={{height: "40px"}} className="mx-3 rounded-lg hover:scale-125 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(39,146,255,1)"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
              </NavLink>

              <NavLink
              to="https://www.instagram.com/m_jareer1/"
              target="blank"
              >
                <svg style={{height: "40px"}} className="mx-3 rounded-lg hover:scale-125 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,92,92,1)"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
              </NavLink>

              <NavLink
              to="https://github.com/Muhammad-Jareer?tab=repositories"
              target="blank"
              >
              <svg style={{height: "40px"}} className="mx-3 rounded-lg hover:scale-125 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
              </NavLink>

              <NavLink
              to="https://www.linkedin.com/in/muhammad-jareer-amiri-0210bb298/"
              target="blank"
              >
              <svg style={{height: "40px"}} className="mx-3 rounded-lg hover:scale-125 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(59,141,223,1)"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
              </NavLink>          
          </div>

            <div className="flex flex-col gap-6">
              <button className="py-2 rounded-2xl border-white border-2 transition-colors hover:border-blue-500">
                My Resume
              </button>
            </div>
          </div>
          <div ref={aboutRef} className="text">
            <p className="text-xl">
            Final-year Software Engineering student specializing in Front-end Development, proficient in HTML, CSS, Tailwind CSS, JavaScript, React, and with a strong focus on GSAP. <br /> <br /> With GSAP, I create captivating animations and seamless transitions, enhancing user experiences. My portfolio showcases my expertise, with GSAP animations driving interactivity. <br /> <br /> From compelling landing pages to dynamic websites, GSAP plays a pivotal role in creating visually stunning effects. I'm committed to leveraging GSAP and other cutting-edge technologies to push the boundaries of web development and create immersive digital experiences.
            </p>
            <h1 className="text-center py-4 text-3xl font-bold w-full text-blue-500 mt-3">
              Skills
            </h1>
            <div className="flex mt-8">
              <div className="flex flex-col items-start w-1/6">
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
              <div ref={skillsRef} className="flex flex-col items-start  level w-4/5">
                <hr className="pb-4 mb-6 w-3/4 rounded-full" />
                <hr className="pb-4 mb-6 w-4/5 rounded-full" />
                <hr className="pb-4 mb-6 w-5/6 rounded-full" />
                <hr className="pb-4 mb-6 w-3/4 rounded-full" />
                <hr className="pb-4 mb-6 w-full rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={experienceRef} className="w-full flex justify-center">
        <div className="w-4/5 flex justify-between ">
          <div className="xperience flex flex-col items-center gap-4 w-1/4 h-5">
            <h1 className="text-6xl">10+</h1>
            <h2 className="text-2xl ">Years of Experience</h2>
          </div>
          <div className="xperience flex flex-col items-center gap-4 w-1/4 h-5">
            <h1 className="text-6xl">15+</h1>
            <h3 className="text-2xl">Projects Completed</h3>
          </div>
          <div className="xperience flex flex-col items-center gap-4 w-1/4 h-5">
            <h1 className="text-6xl">10+</h1>
            <h3 className="text-2xl">Satisfied Clients</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;