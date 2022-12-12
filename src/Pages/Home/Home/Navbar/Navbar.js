import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { FiMoon } from "react-icons/fi";
import {FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";



const Navbar =({dark,setDark}) => {

    const[toggle,setToggle]=useState(true)
    // const[dark,setDark]=useState(true)
    return (

        <div className="w-full">
            <div className={`navbar relative  ${dark?"bg-black ":"bg-white lg:drop-shadow-lg"}  text-blue-500 px-5 py-5  flex lg:flex-col flex-row justify-between lg:items-center lg:h-[100vh] h-[100px]`}>
                <a className="btn btn-ghost normal-case text-3xl">Ibrahim</a>
               <div className="lg:hidden block">
               {
                toggle?<button className="text-3xl font-semibold " onClick={()=>setToggle(false)}><HiMenuAlt3></HiMenuAlt3></button>: 
                <button className="text-3xl font-semibold " onClick={()=>setToggle(true)}><RxCross1></RxCross1></button>
                
               }

                </div>
                <ul className=" h-full lg:flex lg:flex-col hidden   justify-between lg:items-baseline  ">
                {dark? <button onClick={()=>setDark(!dark)} className="text-3xl"><FiSun></FiSun></button>: <button  onClick={()=>setDark(!dark)}  className="text-3xl"><FiMoon></FiMoon> </button>}
                    <li><a href="/">Home </a></li>
                    <li><Link to="/about">About </Link></li>
                   
                    <li><Link to="/projects">Projects </Link></li>
                    <li><Link to="/blogs">blogs </Link></li>

                    <li><a href="https://drive.google.com/file/d/1e2cUa9EsBIgdD9yMxIdmV0KbSgEz-Ziz/view?usp=share_link"target="_blank">Resume </a></li>
                    <li><Link to="/contact">Contact </Link></li>
                </ul>
            </div>
            {dark&&<hr className="my-3" style={{color:"blue"}}></hr>}



            {
                toggle?
                <ul className="menu bg-blue-500 text-white w-56 absolute right-[100%] z-50">
                       {dark? <button onClick={()=>setDark(!dark)}><FiSun></FiSun></button>: <button  onClick={()=>setDark(!dark)}><FiMoon></FiMoon> </button>}
               <li><a href="/">Home </a></li>
                    <li  onClick={()=>setToggle(!toggle)} ><a href="/">About </a></li>
                    <li   onClick={()=>setToggle(!toggle)}><a href="#projects">Projects </a></li>
                    <li   onClick={()=>setToggle(!toggle)}><a href="https://drive.google.com/file/d/1e2cUa9EsBIgdD9yMxIdmV0KbSgEz-Ziz/view?usp=share_link"target="_blank">Resume </a></li>
                    <li  onClick={()=>setToggle(!toggle)}> <a href="#contact">Contact </a></li>
                
            </ul> :
             <ul className="menu bg-base-100 text-white w-full absolute right-0 z-50 px-4">
         {dark? <button onClick={()=>setDark(!dark)}><FiSun className="text-2xl"></FiSun></button>: <button  onClick={()=>setDark(!dark)}><FiMoon className="text-2xl"></FiMoon> </button>}
             <li onClick={()=>setToggle(!toggle)}><Link to="/">Home </Link></li>
                  <li  onClick={()=>setToggle(!toggle)}><Link to="/about">About </Link></li>
                  <li  onClick={()=>setToggle(!toggle)}><Link to="/blogs">Blogs </Link></li>
                  <li  onClick={()=>setToggle(!toggle)}><Link to="/projects">Projects </Link></li>
                  <li  onClick={()=>setToggle(!toggle)}><Link to="/">Resume </Link></li>
                  <li  onClick={()=>setToggle(!toggle)}><Link to="/contact">Contact </Link></li>
             
          </ul>
            }
            
        </div>

    )
}
export default Navbar