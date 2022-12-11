import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  AOS.init();
  AOS.refresh();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-umber.vercel.app/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  
  return (
    <div className="my-5">
      <h1 className="text-2xl">Skills</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-5 my-5">
        {skills?.map((skill) => (
          <div key={skill?._id} className="p-2 ">
            <div className="flex justify-center p-2">
              <img
                data-aos="zoom-out-up"
                className=" lg:h-28 lg:w-28 md:w-28 md:h-28 sm:w-12 sm:h-12 w-12 h-12 rounded-full"
                src={skill?.img}
              />
            </div>
            <p data-aos="zoom-out-up" className="text-center ">
              {skill?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
