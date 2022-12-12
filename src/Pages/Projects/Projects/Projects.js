import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../../asssets/pro-1.jpg"
import pro2 from "../../asssets/pro-2.jpg"
import pro3 from "../../asssets/pro-3.jpg"
const Projects=({dark})=>{

  const projects=[
    {
      img:"https://i.ibb.co/7tsfycM/Screenshot-132.png",
      title:"Multiple Choice Queare",
      details:"One kind of online based programming language quize testing site",
      id:1
    },
    {
      img:"https://i.ibb.co/sy0466F/Screenshot-128.png",
      title:"Alpha Math",
      details:"One kind of online based Mathematics learning site",
      id:2
    },
    {
      img:"https://i.ibb.co/Js3gqhT/Screenshot-123.png",
      title:"Ema jhon",
      details:"One kind of online Ecommerce website",
      id:3
    }
  ]

    return(
      <div className=" px-5 lg:h-full bg-gray-200 ">
        <h1 className="text-blue-700  text-4xl py-5 font-semibold text-center ">Projects</h1>

     
        <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 ${dark?"bg-base-100":"bg-gray-200"} lg:h-full`}>
           
              
         {
         projects.map(project=> <div className={` text-center card lg:w-68 w-full lg:h-[350px] ${dark?"bg-base-100":"bg-white"} shadow-xl`}>
 
  <figure className="w-full"><img  className="w-full"src={project.img} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className={`${dark?"text-white":"text-black"} `}>{project.title}</h2>
    <p>{project.details}</p>
    <div className="card-actions justify-center">
      <button className="px-3 py-2 bg-blue-700 text-white rounder-full border"><Link to={`/subprojects/${project.id}`}>Details</Link></button>
    </div>
  </div>
</div>
          
          )}     
              

</div>
</div>

 
    )
}
export default Projects