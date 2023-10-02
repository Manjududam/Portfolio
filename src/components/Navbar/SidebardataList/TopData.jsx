import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";
import * as GrIcons from "react-icons/gr";


export const TopData = [
  {
    title: "Home",
    path: "/home",
    icons: <AiIcons.AiFillHome color="#6b21a8" />,
    cName: "nav-text",
  },
  {
    title: "Trending",
    path: "projects",
    icons: <IoIcons.IoMdTrendingUp color="white" />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "https://github.com/Manjududam",
    icons: <GrIcons.GrProjects color="#6b21a8" />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icons: <GrIcons.GrResume color="#44caf2" />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icons: <FcIcons.FcAbout color="#6b21a8" />,
    cName: "nav-text",
  },
];
