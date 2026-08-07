import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import myself from "../../me.png";
import Particles from "reactparticles.js";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import Skills from "../skills/Skills";
import AboutME from "../Aboutme/AboutME";
import Experience from "../Experience/Experience";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <section className="hero relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
        <div className="glow-orb -top-40 -left-32 h-96 w-96 bg-blue-500" />
        <div
          className="glow-orb top-1/3 -right-40 h-[28rem] w-[28rem] bg-cyan-400"
          style={{ animationDelay: "-7s" }}
        />
        <Particles
          className="absolute inset-0 opacity-60"
          id="config"
          config="particleconfig.json"
          style={{ width: "100%", height: "100%" }}
        />

        <div className="hero-content relative z-10 flex-col lg:flex-row-reverse gap-12 px-6 lg:px-16 py-14">
          <div className="w-full lg:w-1/2">
            <div className="card rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl p-8">
              <div className="avatar mx-auto lg:mx-0">
                <div className="w-64 h-64 rounded-[2rem] overflow-hidden border-4 border-primary shadow-xl">
                  <img src={myself} alt="Gourab Roy" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <p className="text-sm uppercase tracking-[0.32em] text-primary">Full-Stack Developer</p>
                <h1 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                  Hi, I’m Gourab Roy.
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I build polished, scalable web applications with 3+ years of software development experience, thoughtful front-end design, strong back-end architecture, and measurable business impact.
                </p>
                <div className="mt-6 space-y-3 text-slate-300">
                  <p>• Responsive interfaces with React, Next.js, and Tailwind CSS</p>
                  <p>• MSSQL-backed data models and performance-minded queries</p>
                  <p>• REST APIs and MVC web apps with Express.js and ASP.NET</p>
                  <p>• Deployment on IIS and cloud platforms (Vercel, Render, Firebase)</p>
                  <p>• AI-augmented development using Claude for smarter delivery</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="https://drive.google.com/file/d/1ODYk4zJhGb_TKEqGPyxe-bEL3IeOmXh6/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-wide"
                  >
                    Download Resume
                  </a>
                  <a href="/#projectsID" className="btn btn-outline btn-wide">
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex rounded-full border border-primary px-4 py-2 text-sm text-primary shadow-sm backdrop-blur-sm bg-slate-900/70">
              Building production-ready web experiences.
            </div>
            <div className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1800,
                  'Next.js Developer',
                  1800,
                  'React Specialist',
                  1800,
                  'UX-Focused Problem Solver',
                  1800,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I transform ambitious product ideas into elegant digital solutions with clean code, modern architecture, and performance-first implementation.
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/gourab-roy-369ab5179/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline text-primary"
              >
                <BsLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/gourabBD"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline text-primary"
              >
                <BsGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutME />
      <Experience />
      <Skills />
      <Projects />
      <div className="flex justify-center">
        <ContactMe />
      </div>
    </div>
  );
};

export default Hero;
