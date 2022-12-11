import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaGithub, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetails = () => {
    const product=useLoaderData()
    const {img,img2,img3,gitClient,gitServer ,liveSite,description,frontEnd,backEnd}=product
    AOS.init();
    AOS.refresh();
    return (
        <div>
            <h1 className='text-2xl'>{product?.title}</h1>
            <div >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
               <img   data-aos="flip-right" className='h-60 w-full border border-primary' src={img} alt="" />
               <img  data-aos="flip-right" className='h-60 w-full border border-primary' src={img2} alt="" />
              
               <img  data-aos="flip-right" className='h-60 w-full border border-primary' src={img3} alt="" />
                </div>
                <div className='flex justify-center p-5'>
                    <p className='lg:w-3/4'>{description}</p>
                    
                </div>
                <div className='flex justify-center p-5'>
                    <p className='lg:w-3/4'><span className='font-bold'>Front-end:</span> <span>{frontEnd}</span></p>
                    
                </div>
                <div className='flex justify-center p-5'>
                    <p className='lg:w-3/4'><span className='font-bold'>Back-end:</span> <span>{backEnd}</span></p>
                    
                    
                </div>
                <div className='flex justify-center p-5 m-5'>
                <div className="card-actions justify-end my-5">
          <a data-aos="zoom-out-right" href={gitClient} className="btn btn-xs btn-outline">
            GitHub Client <FaGithub className="mx-2"></FaGithub>
          </a>
          <a data-aos="zoom-out-right" href={gitServer} className="btn btn-xs btn-outline">
            GitHub Server <FaGithub className="mx-2"></FaGithub>
          </a>
          <a data-aos="zoom-out-right" href={liveSite} className="btn btn-xs btn-outline">
            Live Site <FaLink className="mx-2"></FaLink>
          </a>
        </div>
                    
                </div>
            </div>
           
            
        </div>
    );
};

export default ProjectDetails;