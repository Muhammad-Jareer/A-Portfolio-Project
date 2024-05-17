import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Contact = () => {

  const formRef = useRef()
  const contactRef = useRef()
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.from(contactRef.current, {
      duration: 1.2,
      opacity: 0,
      x: -30,
      y: 20,
      scale: 1.2,
      ease: 'ease.out',
      stagger: 0.1,
    }, "start")
  })

  useGSAP(() => {
    timeline.from(formRef.current, {
      duration: 1.2,
      opacity: 0,
      y: -20,
      x: 30,
      scale: 1.2,
      ease: 'ease.out',
      stagger: 0.1,
    }, "start")
  })

  const onSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "99dec107-cd2e-4209-8d02-0b752d7b4255");
  
      // Log the form data for inspection
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      const object = Object.fromEntries(formData.entries());
      const json = JSON.stringify(object);
  
      // Log the JSON payload
      console.log("JSON Payload:", json);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: json
      });
  
      const res = await response.json();
  
      if (response.ok) {
        if (res.success) {
          console.log("Success", res);
        } else {
          console.error("Error:", res.message || "Form submission failed");
        }
      } else {
        console.error("HTTP Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };
  
  


  return (
    <section>
        <h1 className="text-5xl font-bold text-center py-10 bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text">
          Get in Touch
        </h1>
      <div className="w-full flex justify-center">
        <div className="flex justify-center w-4/5">
          <div className="grid grid-cols-2 gap-24 justify-evenly items-center">

            <div ref={contactRef} className="min-h-[65vh] min-w-[40vw] p-8">
              <h1 className="text-4xl inline-block py-2 font-bold bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text">Lets Talk</h1>
              <p className="py-4 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error blanditiis, facere incidunt obcaecati tempora explicabo cumque repudi vero et!</p>
              <div className="flex items-center gap-6 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
              <p className="text-xl ">jareerameer@gmail.com</p>
              </div>
              <div className="flex items-center gap-6 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
              <p className="text-xl ">+92 315 5513089</p>
              </div>
              <div className="flex items-center gap-6 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path></svg>
              <p className="text-xl ">Haripur, Pakistan</p>
              </div>
            </div>

            <div className="min-h-[65vh] min-w-[40vw] p-8">
              <div ref={formRef}  className="lg:w-full my-8 lg:mt-0">
              <form onSubmit={onSubmit} className="flex flex-col">
                <label className="mb-2" htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Enter your name" className="p-3 mb-8 bg-gray-800 rounded border border-gray-700 text-white" required />

                <label className="mb-2" htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" className="p-3 mb-8 bg-gray-800 rounded border border-gray-700 text-white" required />

                <label className="mb-2" htmlFor="message">Write your message here</label>
                <textarea id="message" name="message" placeholder="Enter your message" className="p-3 mb-8 bg-gray-800 rounded border border-gray-700 text-white h-52" required></textarea>

                <button type="submit" className="w-[200px] text-center p-3 mt-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:to-orange-600">
                  Submit now
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
