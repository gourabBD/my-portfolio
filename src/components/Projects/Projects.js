import React, { useEffect, useState } from "react";
import ProjectsCards from "./ProjectsCards";
import AOS from "aos";
import "aos/dist/aos.css";
import projectsData from "./projectData";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    setProjects(projectsData);
  }, []);

  const displayedProjects = projects;

  return (
    <section id="projectsID" className="my-16 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-800/70 bg-[#020617]/90 p-10 shadow-2xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div data-aos="fade-right" className="space-y-5">
            <p className="text-sm uppercase tracking-[0.32em] text-primary">Featured Projects</p>
            <h2 className="text-4xl font-semibold text-slate-100">Selected work with strong design and technical depth.</h2>
            <p className="max-w-2xl text-slate-400 leading-8">
              These highlighted projects demonstrate professional delivery, elegant UI, and thoughtful performance-focused implementation.
            </p>
          </div>

          <div data-aos="fade-left" className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 text-slate-300 shadow-inner">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">What you'll see</p>
            <ul className="mt-6 space-y-3 text-base leading-7">
              <li>• Clear product storytelling and strong project structure</li>
              <li>• Responsive interfaces backed by robust React architecture</li>
              <li>• Live links and repository access for each project</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((pro) => <ProjectsCards key={pro._id} product={pro} />)
          ) : (
            <div className="col-span-full rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-12 text-center text-slate-400 shadow-lg">
              Loading project highlights...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
