import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header/Header";
import Navbar from "../Pages/Home/Home/Navbar/Navbar";
const Main=()=>{

return(
    <div className="bg-white ">


    <div className="grid lg:grid-cols-3  grid-cols-1">

<div className=" w-full"><Navbar></Navbar></div>




 <div className="col-span-2 w-full h-auto  "><Outlet></Outlet></div>
        
    </div>
    </div>
)


}
export default Main