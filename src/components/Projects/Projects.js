import React, { useEffect, useState } from 'react';
import ProjectsCards from './ProjectsCards';
import AOS from "aos";
import "aos/dist/aos.css";


const Projects = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        AOS.init();
    AOS.refresh();
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div className='' id='projectsID'>
       <h1 className='text-2xl m-10'>Projects</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-2">
       

     { projects?.map(pro=><ProjectsCards key={pro?.service_id} product={pro}></ProjectsCards>)  }
        </div>
        </div>
    );
};

export default Projects;