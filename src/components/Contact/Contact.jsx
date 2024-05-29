import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 justify-evenly items-center">

            <div ref={contactRef} className="p-8">
              <h1 className="text-4xl inline-block py-2 font-bold bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text">Lets Talk</h1>
              <p className="py-4 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error blanditiis, facere incidunt obcaecati tempora explicabo cumque repudi vero et!</p>
              <div className="flex items-center gap-6 py-4">
                <CiMail size={35} />
              <p className="text-xl ">Hamasadil086@gmail.com</p>
              </div>
              <div className="flex items-center gap-6 py-4">
                <BsFillTelephoneFill size={35} />
              <p className="text-xl ">+92 3101871330</p>
              </div>
              <div className="flex items-center gap-6 py-4">
                <FaLocationDot size={35} />
              <p className="text-xl ">Haripur, Pakistan</p>
              </div>
            </div>

            <div className=" p-8">
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
