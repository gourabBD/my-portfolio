import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectsCards = ({ product }) => {
  const { description, gitServer, gitClient, liveSite, img, title, _id } = product;

  return (
    <article
      data-aos="flip-right"
      className="group overflow-hidden rounded-[2rem] border border-slate-800/80 bg-[#020617]/90 shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:border-primary"
    >
      <PhotoProvider>
        <PhotoView src={img}>
          <div className="relative overflow-hidden">
            <img
              src={img}
              alt={title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 top-0 flex justify-between p-4">
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/90">
                Featured
              </span>
              <span className="rounded-full bg-primary/95 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white shadow-sm">
                Case study
              </span>
            </div>
          </div>
        </PhotoView>
      </PhotoProvider>

      <div className="space-y-5 p-6 text-slate-200">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">Project</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
        </div>

        <p className="min-h-[4.5rem] text-sm leading-7 text-slate-400">
          {description ? `${description.slice(0, 120)}...` : "Clean, modern project with a focus on UX and architecture."}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to={`/projects/${_id}`} className="btn btn-sm btn-primary">
            Details
          </Link>
          {liveSite && (
            <a href={liveSite} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
              Live <FaLink className="ml-2" />
            </a>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {gitClient && (
            <a href={gitClient} target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 text-center text-sm text-slate-300 transition hover:border-primary hover:text-white">
              {gitServer ? "Client Repo" : "GitHub Repo"}
              <FaGithub className="mx-auto mt-2 text-base" />
            </a>
          )}
          {gitServer && (
            <a href={gitServer} target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 text-center text-sm text-slate-300 transition hover:border-primary hover:text-white">
              Server Repo
              <FaGithub className="mx-auto mt-2 text-base" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCards;
