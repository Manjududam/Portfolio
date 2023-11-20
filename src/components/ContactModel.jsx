import { React } from "react";
import { SocailsData } from "./Navbar/SidebardataList/SocailsData";
import * as FaIcons from "react-icons/fa";

const ContactModel = (props) => {
    // const Submit = () =>{
    //     return(props.toggleModel)
        // let Ele = document.getElementById("contact");
        // let input = document.getElementsByClassName("input-details");
        // Ele.removeChild(input);
    
    // }
  return (
    <>
      {/* <div id="contact"> */}
        <div id="contact" className="modal-container bg-opacity-50 backdrop-blur-md mx-4 bg-[#1c1b23] border-2 rounded-md border-white mt-6 h-[22rem] w-[22rem] sm:w-[30rem] sm:mx-4rem ml-[-11rem] sm:ml-[-19rem] md:ml-[-23rem] md:w-[30rem] lg:ml-[-32rem] lg:w-[40rem] absolute z-50">
          <div className="modal-head">
            <div className="flex items-center justify-between mx-3">
              <h2 className="text-white text-center p-1 text-opacity-20 ">Contact Me</h2>
              <div onClick={props.toggleModel} className="cursor-pointer">
                <FaIcons.FaTimes size={25} color="grey" />
              </div>
            </div>
            <hr />
            <hr />
            <div className="input-details flex flex-col items-center justify-center ">
              <div className="gap-5 p-3 flex flex-1 flex-col">
                <div className="name">
                  <label className="text-opacity-20 text-white" htmlFor="name">Name:</label>
                  <input
                    id="name"
                    className="mx-5 outline-0 text-gray-500 border-2 rounded-md w-auto border-black "
                    type="text"
                    name="name"
                  />
                </div>
                <div className="email">
                  <label className="text-opacity-20 text-white" htmlFor="email">Email: </label>
                  <input
                    id="email"
                    className="mx-5 outline-0 text-gray-500 border-2 rounded-md w-auto border-black "
                    type="email"
                    name="email"
                  />
                </div>
                <div className="occupation">
                  <label className="text-opacity-20 text-white" htmlFor="occupation">Occupation: </label>
                  <input
                    id="occupation"
                    className="mx-3 outline-0 text-gray-500 border-2 rounded-md w-auto border-black "
                    type="email"
                    name="email"
                  />
                  <br />
                  <br />
                </div>
                <div className="submit mx-auto">
                  <button
                    onClick={props.toggleModel}
                    className="bg-neutral-700 text-white px-4 py-1 rounded-md border border-black hover:text-lg hover:text-black hover:bg-zinc-300"
                    
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <span className="flex items-center justify-center text-opacity-20 text-white">
              ------------------OR------------------
            </span>
            <div className="socail px-4 py-1 flex items-center gap-3 justify-center mt-3 text-2xl">
              {SocailsData.map((item, index) => {
                return (
                  <div className="socail-apps">
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.icons}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default ContactModel;
