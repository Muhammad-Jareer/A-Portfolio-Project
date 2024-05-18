import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



  const Cursor = ({ cursor }) => {

    const cursorRef = useRef(null);
  
    useGSAP(() => {
        gsap.to(cursorRef.current, {
          x: cursor.x,
          y: cursor.y,
          duration: 1,
          ease: "back.out",
          opacity: 1,
        })
     
    }, [cursor]);

  return (
    <div >
      <div id='hide' ref={cursorRef} className='bg-gradient-to-r from-purple-500 to-orange-500 rounded-full w-[40px] h-[40px] absolute z-20 top-0 left-0'></div>
    </div>
  );
};

export default Cursor;


