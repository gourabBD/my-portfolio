import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    title: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    title: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Express.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    title: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Claude AI",
    img: "/claude-icon.svg",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="my-16 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-100">Technology stack and tools I rely on.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            I use the best tools for the task and always prefer clean, maintainable solutions that accelerate development and improve product quality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div
                key={skill?.title}
                data-aos="zoom-in"
                className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-6 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-primary/30 bg-[#020617] p-4">
                  {skill?.img ? (
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-300">
                      {skill.title}
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-slate-100">{skill.title}</p>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-12 text-center text-slate-400 shadow-lg">
              Loading skills portfolio...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
