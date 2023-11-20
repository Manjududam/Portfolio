import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import * as PiIcons from "react-icons/pi";
import * as BiIcons from "react-icons/bi";
import * as LuIcons from "react-icons/lu";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";


export const Projects =  [
    {
        title: "NewsApp",
        path: 'https://github.com/Manjududam/ClassBased',
        icons: <BiIcons.BiNews color="white" />,
        // icons: <BiIcons.BiNews color='#9fcfc3'/>,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <GiIcons.GiNewspaper size={30} color='#9fcfc3' style={{backgroundColor:"", height:"4rem", width:"4rem"}}  />,
        description: 'React.JS, React Hooks, HTML, CSS, BootStrap, JavaScript.',
        // commit:"<123>",
        
    },
    {
        title: "TextApp",
        path: 'https://github.com/Manjududam/TextApp',
        icons: <AiIcons.AiFillFileText color="white" />,
        // icons: <AiIcons.AiFillFileText color='#f07d9f' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <LuIcons.LuTextCursor size={30} color='#f07d9f' style={{backgroundColor:"", height:"3rem", width:"3rem"}} />,
        description: 'React.JS, React Hooks, HTML, CSS,Tailwind CSS, BootStrap, JavaScript, Dark Mode.',
    },
    {
        title: "Portfolio",
        path: 'https://github.com/Manjududam/Portfolio',
        icons: <BsIcons.BsPersonLinesFill color="white"  />,
        // icons: <BsIcons.BsPersonLinesFill color='#13d5f2' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <SiIcons.SiPersonio size={30} color='#2b2a2a' style={{backgroundColor:"", height:"3rem", width:"3rem"}}/>,
        // bgIcon: <BsIcons.BsPersonLinesFill size={10} color='white' style={{backgroundColor:"grey", height:"5rem", width:"6rem", borderRadius:'8px'}}/>,
        description: 'React.JS,React Icons, HTML, CSS, Tailwind CSS, JavaScript, Responsive Web-Page.',
    },
    {
        title: "Todo",
        path: 'https://github.com/Manjududam/Todo-App',
        icons: <LuIcons.LuListTodo />,
        // icons: <LuIcons.LuListTodo color='#dae3ac' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <SiIcons.SiTodoist size={30} color='#dae3ac' style={{backgroundColor:"", height:"3rem", width:"3rem" }}/>,
        // bgIcon: <LuIcons.LuListTodo size={10} color='white' style={{backgroundColor:"grey", height:"5rem", width:"6rem", borderRadius:'8px'}}/>,
        description: 'React.JS, Tailwind CSS HTML, CSS, BootStrap, JavaScript, Dynamic Web-Page.',
    },
    {
        title: "Microsoft-Clone",
        path: 'https://github.com/Manjududam/Microsoft-Clone',
        icons: <FaIcons.FaMicrosoft color="white" />,
        // icons: <FaIcons.FaMicrosoft color='#d91835' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <IoIcons.IoLogoMicrosoft size={30} color='#d15b4b' style={{backgroundColor:"", height:"3rem", width:"3rem" }}/>,
        // bgIcon: <FaIcons.FaMicrosoft size={10} color='white' style={{backgroundColor:"#ef4252", height:"5rem", width:"6rem", borderRadius:'8px'}}/>,
        description: 'HTML, CSS, Tailwind CSS, Responsive Web-Page.',
    },
    {
        title: "Counter",
        path: 'https://github.com/Manjududam/Counter-React-Based',
        icons: <PiIcons.PiArrowsCounterClockwiseFill color="white" />,
        // icons: <PiIcons.PiArrowsCounterClockwiseFill color='white' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <BsIcons.BsArrowCounterclockwise size={30} color='white' style={{backgroundColor:"", height:"3rem", width:"3rem" }}/>,
        // bgIcon: <PiIcons.PiArrowsCounterClockwiseFill size={10} color='white' style={{backgroundColor:"grey", height:"5rem", width:"6rem", borderRadius:'8px'}}/>,
        description: 'React.JS, React Hooks, HTML, CSS, BootStrap, Tailwind CSS, JavaScript and Dynamic Web-Page',
    },
    {
        title: "Facebook-Clone",
        path: 'https://github.com/Manjududam/Facebook-Clone',
        // icons: <FaIcons.FaFacebookF color="white" />,
        icons: <FaIcons.FaFacebookF color='#1d4ed8' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <AiIcons.AiOutlineFacebook size={30} color='#3a55f0' style={{backgroundColor:"", height:"3rem", width:"3rem" }}/>,
        // bgIcon: <FaIcons.FaFacebookF size={5} color='white' style={{backgroundColor:"#3980e6", height:"5rem", width:"6rem", borderRadius:'8px'}}/>,
        description: 'HTML, CSS, Tailwind CSS, Responsive Web-Page.',
    },
    {
        title: "Navbar's",
        path: 'https://github.com/Manjududam/aside-navbar',
        icons: <TbIcons.TbLayoutNavbarCollapse color="white"  />,
        // icons: <TbIcons.TbLayoutNavbarCollapse color='#a1ed7e' />,
        cName:'nav-text',
        bgClass:'bg-icon',
        bgIcon: <TbIcons.TbLayoutNavbarFilled size={30} color='#a1ed7e' style={{backgroundColor:"", height:"3rem", width:"3rem" }}/>,
        // bgIcon: <TbIcons.TbLayoutNavbarCollapse size={10} color='white' style={{backgroundColor:"grey", height:"5rem", width:"6rem", borderRadius:'8px'}}/>,
        description: 'React.JS, React Hooks, HTML, CSS, JavaScript',
    },
    // {
    //     title: "Microsoft-Clone",
    //     path: '/microsoft-clone',
    //     icons: <FaIcons.FaFacebookF/>,
    //     cName:'nav-text'
    // },
]
