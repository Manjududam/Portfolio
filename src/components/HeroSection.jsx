import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import * as AiIcons from "react-icons/ai";
import ProjectsSection from "./ProjectsSection";
import OverviewSection from "./OverviewSection";
import profile from "./Data/png/ProfilePic.jpg";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <>
      <section className=" bg-[#14131a] overflow-auto bg-fixed h-screen">
      {/* flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10 */}
        <div className="hero flex items-center rounded-lg mt-[5rem] overflow-hidden h-40 md:ml-0 lg:ml-[18rem] bg-no-repeat bg-cover bg-blur">
          <div className="flex justify-center  md:rounded-ld z-50 overflow-hidden sm:px-10  md:px-5 py-5 bg-blur backdrop-filter backdrop-blur-md w-screen gap-2 md:gap-10">
            <div className="">
              <img
                src={profile}
                alt="profile pic"
                // loading="lazy"
                width="120px"
                height="120px"
                // decoding="async"
                // data-nimg="1"
                className="profile object-cover border-4 lg:ml-3 border-white rounded-full shadow-md text-white"
                // style={{ color: "transparent" }}
                
              />
            </div>
            <div className="flex md:flex-1 flex-col justify-center gap-4">
              <div className="flex justify-between items-center gap-5 ">
                <div className="text-3xl flex flex-col font-bold text-highlight text-white">
                  Manju Dudam
                  <div className="text-sm font-thin flex gap-2 justify-between items-center">
                  @manju_dudam
                  {/* <span>manjududam84@gmail.com</span> */}
                    <a
                      className="block sm:hidden"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/rowdy_rocky29/?next=%2F"
                    >
                      <button className="h-max bg-[#0e0e11] w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2">
                      <AiIcons.AiOutlineInstagram size={25} color="#b5179e"/>
                      </button>
                   </a>
                  
                  </div>
                </div>
                
                <a
                  className="hidden sm:block lg:block "
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/rowdy_rocky29/?next=%2F"
                >
                  <button className="h-max w-max flex gap-2 bg-[#1c1b23] justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary  font-semibold text-xs py-2 px-4 lg:mr-10">
                  <AiIcons.AiOutlineInstagram size={25} color="#b5179e"/>
                    <span className="hidden sm:block text-white text-xs">
                      Follow me on Instagram
                    </span>
                  </button>
               </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-section">
          <ProjectsSection/>
        </div>
        <div className="over-view">
          <OverviewSection/>
        </div>
        <div className="footer-section">
          <Footer/>
        </div>
      
      </section>
    </>
  );
};

export default HeroSection;
