import React from "react";
import { useLoaderData } from "react-router-dom";

const SubProject=()=>{

    const projectData=useLoaderData()
    console.log(projectData)
return(
    <div className="bg-gray-200">
        <div className="h-[300px] w-full grid lg:grid-cols-3 grid-cols-1 gap-4 bg-gray-200 drop-shadow-lg">
            <img className="w-full h-full" src={projectData.img1} alt="ami ace"/>
            <img className="w-full h-full" src={projectData.img2} alt="ami ace"/>
            <img className="w-full h-full" src={projectData.img3} alt="ami ace"/>
        </div>
     <div className="w-full bg-gray-200 text-black shadow-xl">

   
 
 
  <div className="card-body">
    <h2 className="card-title">
        <ul>
            <li className="list-disc">{projectData.details1}</li>
            <li className="list-disc">{projectData.details2}</li>
            <li className="list-disc">{projectData.details3}</li>
            <li className="list-disc">{projectData.details4}</li>
            <li className="list-disc">{projectData.details5}</li>
        </ul>
    </h2>
  
    <div className="card-actions justify-end">
    <button ><a href={projectData.git}>Github</a></button>
   <button><a href={projectData.livesite}>Live site</a></button>
   <button><a href="https://github.com/Mohammadibrahim2/protfolio-server">Server site</a></button>
    </div>
  </div>
</div>
     
    </div>
)

}
export default SubProject