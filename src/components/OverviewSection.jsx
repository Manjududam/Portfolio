import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import html from "./Data/png/HTML.png";
import css from "./Data/png/CSS.png";
import js from "./Data/png/JavaScript.png";
import react from "./Data/png/React JS.png";
import tailwind from "./Data/png/Tailwind CSS.png";
import bootstrap from "./Data/png/BootStrap.png";
import node from "./Data/png/Node JS.png";
import express from "./Data/png/Express JS.png";
import sql from "./Data/png/SQL DB.png";
import mongo from "./Data/png/Mongo DB.png";
import python from "./Data/png/Python.png";
// import { OverviewData } from "./Data/OverviewData";

const OverviewSection = () => {
  return (
    <>
      <div className="lg:ml-[20rem]">
      <section className="">
        <div className="text-3xl font-bold mx-3 p-3 mt-5 text-white">
          Frontend
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5 mt-3">
          <div className="flex flex-col gap-3 mx-4 ">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="HTML"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={html}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400 ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[85%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">HTML</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="CSS"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={css}
                    className=" object-contain p-[5px] text-white"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[72%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">CSS 3</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="JavaScript"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={js}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px] w-[75%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">Java Script</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="react js"
                    style={{
                      position: "absolute",
                      width: "100%%", 
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={react}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px] w-[70%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">React JS</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="tailwind"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={tailwind}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px] w-[80%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">Tailwind CSS</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="bootstrap"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={bootstrap}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px] w-[80%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">BootStrap</div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="text-3xl font-bold mx-3 p-3 mt-5 text-white">
          Backend
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5 mt-3">
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md  border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer" >
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="node"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={node}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[70%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">Node JS</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="express js"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={express}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[50%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">Express JS</div>
            </div>
          </div>
          </div>
      </section>
      <section className="">
        <div className="text-3xl font-bold mx-3 p-3 mt-5 text-white">
          DataBase 
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5 mt-3">
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="sql"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={sql}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[80%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">SQL DB</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="mongo"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={mongo}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[80%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">Mongo DB</div>
            </div>
          </div>
          </div>
      </section>
      <section className="">
        <div className="text-3xl font-bold mx-3 p-3 mt-5 text-white">
          Programming Language 
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5 mt-3">
          <div className="flex flex-col gap-3 mx-4">
          <a className="flex flex-col rounded-md border-2 border-b-stone-50" href="/"  target="_blank" rel="noreferrer">
              <div className="relative h-[100%] w-[100%] flex items-center flex-col justify-between aspect-video rounded-lg overflow-hidden">
                  <img
                    alt="python"
                    style={{
                      position: "absolute",
                      width: "100%%",
                      height:"100%",
                      color: "transparent ",
                    }}
                    src={python}
                    className=" object-contain p-[5px]"
                  />
                
              </div>
                <div className="progress-bar flex border-t border-gray-400  ">
                  <div className=" bg-green-300 rounded-md h-[8px]  w-[70%]">
                  </div>
                </div>
            </a>
            <div className="flex items-center justify-center gap-2 px-2">
              <div className="text-white font-bold ">Python</div>
            </div>
          </div>
          </div>
      </section>
      </div>
    </>
  );
};

export default OverviewSection;
