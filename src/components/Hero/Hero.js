import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import myself from "../../me.png";
import Particles from "reactparticles.js";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import Skills from "../skills/Skills";
import AboutME from "../Aboutme/AboutME";
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <div  className="overflow-x-hidden ">
      <div className="hero min-h-screen bg-base-200 ">
        <div data-aos="fade-up" className="hero-content h-full flex flex-col lg:flex-row w-full">
          <Particles
            className="border border-primary "
            id="config"
            config="particleconfig.json"
            style={{
              width: "100%",
              height: "100%",

              backgroundColor: "black",
              opacity: "0.5",
            }}
          />
          <div className="avatar  ">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="50"
              className="w-auto rounded-full  "
            >
              <img  src={myself} />
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-left"
          >
           <TypeAnimation 
      sequence={[
        `I'm Gourab Roy.`, // Types 'One'
        1000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
      
      
        
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
      className="text-5xl  font-bold w-auto"
    />
            {/* <h1 className="text-5xl w-auto font-bold"></h1> */}
          
    <p className="py-6">I am a front-end developer. I like to craft solid and scalable
              front-end products with great user experiences.</p>
            
           

            <div className="w-full flex justify-left my-5">
              <a
                className="mx-5"
                href="https://www.linkedin.com/in/gourab-roy-369ab5179/"
              >
                <BsLinkedin className="text-2xl"></BsLinkedin>
              </a>
              <a href="https://github.com/gourabBD">
                <BsGithub className="text-2xl"></BsGithub>
              </a>
            </div>
            <div className="w-full flex justify-left ">
              <a href="https://drive.google.com/file/d/1ODYk4zJhGb_TKEqGPyxe-bEL3IeOmXh6/view?usp=sharing">
                <button className="btn btn-primary my-5">My Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutME></AboutME>
      <Skills></Skills>
      <Projects></Projects>
      <div className="flex justify-center">
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Hero;
