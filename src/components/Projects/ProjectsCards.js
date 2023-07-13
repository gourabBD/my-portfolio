import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectDetails from './../projectDetails/ProjectDetails';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectsCards = ({ product }) => {
  const { description, gitServer, gitClient, liveSite, img, title, _id } = product;
  return (
    <div
      data-aos="flip-right"
      className="card rounded-none w-auto bg-base-100 shadow-2xl  border border-primary"
    >
     <PhotoProvider>
     <PhotoView src={img}>

      <figure>
        <img style={{height:"15rem"}} className="w-full" src={img} alt="Shoes" />
      </figure>
     </PhotoView>
     </PhotoProvider>
      <div className="card-body text-left">
        <h2 className="card-title">{title}</h2>
        <p>{description?.slice(0, 105)}... </p>
        <Link className="text-blue-600 " to={`/projects/${_id}`}><button className="btn btn-sm btn-primary">Show Details</button></Link>
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
