import React, { useState } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import Sidebar from "./Sidebar";
import Portfolio from "../Portfolio";
import mini from "../Data/png/ProfilePic.jpg";
import ContactModel from "../ContactModel";
// import Contact from "../Contact";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);

  const setNavState = () => {
    setNav(!nav);
  };
  const toggleModel = () =>{
    setModal(!modal)
    console.log("hello");
  }
 

  return (
    <>
      <div id="top-most" className="h-screen top-most overflow-auto w-screen scroll-smooth">
        {/*------------------ Navbar Starts-------------------------- */}
        <nav className="flex justify-between items-center h-20 w-screen fixed top-0 z-[9999] bg-[#14131a]">
          <div className="profile flex items-center justify-between gap-4 mx-4">
            <div className="mini- hidden md:block">
              <a href="/" target="_blank" rel="noreferrer">
                <img
                  src={mini}
                  alt="profile pic"
                  loading="lazy"
                  width="30px"
                  height="30px"
                  decoding="async"
                  data-nimg="1"
                  className="profile object-cover border-1 border-white rounded-full shadow-md text-white"
                  // style={{ color: "transparent" }}
                />
              </a>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="profile-name text-2xl text-opacity-20 bg-gradient-to-b text-white hidden sm:block font-bold"
            >
              Manju Dudam
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="profile-name text-2xl text-opacity-20 bg-gradient-to-b text-white sm:hidden font-bold mx-3"
            >
              MD
            </a>
          </div>
          <div className="contact flex items-center gap-3 ">
            <div>

              <button onClick={toggleModel}
                className="flex items-center gap-3 px-2 bg-green-400 rounded-md p-1 text-white md:mx-3"
                >
                Contact Me
                <span>
                  <IoIcons.IoMdContact size={25} />
                </span>
              </button>
              {/* ------------------ Modal starts here -------------------------------------*/}
              {modal && (
               <ContactModel toggleModel={toggleModel}/>
              )}
                </div>
            
            <div
              onClick={setNavState}
              className="md:mr-3  lg:hidden z-10 text-zinc-700 cursor-pointer hover:text-gray-600"
            >
              {nav ? (
                <FaIcons.FaBars size={23} />
              ) : (
                <FaIcons.FaBars size={23} />
              )}
              {nav && (
                <div className="menu-navbar absolute top-0 left-0 p-5 sm:p-1 md:p-1 w-full sm:w-[300px] md:rounded-md h-screen overflow-y-auto scroll-smooth bg-gradient-to-b from-[#1c1b23] to-gray-800 text-white ">
                  <Sidebar />
                </div>
              )}
            </div>
            <span></span>
          </div>
        </nav>
        {/*-------------------- SideBar Starts----------------------------- */}
        <aside className="hidden lg:flex fixed w-screen sm:w-[280px] z-30 top-20">
          <div className="toggle flex flex-col h-[90vh] w-full">
            <div className="flex relative flex-col  bg-[#1c1b23] h-[40rem] z-40 rounded-lg  top-0 left-5 w-full overflow-y-auto scroll-smooth pb-20 text-gray-500">
              <Sidebar />
            </div>
          </div>
        </aside>
        <main className="overflow-hidden top-14">
          <Portfolio />
        </main>
      </div>
    </>
  );
};

export default Navbar;
