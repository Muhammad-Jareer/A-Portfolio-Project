import React, { useRef } from "react";
import myWork from '../../assets/mywork_data';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Projects = () => {

    const projectsRef = useRef()
    const timeline = gsap.timeline()
  
    useGSAP(() => {
      timeline.from(projectsRef.current, {
        duration: 1.2,
        opacity: 0,
        x: 30,
        y: -30,
        scale: 1.2,
        ease: 'ease.out',
        stagger: 0.1,
      }, "start")
    })

    return (
        <div>
            <h1 className='text-5xl font-bold text-center py-10 bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text'>My Latest Work</h1>
            <div className='flex justify-center'>
            <div ref={projectsRef} className='grid grid-cols-3 gap-20 justify-center'>
                {myWork.map((work, index) => {
                    return <img className='transition duration-900 ease-in-out transform hover:scale-105 hover:cursor-pointer' key={index} src={work.w_img} alt="" />
                })}
            </div>
            </div>
        </div>
    );
}

export default Projects;
