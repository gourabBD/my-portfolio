import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectsCards = ({ product }) => {
  const { description, gitServer, gitClient, liveSite, img, title } = product;
  return (
    <div
      data-aos="flip-right"
      className="card w-auto bg-base-100 shadow-xl border border-primary"
    >
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{title}</h2>
        <p>{description?.slice(0, 105)}...</p>
        <div className="card-actions justify-end my-5">
          <a href={gitClient} className="btn btn-xs btn-outline">
            GitHub Client <FaGithub className="mx-2"></FaGithub>
          </a>
          <a href={gitServer} className="btn btn-xs btn-outline">
            GitHub Server <FaGithub className="mx-2"></FaGithub>
          </a>
          <a href={liveSite} className="btn btn-xs btn-outline">
            Live Site <FaLink className="mx-2"></FaLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
