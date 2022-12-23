import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from"../../asssets/pf.jpg"

import { FaLinkedin } from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import "./Header.css"
import { DarkMood } from "../../../DarkMoodLightMood/DArkMoodLightMood";
import ColorKoro from "../../Home/Home/ColorKoro/ColorKoro";
import { ColorChose } from "../../../DarkMood/ColorChose/ColorChose";


const Header=()=>{
  const{dark}=useContext(DarkMood)
  const {color}=useContext(ColorChose)
  

    return(
        <div className={`${dark?"bg-slate-800":"bg-slate-100"} lg:px-2`}>
           

           {/* Headerr */}
           <div className={` header w-full flex lg:flex-row  flex-col lg:justify-center justify-aevenly items-center h-[100vh]`}>
            <div>
                <img  className="lg:w-[420px] lg:h-[300px] md:rounded-full border-8 object-fill" src={img}/>
               
            </div>
          
           <div className="header-info lg:w-full my-3 w-full lg:px-2 ">
           <h1 className={`${dark?"text-white":"text-black"} font-bold lg:text-6xl text-3xl`}>Mohammad <span className="text-blue-700"> Ibrahim</span></h1>
           <h2 className={`text-xl font-semibold ${color ?`text-${color}`:"text-black"} lg:my-3`}>
          I am  <span  className="text-blue-700"style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' a Full stack Developer', ' a Front-End developer', ' a Web Developer']}
            loop={10}
            cursor
            cursorStyle='||'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span>
       
           
           

           
           </h2>
           {/* <p className={`text-xl ${dark?"text-white":"text-black"} my-2 `}>I have experience of building web site with Javascript || React.JS ||
           Node.JS and some other cool libraries and frameworks</p> */}
             <div className="flex flex-row items-center my-3 justify-start">
                <span className="text-blue-500 text-2xl font-bold"><a href="/"><FaFacebookF></FaFacebookF></a></span>
                <span className="mx-5 text-blue-500 text-2xl font-bold"><a href="/"><FaTwitter></FaTwitter></a></span>
                <span className="bg-white   text-blue-500 text-xl font-bold"><a href="/"><FaLinkedin></FaLinkedin></a></span>
             </div>
             <div className="flex lg:flex-row flex-col my-3 ">
                <div><button className=" lg:mr-3 px-3 py-2 bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border-2 text-white rounded-full">
                <a href="https://drive.google.com/file/d/1e2cUa9EsBIgdD9yMxIdmV0KbSgEz-Ziz/view?usp=share_link" target="_blank" >Download Resume</a></button></div>

                <div><button className="px-3 py-2  bg-white text-blue-500  border-blue-700 border-2 rounded-full hover:bg-blue-700 hover:text-white">
                  <a href="#contact">Contact Me</a></button></div>
             </div>

           </div>
           </div>
          
           
        </div>
    )
}
export default Header