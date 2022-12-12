import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import ContactMe from "../../ContactMe/ContactMe/ContactMe";
import Header from "../../Header/Header/Header";
import Projects from "../../Projects/Projects/Projects";
import Blogs from "../../Blogs/Blogs/Blogs";
import About from "../../About/About/About";


const Home=({dark,setDark})=>{
   

    return(
        <div>
         <Navbar dark={dark}
         setDark={setDark}
        
         ></Navbar>
          <Header  dark={dark}
         setDark={setDark}></Header>
         <About  dark={dark}
         setDark={setDark} 
         ></About>
          <Projects  dark={dark}
         setDark={setDark}></Projects>

         <Blogs  dark={dark}
         setDark={setDark}></Blogs>
            <ContactMe  dark={dark}
         setDark={setDark}></ContactMe>
        </div>
    )
}
export default Home