import React, { useRef } from "react";
import myWork from '../../assets/mywork_data';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Projects = () => {

    const projectsRef = useRef()
    const headingRef = useRef()
    const timeline = gsap.timeline()
  
    useGSAP(() => {
      timeline.from(projectsRef.current, {
        duration: 1.2,
        opacity: 0,
        skewY: 30,
        skewX: -50,
        ease: 'ease.out',
        stagger: 0.1,
      }, "start")
    })

    useGSAP(() => {
        timeline.from(headingRef.current, {
          y: -100,
          opacity: 0,
          duration: 1.6,
          stagger: 0.6,
          ease: 'ease.out',
        }, "start")
      })

    return (
        <div className="h-screen w-full max-w-7xl mx-auto">
            <h1 ref={headingRef} className='text-5xl font-bold text-center py-28 bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text'>My Latest Work</h1>
            <div className='flex justify-center items-center px-6 lg:px-0'>
            <div ref={projectsRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center'>
                {myWork.map((work, index) => {
                    return <img className='transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer' key={index} src={work.w_img} alt="" />
                })}
            </div>
            </div>
        </div>
    );
}

export default Projects;
