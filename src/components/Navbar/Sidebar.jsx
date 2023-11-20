import React from "react";
// import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { TopData } from "./SidebardataList/TopData";
import { SocailsData } from "./SidebardataList/SocailsData";
// import { Projects } from "./SidebardataList/Projects";

export default function Sidebar() {
  return (
    <>
      {/* -----------------------------Sidebar Data------------------------ */}
      <div className="nav-sidebar scroll-smooth">
        <nav className="space-y-5 sm:mx-3 md:mx-0 ">
          <div className="text-zinc-700 top-8 sm:top-3 mx-3 mb-2 fixed right-0 sm:left-[15rem] float-right z-10 gap-1 cursor-pointer lg:hidden hover:text-gray-400">
            <FaIcons.FaTimes size={25} />
          </div>
          {/* ------Items Container------ */}
          <ul className="nav-menu-list-items my-3  ">
            <li className="m-4">
              {TopData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a 
                      className="ml-4 flex items-center bg-transparent gap-4 p-4 transform transition-transform duration-300 hover:-translate-y-1 text-2xl"
                      href={item.path} target="_blank" rel="noreferrer"
                    >
                      {item.icons}
                      <span className="text-gray-500 text-[16px]">
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </li>
            {/*---------------- Projects Section Data-------------- */}
            {/* <li className="m-4">
              <a
                href="/" target="_blank" rel="noreferrer"
                className="text-2xl items-center hover:text-white hover:underline "
              >
                Projects
              </a>
              {Projects.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a
                      className="ml-4 flex  items-center bg-transparent gap-4 p-4  transform transition-transform duration-300 hover:-translate-y-1 text-2xl"
                      href={item.path} target="_blank" rel="noreferrer"
                    >
                      {item.icons}{" "}
                      <span className="text-gray-500 text-[16px]">
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </li> */}
             {/*---------------- SocialsApp Section Data-------------- */}
            <li className="m-4">
              <a
                href="/" target="_blank" rel="noreferrer"
                className="text-2xl items-center hover:text-white hover:underline "
              >
                Socails
              </a>
              {SocailsData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a
                      className="ml-4 flex items-center bg-transparent gap-4 p-4 transform transition-transform duration-300 hover:-translate-y-1 text-2xl "
                      href={item.path} target="_blank" rel="noreferrer"
                    >
                      {item.icons}{" "}
                      <span className="text-gray-500 text-[16px]">
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </li>
          </ul>
        </nav>
        <span></span>
      </div>
    </>
  );
}
