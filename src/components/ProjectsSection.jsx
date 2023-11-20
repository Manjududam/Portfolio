import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import { ProjectsData } from "./Data/ProjectsData";
import { Projects } from "./Navbar/SidebardataList/Projects";
import "../CSS/Portfolio.css";

const ProjectsSection = (props) => {
  return (
    <>
      <div className="project-section">
        <h1
          id="projects"
          className="text-white font-semibold text-2xl mt-4 px-3 lg:ml-[20rem] "
        >
          Projects
        </h1>
        <br></br>
        {/* style={styles.tinyLogo} */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl::grid-cols-3 gap-3 lg:ml-[20rem]">
          {Projects.map((item, i) => {
            return (
             <a
                href={item.path}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  key={i}
                  className="card flex gap-3 mb-2 w-[95%] h-[6rem] mx-auto rounded-lg overflow-ellipsis p-3 bg-[#1c1b23]"
                >
                  <div className="icon p-2 flex items-center h-20 w-20 justify-center rounded-lg text-xs">
                    {item.bgIcon}
                  </div>
                  {/* <img
                  src=""
                  alt=""
                  id="bgColor"
                  className={`icon p-2 flex items-center h-20 w-20 justify-center rounded-lg text-xs bg-white`}
                /> */}

                  <div className="card-title text-white text-lg">
                    {item.title}
                    <div className="description flex text-gray-500">
                      <p className="card-description text-xs lg:text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
             </a>
            
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;

