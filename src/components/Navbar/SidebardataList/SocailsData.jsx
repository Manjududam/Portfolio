import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
// import * as GrIcons from "react-icons/gr";


export const SocailsData =  [
    {
        title: "Linkedin",
        path: 'https://www.linkedin.com/in/manju-dudam-43998a23b/',
        icons: <FaIcons.FaLinkedinIn color="#0277b5"/>,
        cName:'nav-text lucide lucide-linkedin'
    },
    {
        title: "Github",
        path: 'https://github.com/Manjududam',
        icons: <AiIcons.AiFillGithub color="#2a9d8f"/>,
        cName:'nav-text lucide lucide-github'
    },
    {
        title: "Naukri",
        path: 'https://www.naukri.com/mnjuser/profile?id=&altresid',
        icons: <SiIcons.SiArchicad color='#3589e8'/>,
        cName:'nav-text'
    },
    {
        title: "G-Mail",
        path: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRspPflgmqWDNwXKpkwkdGLsLGBRTFKqshKPCzkSlGNFzrLZBbsRDbXPVMfwnmwJnnXJrVQ',
        icons: <SiIcons.SiGmail color='#f5bf78'/>,
        cName:'nav-text'
    },
    {
        title: "Instagram",
        path: 'https://www.instagram.com/rowdy_rocky29/?next=%2F',
        icons: <AiIcons.AiOutlineInstagram color="#b5179e"/>,
        cName:'nav-text lucid lucid-instagram',

    },
    {
        title: "Twitter",
        path: '@ManjuDudam63647',
        icons: <RiIcons.RiTwitterXLine color='white'/>,
        cName:'nav-text'
    },
]
