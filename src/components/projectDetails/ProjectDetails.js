import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProjectDetails = () => {
  const product = useLoaderData();
  const {
    title,
    img,
    img2,
    img3,
    gitClient,
    gitServer,
    liveSite,
    description,
    frontEnd,
    backEnd,
  } = product || {};

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-[#020617] px-6 py-12 text-slate-100 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Project Overview</p>
          <h1 className="mt-4 text-4xl font-semibold">{title}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            A detailed look at the work, tools, and architecture behind this project.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {[img, img2, img3].map((image, index) => (
            <PhotoProvider key={index}>
              <PhotoView src={image}>
                <div data-aos="zoom-in" className="overflow-hidden rounded-3xl border border-slate-800/80 bg-[#020617]/70">
                  <img src={image} alt={`${title} screenshot ${index + 1}`} className="h-64 w-full object-cover object-top" />
                </div>
              </PhotoView>
            </PhotoProvider>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/80 bg-[#020617]/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Project Summary</h2>
            <p className="mt-4 leading-8 text-slate-300">{description}</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800/80 bg-[#020617]/70 p-8">
              <h3 className="text-xl font-semibold text-white">Front-end Stack</h3>
              <p className="mt-4 text-slate-300">{frontEnd}</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-[#020617]/70 p-8">
              <h3 className="text-xl font-semibold text-white">Back-end Stack</h3>
              <p className="mt-4 text-slate-300">{backEnd}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {gitClient && (
            <a href={gitClient} target="_blank" rel="noreferrer" className="btn btn-primary btn-wide">
              {gitServer ? "GitHub Client" : "GitHub Repo"} <FaGithub className="ml-2" />
            </a>
          )}
          {gitServer && (
            <a href={gitServer} target="_blank" rel="noreferrer" className="btn btn-outline btn-wide">
              GitHub Server <FaGithub className="ml-2" />
            </a>
          )}
          {liveSite && (
            <a href={liveSite} target="_blank" rel="noreferrer" className="btn btn-outline btn-wide">
              Live Demo <FaLink className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
